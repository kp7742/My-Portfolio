import { useState, useEffect } from 'react';

const CACHE_DURATION = 2 * 3600000; // 2 hour in milliseconds

const useGitHubStats = (repoUrl) => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      if (!repoUrl) {
        setLoading(false);
        return;
      }

      try {
        // Extract owner and repo from GitHub URL
        const match = repoUrl.match(/github\.com\/([^/]+)\/([^/]+)/);
        if (!match) {
          setError('Invalid GitHub URL');
          setLoading(false);
          return;
        }

        const [, owner, repo] = match;
        const cacheKey = `github-stats-${owner}-${repo}`;
        
        // Check cache first
        const cachedData = localStorage.getItem(cacheKey);
        if (cachedData) {
          const { data, timestamp } = JSON.parse(cachedData);
          if (Date.now() - timestamp < CACHE_DURATION) {
            setStats(data);
            setLoading(false);
            return;
          }
        }

        // Fetch fresh data
        const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
        if (!response.ok) {
          throw new Error('Repository not found');
        }

        const data = await response.json();
        const statsData = {
          stars: data.stargazers_count,
          forks: data.forks_count
        };

        // Update cache
        localStorage.setItem(cacheKey, JSON.stringify({
          data: statsData,
          timestamp: Date.now()
        }));

        setStats(statsData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [repoUrl]);

  return { stats, loading, error };
};

export default useGitHubStats; 
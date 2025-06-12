import { motion } from 'framer-motion';
import { blogPosts } from '../assets/data';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import ReactMarkdown from 'react-markdown';

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((post) => post.slug === slug);
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadContent = async () => {
      if (!post) return;
      
      try {
        // If post has an external link, redirect to it
        if (post.link) {
          window.location.href = post.link;
          return;
        }

        // Load markdown content
        const response = await fetch(`/content/${post.slug}.md`);
        if (!response.ok) {
          throw new Error('Content not found');
        }
        const markdown = await response.text();
        setContent(markdown);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, [post]);

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
        <Link to="/blog" className="text-blue-400 hover:text-blue-300">
          ← Back to Blog
        </Link>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto py-16 px-4 text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Error Loading Content</h1>
        <p className="text-red-400 mb-4">{error}</p>
        <Link to="/blog" className="text-blue-400 hover:text-blue-300">
          ← Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <motion.article
      className="max-w-4xl mx-auto py-16 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* <Link
        to="/blog"
        className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8"
      >
        <FiArrowLeft className="mr-2" />
        Back to Blog
      </Link> */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gray-900/50 backdrop-blur-sm rounded-lg shadow-lg p-6 md:p-8 border border-white/10 hover:border-white/20 transition-colors"
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">{post.title}</h1>
        <div className="flex flex-wrap items-center text-gray-400 text-sm mb-8 gap-2">
          <span>{post.date}</span>
          <span className="hidden md:inline">•</span>
          <span>{post.readTime}</span>
          <span className="hidden md:inline">•</span>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded-full text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <hr className="border-t border-white/50 my-8" />

        <div className="prose prose-invert prose-lg max-w-none">
          <ReactMarkdown 
            children={content}
          />
        </div>
      </motion.div>
    </motion.article>
  );
} 
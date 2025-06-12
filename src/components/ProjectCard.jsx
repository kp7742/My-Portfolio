import { motion } from 'framer-motion';
import useGitHubStats from '../hooks/useGitHubStats';
import { FaRegStar, FaCodeFork } from "react-icons/fa6";
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const ProjectCard = ({ project }) => {
    const { stats, loading, error } = useGitHubStats(project.links?.github);
  
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-gray-800/50 rounded-lg overflow-hidden backdrop-blur-sm flex flex-col h-full border border-white/10 hover:border-white/20 transition-colors"
      >
        <div className="relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-50 object-cover"
          />
        </div>
        
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex-grow">
            <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
            <p className="text-gray-300 mb-4 line-clamp-3">{project.description}</p>
          </div>
  
          <div className="mt-auto space-y-4">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm bg-blue-500/20 text-blue-400 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
  
            {project.links?.github && !error && (
              <div className="flex items-center gap-4">
                {loading ? (
                  <div className="h-5 w-20 bg-gray-700 rounded animate-pulse"></div>
                ) : stats && (
                  <>
                    <div className="flex items-center gap-1 text-gray-400">
                      <FaRegStar className="w-4 h-4" />
                      <span>{stats.stars} stars</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-400">
                      <FaCodeFork className="w-4 h-4" />
                      <span>{stats.forks} forks</span>
                    </div>
                  </>
                )}
              </div>
            )}
  
            <div className="flex gap-3">
              {project.links?.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
                >
                  <FiGithub className="w-5 h-5" />
                  <span>GitHub</span>
                </a>
              )}
              {project.links?.visit && (
                <a
                  href={project.links.visit}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
                >
                  <FiExternalLink className="w-5 h-5" />
                  <span>Visit</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    );
};

export default ProjectCard;
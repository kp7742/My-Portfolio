import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { blogPosts } from '../assets/data';

export default function Blog() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <motion.h1
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Blog Posts
      </motion.h1>
      <div className="space-y-8">
        {blogPosts.map((post, index) => (
          <motion.article
            key={post.id}
            className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 hover:bg-gray-700/50 transition-colors border border-white/10 hover:border-white/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {post.link ? (
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <h2 className="text-2xl font-bold mb-2 hover:text-blue-400 transition-colors">
                  {post.title}
                </h2>
              </a>
            ) : (
              <Link to={`/blog/${post.slug}`}>
                <h2 className="text-2xl font-bold mb-2 hover:text-blue-400 transition-colors">
                  {post.title}
                </h2>
              </Link>
            )}
            <div className="flex items-center text-gray-400 text-sm mb-4">
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <span>{post.readTime}</span>
            </div>
            <p className="text-gray-300 mb-4">{post.excerpt}</p>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
} 
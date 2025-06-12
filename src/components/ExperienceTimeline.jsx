import { motion } from 'framer-motion';
import { personalInfo } from '../assets/data';

const ExperienceTimeline = () => {
    return (
        <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-700"></div>
        {personalInfo.experiences.map((exp, index) => (
            <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative pl-12 pb-12 last:pb-0"
            >
            {/* Timeline dot */}
            <div className="absolute left-0 w-8 h-8 rounded-full bg-blue-500 border-4 border-gray-800 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-white"></div>
            </div>
            
            <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                <span className="text-sm text-blue-400">{exp.date}</span>
                </div>
                <h4 className="text-gray-400 mb-3">{exp.subtitle}</h4>
                <p className="text-gray-300">{exp.description}</p>
            </div>
            </motion.div>
        ))}
        </div>
    );
};

export default ExperienceTimeline;
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SiHuggingface } from 'react-icons/si';
import { TypeAnimation } from 'react-type-animation';
import { personalInfo, projects, blogPosts } from '../assets/data';

import { FaFileArrowDown } from "react-icons/fa6";
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram, FiYoutube, FiMail } from 'react-icons/fi';

import Marquee from 'react-fast-marquee';
import ProjectCard from '../components/ProjectCard';
import ExperienceTimeline from '../components/ExperienceTimeline';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const SkillCard = ({ skill }) => {
  return (
    <div className="mx-4 bg-white rounded-lg p-4 shadow-lg border border-gray-200 hover:border-blue-400 transition-all duration-300 skill-card-glow w-[150px] h-[150px] flex flex-col items-center justify-center">
      <img
        src={skill.icon}
        alt={skill.name}
        className="w-16 h-16 object-contain"
      />
      <p className="mt-2 text-gray-800 text-center font-medium">{skill.name}</p>
    </div>
  );
};

const SkillCategory = ({ title, skills, direction = "left", speed = 50 }) => {
  return (
    <div className="mb-12">
      <h3 className="text-xl font-semibold mb-4 text-gray-200 text-center">{title}</h3>
      <Marquee
        gradient={false}
        direction={direction}
        speed={speed}
        className="py-4"
      >
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </Marquee>
    </div>
  );
};

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <motion.img
            src={personalInfo.profileImage}
            alt={personalInfo.name}
            className="w-48 h-48 rounded-full mx-auto mb-8 border-4 border-blue-500"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            {...fadeIn}
          >
            {personalInfo.name}
          </motion.h1>
          <motion.div
            className="text-xl md:text-2xl text-blue-400 mb-8 h-8"
            {...fadeIn}
          >
            <TypeAnimation
              sequence={[
                ...personalInfo.taglines.flatMap(tagline => [tagline, 2000])
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="inline-block text-gray-100"
            />
          </motion.div>
          <motion.p
            className="max-w-2xl mx-auto text-gray-300 mb-8"
            {...fadeIn}
          >
            {personalInfo.bio}
          </motion.p>

          <motion.div
            className="flex flex-col items-center gap-6"
            {...fadeIn}
          >
            <a
              href={personalInfo.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-lg font-medium"
            >
              <FaFileArrowDown className="w-6 h-6" />
              Download Resume
            </a>

            <div className="flex flex-wrap justify-center gap-6">
              <a
                href={`mailto:${personalInfo.socialLinks.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="h-auto w-auto border-2 rounded-full p-2 text-gray-200 hover:bg-white hover:text-cyan-600 transition-colors"
                title="Email"
              >
                <FiMail className="w-6 h-6" />
              </a>
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="h-auto w-auto border-2 rounded-full p-2 text-gray-200 hover:bg-white hover:text-gray-600 transition-colors"
                title="GitHub"
              >
                <FiGithub className="w-6 h-6" />
              </a>
              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="h-auto w-auto border-2 rounded-full p-2 text-gray-200 hover:bg-white hover:text-blue-500 transition-colors"
                title="LinkedIn"
              >
                <FiLinkedin className="w-6 h-6" />
              </a>
              {/* <a
                href={personalInfo.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="h-auto w-auto border-2 rounded-full p-2 text-gray-200 hover:bg-white hover:text-fuchsia-600 transition-colors"
                title="Instagram"
              >
                <FiInstagram className="w-6 h-6" />
              </a> */}
              <a
                href={personalInfo.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="h-auto w-auto border-2 rounded-full p-2 text-gray-200 hover:bg-white hover:text-blue-500 transition-colors"
                title="Twitter"
              >
                <FiTwitter className="w-6 h-6" />
              </a>
              <a
                href={personalInfo.socialLinks.huggingface}
                target="_blank"
                rel="noopener noreferrer"
                className="h-auto w-auto border-2 rounded-full p-2 text-gray-200 hover:bg-white hover:text-yellow-500 transition-colors"
                title="Hugging Face"
              >
                <SiHuggingface className="w-6 h-6" />
              </a>
              <a
                href={personalInfo.socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="h-auto w-auto border-2 rounded-full p-2 text-gray-200 hover:bg-white hover:text-red-500 transition-colors"
                title="YouTube"
              >
                <FiYoutube className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16">
        <motion.div
          className="w-full px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Skills & Technologies</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          </div>
          <div className="space-y-8">
            <SkillCategory
              title="Programming Languages"
              skills={personalInfo.skills.langs}
              direction="left"
              speed={40}
            />
            <SkillCategory
              title="Technologies & Frameworks"
              skills={personalInfo.skills.technologies}
              direction="right"
              speed={50}
            />
            <SkillCategory
              title="Tools & Platforms"
              skills={personalInfo.skills.tools}
              direction="left"
              speed={45}
            />
          </div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-white">Experience</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <ExperienceTimeline />
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-16">
        <motion.div
          className="max-w-4xl mx-auto px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Latest Blog Posts</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          </div>
          <div className="space-y-8">
            {blogPosts.slice(0, 3).map((post, index) => (
              <article
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 hover:border-white/20 transition-colors"
              >
                <a
                  href={post.link || `/blog/${post.slug}`}
                  target={post.link ? "_blank" : "_self"}
                  rel={post.link ? "noopener noreferrer" : ""}
                  className="block"
                >
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                    <p className="text-gray-300 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                      <span className="text-sm text-blue-400">
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </a>
              </article>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/blog"
              className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              View All Posts
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16">
        <motion.div
          className="max-w-6xl mx-auto px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Projects</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          </div>
          <div className="grid content-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          </div>
          <p className="text-gray-300 mb-8">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          <a
            href={`mailto:${personalInfo.socialLinks.email}`}
            className="inline-block bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Contact Me
          </a>
        </motion.div>
      </section>
    </div>
  );
} 
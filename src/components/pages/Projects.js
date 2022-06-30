import TitleAnim from "../containers/TitleAnim";
import GithubData from "../containers/GithubData";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { IoMdLink, IoLogoGithub } from "react-icons/io";

import data from "../../assets/data";

function Projects() {
  return (
    <section className="Projects">
      <div id="projects" className="flex flex-col items-center justify-center mt-10 p-5">
        <TitleAnim title="Projects" />

        <div className="flex flex-wrap items-center justify-center mt-10 gap-6 z-10">
          {data.projects.map((project) => {
            return (
              <div className="w-96 bg-[#21222c] shadow-xl rounded-xl overflow-hidden hover:scale-105">
                <div className="bg-gray-200">
                  <img
                    className="w-96 h-60"
                    src={project.image}
                    alt={project.name}
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-center text-2xl font-semibold text-neon">
                    {project.name}
                  </h3>

                  <p className="text-center text-textDark mt-2">
                    {project.description}
                  </p>

                  <GithubData repo={project.link.github} />

                  <div className="flex flex-wrap items-center justify-center mt-2">
                    {project.technologies.map((tech) => {
                      return (
                        <span className="inline-block bg-text text-darkerBlue border-2 rounded-full px-3 py-1 mt-2 mr-2">
                          {tech}
                        </span>
                      )
                    })}
                  </div>

                  <div className="flex justify-center mt-4 space-x-4">
                    {project.link.github && (
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href={project.link.github}
                        className="flex items-center px-5 py-2 border-2 rounded-lg"
                      >
                        <IoLogoGithub />
                        <span className="ml-2">GitHub</span>
                      </a>
                    )}
                    {project.link.visit && (
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href={project.link.visit}
                        className="flex items-center px-5 py-2 border-2 rounded-lg"
                      >
                        <IoMdLink />
                        <span className="ml-2">Visit</span>
                      </a>
                    )}
                    {project.link.playstore && (
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href={project.link.playstore}
                        className="flex items-center px-5 py-2 border-2 rounded-lg"
                      >
                        <IoLogoGooglePlaystore />
                        <span className="ml-2">Playstore</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
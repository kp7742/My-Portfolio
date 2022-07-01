import Marquee from "react-fast-marquee";
import TitleAnim from "../containers/TitleAnim";

import data from "../../assets/data";

function Skills() {
    return (
      <section className="Skills">
        <div id="skills" className="flex flex-col items-center justify-center mt-14">
            <TitleAnim title="Skills" />

            <h2 className="text-center font-bold text-xl md:text-2xl mt-10">
                Languages
            </h2>

            <Marquee className="mt-5" speed={30} pauseOnHover={true} gradient={false}>
                {data.skills.langs.map((lang) => {
                    return (
                        <div className="flex flex-col w-32 h-32 items-center justify-center bg-white rounded-lg shadow-lg ml-6">
                            <img
                                className="w-20 h-20 mt-3"
                                src={lang.icon}
                                alt={lang.name}
                            />
                            <h2 className="text-black mt-1 mb-2">
                                {lang.name}
                            </h2>
                        </div>
                    )
                })}
            </Marquee>

            <h2 className="text-center font-bold text-xl md:text-2xl mt-10">
                Technologies
            </h2>

            <Marquee className="mt-5" speed={20} pauseOnHover={true} gradient={false}>
                {data.skills.technologies.map((technologie) => {
                    return (
                        <div className="flex flex-col w-32 h-32 items-center justify-center bg-white rounded-lg shadow-lg ml-6">
                            <img
                                className="w-20 h-20 mt-3"
                                src={technologie.icon}
                                alt={technologie.name}
                            />
                            <h2 className="text-black mt-1 mb-2">
                                {technologie.name}
                            </h2>
                        </div>
                    )
                })}
            </Marquee>

            <h2 className="text-center font-bold text-xl md:text-2xl mt-10">
                Tools
            </h2>

            <Marquee className="mt-5" speed={25} pauseOnHover={true} gradient={false}>
                {data.skills.tools.map((tool) => {
                    return (
                        <div className="flex flex-col w-32 h-32 items-center justify-center bg-white rounded-lg shadow-lg ml-6">
                            <img
                                className="w-20 h-20 mt-3"
                                src={tool.icon}
                                alt={tool.name}
                            />
                            <h2 className="text-black mt-1 mb-2">
                                {tool.name}
                            </h2>
                        </div>
                    )
                })}
            </Marquee>
        </div>
      </section>
    );
  }
    
  export default Skills;
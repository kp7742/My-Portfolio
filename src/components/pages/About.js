import TitleAnim from "../containers/TitleAnim";
import { IoIosMail, IoLogoTwitter, IoLogoGithub, IoLogoLinkedin, IoLogoInstagram, IoLogoYoutube } from "react-icons/io";
import { IoDocumentText, IoLogoGooglePlaystore } from "react-icons/io5";

import data from "../../assets/data";

function About() {
  return (
    <section className="About">
      <div id="about" className="flex flex-col items-center justify-center mt-10 p-5">
        <TitleAnim title="About Me" />

        <div className="flex flex-col items-center justify-center md:flex-row mt-5">
          <p className="flex flex-wrap items-center justify-center mt-10 md:w-1/2">
            <div className="p-5">
              <h3 className="text-3xl font-semibold text-neon">
                {data.name}
              </h3>

              <p className="text-lg text-textDark mt-4">
                {data.description}
              </p>

              <div className="flex justify-start mt-4 space-x-4">
                <a target="_blank" rel="noreferrer" href={"mailto:" + data.social.email}>
                  <IoIosMail className="h-14 w-auto border-2 rounded-full p-2 hover:bg-gray-600 transition-colors" />
                </a>
                <a target="_blank" rel="noreferrer" href={data.social.github}>
                  <IoLogoGithub className="h-14 w-auto border-2 rounded-full p-2 hover:bg-gray-600 transition-colors" />
                </a>
                <a target="_blank" rel="noreferrer" href={data.social.twitter}>
                  <IoLogoTwitter className="h-14 w-auto border-2 rounded-full p-2 hover:bg-gray-600 transition-colors" />
                </a>
                <a target="_blank" rel="noreferrer" href={data.social.linkedin}>
                  <IoLogoLinkedin className="h-14 w-auto border-2 rounded-full p-2 hover:bg-gray-600 transition-colors" />
                </a>
              </div>

              <div className="flex justify-start mt-4 space-x-4">
                <a target="_blank" rel="noreferrer" href={data.social.instagram}>
                  <IoLogoInstagram className="h-14 w-auto border-2 rounded-full p-2 hover:bg-gray-600 transition-colors" />
                </a>
                <a target="_blank" rel="noreferrer" href={data.social.youtube}>
                  <IoLogoYoutube className="h-14 w-auto border-2 rounded-full p-2 hover:bg-gray-600 transition-colors" />
                </a>
                <a target="_blank" rel="noreferrer" href={data.social.playstore}>
                  <IoLogoGooglePlaystore className="h-14 w-auto border-2 rounded-full p-2 hover:bg-gray-600 transition-colors" />
                </a>
                <a target="_blank" rel="noreferrer" href={data.resume}>
                  <IoDocumentText className="h-14 w-auto border-2 rounded-full p-2 hover:bg-gray-600 transition-colors" />
                </a>
              </div>
            </div>
          </p>

          <div className="relative mt-20 rounded-xl md:mt-0 w-80 h-96">
            <img
              className="w-96 h-96 border-2 border-black rounded-xl object-cover"
              src={data.profile.src}
              alt={data.profile.alt}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

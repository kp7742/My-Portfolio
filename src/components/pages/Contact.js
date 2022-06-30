import { IoLogoTwitter, IoLogoGithub, IoLogoLinkedin } from "react-icons/io";

import data from "../../assets/data";

function Contact() {
  return (
    <footer className="Contact">
        <div id="contact" className="flex flex-col items-center justify-center mt-10">
          <h2 className="text-center text-3xl md:text-4xl text-text">
              <span className="text-neon font-fira">Contact Me</span>
          </h2>

          <h3 className="text-center font-bold text-2xl md:text-3xl text-text mt-5">
              <a href={"mailto:" + data.social.email}>
                <span className="text-neon font-fira">{data.social.email}</span>
              </a>
          </h3>

          <div className="flex flex-row gap-4 mt-6 z-10">
            <a target="_blank" rel="noreferrer" href={data.social.twitter}>
              <IoLogoTwitter className="h-12 w-auto border-2 rounded-full p-2 hover:bg-white hover:text-blue-500 transition-colors" />
            </a>
            <a target="_blank" rel="noreferrer" href={data.social.github}>
              <IoLogoGithub className="h-12 w-auto border-2 rounded-full p-2 hover:bg-white hover:text-gray-600 transition-colors" />
            </a>
            <a target="_blank" rel="noreferrer" href={data.social.linkedin}>
              <IoLogoLinkedin className="h-12 w-auto border-2 rounded-full p-2 hover:bg-white hover:text-blue-700 transition-colors" />
            </a>
          </div>

          <p className="text-xl text-gray-200 mt-6 mb-4">
              Made with <span>❤️</span> by {data.name}
          </p>
        </div>
    </footer>
  );
}
  
export default Contact;
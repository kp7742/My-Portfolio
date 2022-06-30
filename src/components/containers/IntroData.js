import { Link } from "react-scroll";
import { IoIosArrowDown } from "react-icons/io";
import TypeWriterEffect from 'react-typewriter-effect';

import data from "../../assets/data";

function IntroData() {
  return (
    <div className="flex flex-col h-screen w-full relative justify-center items-center">
      <div>
        <div>
          <img
            className="w-56 mx-auto border-dashed border-[3px] shadow-xl rounded-full"
            src={data.logo.src}
            alt={data.logo.alt}
          />
        </div>
        <div className="text-center mt-5">
          <p className="text-3xl sm:text-3xl font-semibold">
            Hello! I'm {data.name}
          </p>
          <p className="pt-4 p-2 w-auto">
            <TypeWriterEffect
              textStyle={{
                color: 'white',
                textAlign: 'center',
                fontWeight: 500,
                fontSize: '1.5em',
              }}
              startDelay={800}
              cursorColor="white"
              multiText={data.texts}
              multiTextLoop={true}
              multiTextDelay={2000}
              typeSpeed={50}
            />
          </p>
        </div>
      </div>
      <div className="text-xl relative mx-auto top-10 rounded-full border-2 hover:bg-zinc-700">
        <Link
          activeClass="active"
          to="About"
          spy={true}
          smooth={true}
          offset={-20}
          duration={500}>
            <IoIosArrowDown className="h-11 w-9 text-white" />
        </Link>
      </div>
    </div>
  );
}

export default IntroData;
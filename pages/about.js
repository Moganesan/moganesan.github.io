import Image from "next/image";
import Profile from "../public/about.jpeg";
import ResponsiveDesign from "../public/services/responsiveWebdesign.svg";
import AppDevelopment from "../public/services/appdevelopment.svg";
import BackendDevelopment from "../public/services/backend.svg";
import FrontendDevelopment from "../public/services/frontend.svg";

const About = () => {
  return (
    <div className="mb-16 p-20">
      <h2 className="text-black2 font-bold text-center text-5xl">About Me</h2>
      <div className="flex items-center justify-center self-center mt-10">
        <div className="w-72 rounded-xl overflow-hidden flex items-center justify-center mt-10">
          <Image src={Profile} />
        </div>
        <div className="ml-40 w-1/2">
          <h3 className="text-3xl font-bold text-purple">Learn about me</h3>
          <p className="text-2xl font-Russo-One text-black2 mt-4">
            I'm Moganesan, Im a Full-Stack Web <br></br> & Mobile Application
            Developer.
          </p>
          <p className="text-black2 mt-5 font-medium">
            Love computers & programming. I can develop any kind of web and
            mobile applications with latest trending technologies, and i love to
            do this. I only use cross platform trending technologies so your
            product work with any platforms.
          </p>
          <div className="grid grid-cols-2 mt-10 gap-5">
            <div>
              <p className="font-bold">Name:</p>
              <div className="font-bold text-purple text-lg">Moganesan</div>
            </div>
            <div>
              <p className="font-bold">Age:</p>
              <div className="font-bold text-purple text-lg">18</div>
            </div>
            <div>
              <p className="font-bold">From:</p>
              <div className="font-bold text-purple text-lg">
                Erode,Tamilnadu
              </div>
            </div>
            <div>
              <p className="font-bold">Email:</p>
              <div className="font-bold text-purple text-lg">
                contact@moganesan.com
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <h2 className="font-bold text-3xl text-black2">My Services:</h2>
        <div className="grid grid-cols-2 text-center place-items-center gap-20 mt-28">
          <div>
            <Image src={FrontendDevelopment} />
            <p className="font-bold text-xl mt-5">Frontend Development</p>
          </div>
          <div>
            <Image src={ResponsiveDesign} />
            <p className="font-bold text-xl mt-5">UI/UX Designing</p>
          </div>
          <div>
            <Image src={BackendDevelopment} />
            <p className="font-bold text-xl mt-5">Backend Development</p>
          </div>
          <div>
            <Image src={AppDevelopment} />
            <p className="font-bold text-xl mt-10">
              Cross Platform App Development
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

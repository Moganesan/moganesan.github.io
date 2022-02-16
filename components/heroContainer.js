import Profile from "../public/profile.jpg";
import Image from "next/image";
import Head from "next/head";

const Hero = () => {
  return (
    <div className="flex flex-col items-center">
      <h3 className="font-Russo-One text-4xl text-black2 mt-20">
        Developer,Designer & Content Creator
      </h3>
      <h5 className="font-Varela-Round w-2/3 text-center text-xl text-black2 mt-7">
        Love computers & programming.<br></br> I develope high quality
        applications with excellent technologies
      </h5>
      <div className={`mt-20 w-60 h-60 overflow-hidden rounded-full anime`}>
        <Image alt="profile" src={Profile} />
      </div>
    </div>
  );
};

export default Hero;

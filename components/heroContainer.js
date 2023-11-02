import Image from "next/image";

import TypingAnimation from "./typeWrite";
const Hero = () => {
  return (
    <div className="flex flex-col items-center smb:p-10 md:p-20 sm:p-14 dark:bg-darkBackground2 text-black2 dark:text-white2  p-28">
      <span className="flex mb-4 items-center justify-center font-Russo-One md:text-3xl sm:text-xl smb:text-xl text-text1">
        {"<h2>"}
        <h3 className="font-Russo-One md:text-3xl text-green sm:text-xl text-center smb:text-xl">
          I&apos;m excited to do,
        </h3>
        {"</h2>"}
      </span>

      <TypingAnimation />
      <div className={`mt-20 w-60 h-60 overflow-hidden rounded-full anime`}>
        <Image alt="profile" src={"/profile.jpg"} width={300} height={300} />
      </div>
      <div className="mt-20">
        <div className="relative">
          <div className="opacity-40 absolute bottom-1">
            <Image
              alt="quote"
              width={60}
              height={60}
              src={"/icons/quoteLeft.svg"}
            />
          </div>
          <span className="flex mb-4 items-center justify-center font-Russo-One text-2xl text-text1">
            {"<quote>"}
            <p className="font-bold text-2xl text-green">
              The Master has failed more times than the beginner has tried.
            </p>
            {"</quote>"}
          </span>
        </div>
        <span className="mb-4 flex items-center justify-end font-Russo-One text-xl text-text1">
          {"<author>"}
          <p className="text-xl text-green">-Stephen McCranie</p>
          {"<author>"}
        </span>
      </div>
    </div>
  );
};

export default Hero;

import Profile from "../public/profile.jpg";
import Image from "next/image";
import QuoteLeft from "../public/icons/quoteLeft.svg";
import QuoteRight from "../public/icons/quoteRight.svg";

const Hero = () => {
  return (
    <div className="flex flex-col items-center smb:p-10 md:p-20 sm:p-14 dark:bg-darkBackground2 text-black2 dark:text-white2  p-28">
      <h3 className="font-Russo-One md:text-5xl sm:text-3xl text-center smb:text-3xl">
        Developer,Designer & Content Creator🔥
      </h3>
      <h5 className="font-Varela-Round w-2/3 text-center text-xl sm:text-xl md:text-xl dark:text-grey mt-7 smb:text-lg">
        Love computers & programming.<br></br> I develope high quality
        applications with help of excellent technologies.
      </h5>
      <div className={`mt-20 w-60 h-60 overflow-hidden rounded-full anime`}>
        <Image alt="profile" src={Profile} />
      </div>
      <div className="mt-20">
        <div className="relative">
          <div className="opacity-40 absolute bottom-1">
            <Image alt="quote" width={60} height={60} src={QuoteLeft} />
          </div>
          <p className="font-bold text-2xl">
            The Master has failed more times than the beginner has tried.
          </p>
        </div>
        <p className="text-right text-xl mr-10 mt-5">-Stephen McCranie</p>
      </div>
    </div>
  );
};

export default Hero;

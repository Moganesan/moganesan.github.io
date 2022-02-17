import CoverImage from "../public/platforms.jpg";
import Image from "next/image";
const Platforms = () => {
  return (
    <div className="bg-grey3 smb:p-5 sm:p-16">
      <h2 className="font-bold text-black2 smb:text-xl sm:text-4xl">
        I can develop applications for all platform.
      </h2>
      <p className="text-black2">
        Im using cross platform technologies like react-native so your app run
        both android and ios.
      </p>
      <p></p>
      <Image alt="sample" src={CoverImage} />
    </div>
  );
};

export default Platforms;

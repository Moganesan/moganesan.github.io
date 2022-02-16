import CoverImage from "../public/platforms.jpg";
import Image from "next/image";
const Platforms = () => {
  return (
    <div className="bg-grey3 p-16">
      <h2 className="font-bold text-black2 text-4xl">
        We develop applications for all platform.
      </h2>
      <p className="text-black2">
        we are using cross platform development freamworks so your app will run
        any devices.
      </p>
      <p></p>
      <Image src={CoverImage} />
    </div>
  );
};

export default Platforms;

import Image from "next/image";
const Platforms = () => {
  return (
    <div className="smb:p-5 sm:p-16">
      <h2 className="font-bold text-black2 smb:text-xl sm:text-4xl">
        I can develop applications for any platform.
      </h2>
      <p className="text-black2">
        Im using cross platform technologies like react-native so your app run
        both android and ios.
      </p>
      <p></p>
      <Image alt="sample" src={"/platform.jpg"} />
    </div>
  );
};

export default Platforms;

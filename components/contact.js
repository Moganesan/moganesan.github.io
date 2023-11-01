const Contact = () => {
  return (
    <div className="sm:p-36 smb:p-10">
      <span className="text-text1 justify-center smb:text-2xl font-bold text-center sm:text-5xl flex items-center">
        {"<>"}
        <h2 className="text-green font-Russo-One">Start Your Project</h2>
        {"</>"}
      </span>
      <form className="sm:p-12 smb:mt-10 smb:gap-10 self-center grid  sm:grid-cols-2 sm:gap-20">
        <div className="flex  items-center flex-col">
          <label className="text-grey font-bold text-2xl">Name</label>
          <input className="w-full dark:bg-greenBackground dark:border-black dark:focus:border-green bg-white mt-5 border-grey border-2 focus:bg-grey focus:border-green outline-none p-5 font-bold" />
        </div>
        <div className="flex  items-center flex-col">
          <label className="text-grey font-bold text-2xl">Email</label>
          <input
            type={"email"}
            className="w-full dark:bg-greenBackground dark:border-black dark:focus:border-green bg-white mt-5 border-grey border-2 focus:border-green focus:bg-grey outline-none p-5 font-bold"
          />
        </div>
        <div className="flex  items-center flex-col">
          <label className="text-grey font-bold text-2xl">Contact Number</label>
          <input
            type="tel"
            className="w-full dark:bg-greenBackground dark:border-black dark:focus:border-green bg-white mt-5 border-grey border-2 focus:border-green focus:bg-grey outline-none p-5 font-bold"
          />
        </div>
        <div className="flex  items-center flex-col">
          <label className="text-grey font-bold text-2xl">
            Project Platform
          </label>
          <select className="w-full dark:bg-greenBackground dark:border-black dark:focus:border-green bg-white mt-5 border-grey border-2 focus:border-green focus:bg-grey outline-none p-5 font-bold">
            <option>Web Application</option>
            <option>Android / IOS Application</option>
          </select>
        </div>
        <div className="sm:col-start-1 sm:col-end-3 text-center">
          <label className="text-grey font-bold text-2xl">
            Additional Information
          </label>
          <textarea className="w-full dark:bg-greenBackground dark:border-black dark:focus:border-green bg-white mt-5 border-grey h-40 border-2 focus:border-green focus:bg-grey outline-none p-5 font-bold" />
        </div>
      </form>
      <div className="flex justify-center">
        <button className="border-2 p-3 border-green hover:bg-greenBackground2 duration-500 font-bold text-green">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Contact;

const Contact = () => {
  return (
    <div className="sm:p-36 smb:p-10 dark:bg-darkBackground2">
      <h2 className="text-black2 smb:text-2xl font-bold text-center dark:text-white sm:text-5xl">
        🚀Start Your Project
      </h2>
      <form className="sm:p-12 smb:mt-10 smb:gap-10 self-center grid  sm:grid-cols-2 sm:gap-20">
        <div className="flex  items-center flex-col">
          <label className="text-grey2 font-bold text-2xl">Name</label>
          <input className="w-full dark:bg-black2 dark:border-black dark:focus:border-purple bg-white mt-5 border-grey border-2 focus:bg-grey focus:border-purple outline-none p-5 font-bold rounded-md" />
        </div>
        <div className="flex  items-center flex-col">
          <label className="text-grey2 font-bold text-2xl">Email</label>
          <input
            type={"email"}
            className="w-full dark:bg-black2 dark:border-black dark:focus:border-purple bg-white mt-5 border-grey border-2 focus:border-purple focus:bg-grey outline-none p-5 font-bold rounded-md"
          />
        </div>
        <div className="flex  items-center flex-col">
          <label className="text-grey2 font-bold text-2xl">
            Contact Number
          </label>
          <input
            type="tel"
            className="w-full dark:bg-black2 dark:border-black dark:focus:border-purple bg-white mt-5 border-grey border-2 focus:border-purple focus:bg-grey outline-none p-5 font-bold rounded-md"
          />
        </div>
        <div className="flex  items-center flex-col">
          <label className="text-grey2 font-bold text-2xl">
            Project Platform
          </label>
          <select className="w-full dark:bg-black2 dark:border-black dark:focus:border-purple bg-white mt-5 border-grey border-2 focus:border-purple focus:bg-grey outline-none p-5 font-bold rounded-md">
            <option>Web Application</option>
            <option>Android / IOS Application</option>
          </select>
        </div>
        <div className="sm:col-start-1 sm:col-end-3 text-center">
          <label className="text-grey2 font-bold text-2xl">
            Additional Information
          </label>
          <textarea className="w-full dark:bg-black2 dark:border-black dark:focus:border-purple bg-white mt-5 border-grey h-40 border-2 focus:border-purple focus:bg-grey outline-none p-5 font-bold rounded-md" />
        </div>
      </form>
      <div className="flex justify-center">
        <button className="border-2 p-3 dark:bg-black dark:hover:bg-purple rounded-2xl border-purple hover:bg-purple hover:text-white duration-500 bg-white font-bold text-purple">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Contact;

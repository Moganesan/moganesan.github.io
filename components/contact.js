const Contact = () => {
  return (
    <div className="p-36 mb-12">
      <h2 className="text-black2 font-bold text-center text-5xl">
        Start Your Project
      </h2>
      <form className="p-12 self-center grid  grid-cols-2 gap-20">
        <div className="flex  items-center flex-col">
          <label className="text-grey2 font-bold text-2xl">Name</label>
          <input className="w-full bg-white mt-5 border-grey border-2 focus:bg-grey focus:border-purple outline-none p-5 font-bold rounded-md" />
        </div>
        <div className="flex  items-center flex-col">
          <label className="text-grey2 font-bold text-2xl">Email</label>
          <input className="w-full bg-white mt-5 border-grey border-2 focus:border-purple focus:bg-grey outline-none p-5 font-bold rounded-md" />
        </div>
        <div className="flex  items-center flex-col">
          <label className="text-grey2 font-bold text-2xl">
            Contact Number
          </label>
          <input className="w-full bg-white mt-5 border-grey border-2 focus:border-purple focus:bg-grey outline-none p-5 font-bold rounded-md" />
        </div>
        <div className="flex  items-center flex-col">
          <label className="text-grey2 font-bold text-2xl">
            Project Platform
          </label>
          <select className="w-full bg-white mt-5 border-grey border-2 focus:border-purple focus:bg-grey outline-none p-5 font-bold rounded-md">
            <option>Web Application</option>
            <option>Android / IOS Application</option>
          </select>
        </div>
        <div className="col-start-1 col-end-3 text-center">
          <label className="text-grey2 font-bold text-2xl">
            Additional Information
          </label>
          <input className="w-full bg-white mt-5 border-grey h-40 border-2 focus:border-purple focus:bg-grey outline-none p-5 font-bold rounded-md" />
        </div>
      </form>
      <div className="flex justify-center">
        <button className="border-2 p-3 rounded-2xl border-purple hover:bg-purple hover:text-white duration-500 bg-white font-bold text-purple">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Contact;

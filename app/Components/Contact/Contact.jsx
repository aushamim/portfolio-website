import React from "react";

const Contact = () => {
  return (
    <div className="bg-white p-5 xl:py-20 xl:px-40">
      <div>
        <h1 className="text-4xl font-semibold text-center">Contact Me</h1>
        <span className="w-24 h-1 mt-1 mx-auto bg-purple-500 rounded block"></span>
      </div>
      <div className="mt-16 grid grid-cols-3 gap-20">
        <form className="col-span-2 grid grid-cols-1 xl:grid-cols-2 gap-y-5 gap-x-10">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Name</span>
            </div>
            <input
              type="text"
              placeholder="Type your name here"
              className="input input-bordered w-full rounded-md border-purple-200 shadow-2xl shadow-purple-200 focus:outline-0 focus:shadow-2xl focus:shadow-purple-200 focus:border-purple-400 duration-300"
              required
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Email</span>
            </div>
            <input
              type="email"
              placeholder="Type your email here"
              className="input input-bordered w-full rounded-md border-purple-200 shadow-2xl shadow-purple-200 focus:outline-0 focus:shadow-2xl focus:shadow-purple-200 focus:border-purple-400 duration-300"
              required
            />
          </label>
          <label className="form-control xl:col-span-2 w-full">
            <div className="label">
              <span className="label-text">Message</span>
            </div>
            <textarea
              className="textarea textarea-bordered py-3 text-base rounded-md border-purple-200 shadow-2xl shadow-purple-200 focus:outline-0 focus:shadow-2xl focus:shadow-purple-200 focus:border-purple-400 duration-300"
              placeholder="Type your message here"
              rows={11}
              required
            ></textarea>
          </label>
          <div className="xl:col-span-2">
            <input
              type="submit"
              value="Send"
              className="btn-purple ml-auto mt-5 !mb-0 !px-10"
            />
          </div>
        </form>
        <div>
          <div className="p-5 border border-purple-200 hover:border-purple-400 duration-300 rounded-md mt-8 mb-5">
            <p className="text-xl text-purple-600 font-semibold mb-3">Email:</p>
            <p className="text-xl">au.shamim0@gmail.com</p>
          </div>
          <div className="p-5 border border-purple-200 hover:border-purple-400 duration-300 rounded-md mb-5">
            <p className="text-xl text-purple-600 font-semibold mb-3">Phone:</p>
            <p className="text-xl">01866353438</p>
          </div>
          <div className="p-5 border border-purple-200 hover:border-purple-400 duration-300 rounded-md mb-5">
            <p className="text-xl text-purple-600 font-semibold mb-3">
              Address:
            </p>
            <p className="text-xl">
              House 239, Road 6, Mohammadia Housing Limited, Mohammadpur, Dhaka
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

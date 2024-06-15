"use client";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

const Contact = () => {
  const handleSendMail = (e) => {
    e.preventDefault();

    const name = e.target.elements["name"].value;
    const email = e.target.elements["email"].value;
    const message = e.target.elements["message"].value;

    console.log({ name, email, message });
    const promise = () => {
      return emailjs
        .send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          { name, email, message },
          {
            publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
          }
        )
        .then(
          () => {
            e.target.elements["name"].value = "";
            e.target.elements["email"].value = "";
            e.target.elements["message"].value = "";
          },
          (error) => {
            throw error;
          }
        );
    };

    toast.promise(promise, {
      loading: "Sending Message",
      success: "Message Sent",
      error: (error) => {
        return error;
      },
    });
  };

  return (
    <div className="bg-white px-5 py-20 xl:px-40">
      <div>
        <h1 className="text-4xl font-semibold text-center">Get In Touch</h1>
        <span className="w-24 h-1 mt-1 mx-auto bg-purple-500 rounded block"></span>
      </div>

      <div className="mt-16 grid grid-cols-1 xl:grid-cols-3 gap-10 xl:gap-20">
        <form
          onSubmit={handleSendMail}
          className="xl:col-span-2 grid grid-cols-1 xl:grid-cols-2 gap-2 xl:gap-y-5 xl:gap-x-10"
        >
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Name</span>
            </div>
            <input
              id="name"
              type="text"
              placeholder="Type your name here"
              className="input input-bordered w-full rounded-md border-purple-200 focus:outline-0 focus:shadow-2xl focus:shadow-purple-200 focus:border-purple-400 duration-300"
              required
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Email</span>
            </div>
            <input
              id="email"
              type="email"
              placeholder="Type your email here"
              className="input input-bordered w-full rounded-md border-purple-200 focus:outline-0 focus:shadow-2xl focus:shadow-purple-200 focus:border-purple-400 duration-300"
              required
            />
          </label>
          <label className="form-control xl:col-span-2 w-full">
            <div className="label">
              <span className="label-text">Message</span>
            </div>
            <textarea
              id="message"
              className="textarea textarea-bordered py-3 text-base rounded-md border-purple-200 focus:outline-0 focus:shadow-2xl focus:shadow-purple-100 focus:border-purple-400 duration-300"
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

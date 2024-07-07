import Image from "next/image";
import React from "react";

const PersonalInformation = () => {
  return (
    <div className="bg-white py-20 px-5 xl:p-20 xl:pb-10 border-b">
      <div>
        <h1 className="text-4xl font-semibold text-center">
          Personal Informations
        </h1>
        <span className="w-20 h-1 mx-auto bg-purple-500 rounded block"></span>
      </div>
      <div className="mt-10 grid grid-cols-1 xl:grid-cols-5 gap-10 text-lg">
        <div className="relative border border-purple-200 hover:border-purple-500 duration-300 rounded-md p-5 font-medium">
          au.shamim0@gmail.com
          <Image
            src="/assets/images/mail.png"
            alt="Shamim Image"
            className="absolute right-1 bottom-0 h-auto w-10 p-info-filter"
            width={0}
            height={0}
            sizes="100w"
          />
        </div>
        <div className="relative border border-purple-200 hover:border-purple-500 duration-300 rounded-md p-5 font-medium">
          <span className="text-slate-400">+88</span> 01866353438
          <Image
            src="/assets/images/phone-call.png"
            alt="Shamim Image"
            className="absolute right-1 bottom-1 h-auto w-10 p-info-filter"
            width={0}
            height={0}
            sizes="100w"
          />
        </div>
        <div className="relative border border-purple-200 hover:border-purple-500 duration-300 rounded-md p-5 font-medium">
          Mohammadpur, Dhaka
          <Image
            src="/assets/images/address.png"
            alt="Shamim Image"
            className="absolute right-1 bottom-1 h-auto w-10 p-info-filter"
            width={0}
            height={0}
            sizes="100w"
          />
        </div>
        <div className="relative border border-purple-200 hover:border-purple-500 duration-300 rounded-md p-5 font-medium">
          <a href="https://www.linkedin.com/in/aushamim/">
            linkedin.com/in/aushamim
          </a>
          <Image
            src="/assets/images/linkedin.png"
            alt="Shamim Image"
            className="absolute right-1 bottom-1 h-auto w-10 p-info-filter"
            width={0}
            height={0}
            sizes="100w"
          />
        </div>
        <div className="relative border border-purple-200 hover:border-purple-500 duration-300 rounded-md p-5 font-medium">
          <a href="https://github.com/aushamim">github.com/aushamim</a>
          <Image
            src="/assets/images/github.png"
            alt="Shamim Image"
            className="absolute right-0 bottom-0 h-auto w-12 p-info-filter"
            width={0}
            height={0}
            sizes="100w"
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;

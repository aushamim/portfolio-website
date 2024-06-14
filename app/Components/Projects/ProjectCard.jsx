import Image from "next/image";
import React from "react";

const ProjectCard = () => {
  return (
    <div className="w-full xl:w-2/3 xl:h-64 bg-white mx-auto my-10 xl:my-20 rounded-md flex flex-col xl:flex-row items-center justify-center shadow-sm shadow-purple-100 group">
      <div className="p-5 xl:p-10 pb-0 group-hover:p-0 group-hover:h-0 xl:group-hover:w-0 overflow-hidden duration-300">
        <h1 className="text-3xl font-semibold text-purple-600 mb-5 xl:mb-8">
          1
        </h1>
      </div>
      <div className="flex-grow p-2 xl:p-5">
        <h1 className="text-4xl font-medium text-center xl:text-left">
          The Mess The Mess
        </h1>
        <div className="flex justify-center xl:justify-start gap-2 mt-2">
          <span className="px-2 border border-purple-500 rounded-md">
            React
          </span>
          <span className="px-2 border border-purple-500 rounded-md">
            Django
          </span>
        </div>
      </div>
      <div className="relative group/card h-60 aspect-video">
        <div className="absolute top-1/2 -translate-y-1/2 xl:translate-y-0 xl:top-0 left-1/2 -translate-x-1/2 xl:-left-2 xl:translate-x-0 group-hover/card:rotate-[6deg] h-44 xl:h-56 group-hover/card:h-48 xl:group-hover/card:h-60 aspect-video group-hover/card:border rounded-md group-hover:scale-[1.15] xl:group-hover:scale-150 duration-300 bg-white group-hover:shadow-sm group-hover:shadow-purple-200 z-[1] overflow-hidden">
          <Image
            src="/assets/images/shamim_transparent.png"
            alt="Shamim Image"
            className="h-auto w-full"
            width={0}
            height={0}
            sizes="100w"
          />
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 xl:translate-y-0 xl:top-0 left-1/2 -translate-x-1/2 xl:-left-2 xl:translate-x-0 group-hover/card:rotate-[4deg] h-44 xl:h-56 group-hover/card:h-48 xl:group-hover/card:h-60 aspect-video group-hover/card:border rounded-md group-hover:scale-[1.15] xl:group-hover:scale-150 duration-300 bg-white group-hover:shadow-sm group-hover:shadow-purple-200 z-[2] overflow-hidden">
          <Image
            src="/assets/images/shamim_transparent.png"
            alt="Shamim Image"
            className="h-auto w-full"
            width={0}
            height={0}
            sizes="100w"
          />
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 xl:translate-y-0 xl:top-0 left-1/2 -translate-x-1/2 xl:-left-2 xl:translate-x-0 group-hover/card:rotate-2 h-44 xl:h-56 group-hover/card:h-48 xl:group-hover/card:h-60 aspect-video group-hover/card:border rounded-md group-hover:scale-[1.15] xl:group-hover:scale-150 duration-300 bg-white group-hover:shadow-sm group-hover:shadow-purple-200 z-[3] overflow-hidden">
          <Image
            src="/assets/images/shamim_transparent.png"
            alt="Shamim Image"
            className="h-auto w-full"
            width={0}
            height={0}
            sizes="100w"
          />
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 xl:translate-y-0 xl:top-0 left-1/2 -translate-x-1/2 xl:-left-2 xl:translate-x-0 h-48 xl:h-60 aspect-video border rounded-md group-hover:scale-[1.15] xl:group-hover:scale-150 duration-300 bg-white group-hover:shadow-sm group-hover:shadow-purple-200 z-[4] overflow-y-scroll hide-scrollbar cursor-ns-resize">
          <Image
            src="/assets/images/shamim_transparent.png"
            alt="Shamim Image"
            className="h-auto w-full"
            width={0}
            height={0}
            sizes="100w"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

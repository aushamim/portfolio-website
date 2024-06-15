import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectCard = ({ sl, project }) => {
  return (
    <div className="w-full xl:w-4/5 2xl:w-2/3 xl:h-64 bg-white mx-auto my-10 xl:my-20 py-2 xl:py-0 rounded-md flex flex-col xl:flex-row items-center justify-center shadow-sm shadow-purple-100 group">
      <div className="p-5 xl:p-10 pb-0 group-hover:p-2 group-hover:scale-0 group-hover:w-auto xl:group-hover:w-0 group-hover:h-0 xl:group-hover:h-auto overflow-hidden duration-300 hidden 2xl:block">
        <h1 className="text-3xl font-semibold text-purple-600 mb-5 xl:mb-8">
          {sl}
        </h1>
      </div>
      <div className="flex-grow p-2 xl:p-5">
        <div className="flex flex-col 2xl:flex-row items-center xl:items-start 2xl:items-center gap-5">
          <h1 className="text-4xl font-medium text-center xl:text-left">
            <span className="font-semibold text-purple-600 inline 2xl:hidden">
              {sl}.{" "}
            </span>
            {project?.title}
          </h1>
          <div className="flex items-center gap-3 xl:scale-0 group-hover:scale-100 duration-300 pb-5 xl:pb-0 xl:group-hover:pb-5 2xl:pb-0 xl:h-0 group-hover:h-auto">
            <span className="w-3 h-1 mt-1 mx-auto bg-purple-500 rounded hidden xl:block"></span>
            <Link href={project?.repository} target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-8 stroke-purple-600 hover:stroke-purple-400 duration-300"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
              </svg>
            </Link>
            <Link href={project?.live_link} target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-8 stroke-purple-600 hover:stroke-purple-400 duration-300"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 15l6 -6" />
                <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
              </svg>
            </Link>
          </div>
        </div>
        <div className="flex justify-center xl:justify-start gap-2 mt-2">
          {project?.tools?.map((tool) => (
            <span
              key={project?.tools?.indexOf(tool)}
              className="px-2 border border-purple-500 rounded-md text-sm xl:text-base"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
      <div className="relative group/card w-full h-auto xl:w-auto xl:h-60 aspect-video">
        <div className="absolute top-1/2 -translate-y-1/2 xl:translate-y-0 xl:top-0 left-1/2 -translate-x-1/2 xl:-left-2 xl:translate-x-0 group-hover/card:rotate-[6deg] h-auto w-[50vw] xl:w-[95%] group-hover/card:w-[80vw] xl:group-hover/card:w-full aspect-video group-hover/card:border rounded-md group-hover:scale-[1.15] xl:group-hover:scale-150 duration-300 bg-white group-hover:shadow-sm group-hover:shadow-purple-200 z-[1] overflow-hidden">
          <Image
            src={project?.images?.ex3}
            alt="Project Image"
            className="h-auto w-full"
            width={0}
            height={0}
            sizes="100w"
          />
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 xl:translate-y-0 xl:top-0 left-1/2 -translate-x-1/2 xl:-left-2 xl:translate-x-0 group-hover/card:rotate-[4deg] h-auto w-[50vw] xl:w-[95%] group-hover/card:w-[80vw] xl:group-hover/card:w-full aspect-video group-hover/card:border rounded-md group-hover:scale-[1.15] xl:group-hover:scale-150 duration-300 bg-white group-hover:shadow-sm group-hover:shadow-purple-200 z-[2] overflow-hidden">
          <Image
            src={project?.images?.ex2}
            alt="Project Image"
            className="h-auto w-full"
            width={0}
            height={0}
            sizes="100w"
          />
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 xl:translate-y-0 xl:top-0 left-1/2 -translate-x-1/2 xl:-left-2 xl:translate-x-0 group-hover/card:rotate-2 h-auto w-[50vw] xl:w-[95%] group-hover/card:w-[80vw] xl:group-hover/card:w-full aspect-video group-hover/card:border rounded-md group-hover:scale-[1.15] xl:group-hover:scale-150 duration-300 bg-white group-hover:shadow-sm group-hover:shadow-purple-200 z-[3] overflow-hidden">
          <Image
            src={project?.images?.ex1}
            alt="Project Image"
            className="h-auto w-full"
            width={0}
            height={0}
            sizes="100w"
          />
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 xl:translate-y-0 xl:top-0 left-1/2 -translate-x-1/2 xl:-left-2 xl:translate-x-0 h-auto w-[80vw] xl:w-full aspect-video border rounded-md group-hover:scale-[1.15] xl:group-hover:scale-150 duration-300 bg-white group-hover:shadow-sm group-hover:shadow-purple-200 z-[4] overflow-y-scroll hide-scrollbar cursor-ns-resize">
          <Image
            src={project?.images?.main}
            alt="Project Image"
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

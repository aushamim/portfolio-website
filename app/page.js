import Image from "next/image";
import HeroButtons from "./Components/Hero/HeroButtons";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";

export default function Home() {
  return (
    <div>
      <div className="max-h-screen h-screen overflow-hidden bg-[#f9f9fc] grid grid-cols-1 xl:grid-cols-2 items-end xl:items-center -mt-16">
        <div className="px-5 xl:px-20 py-10 xl:py-0 text-center xl:text-left">
          <h3 className="text-xl xl:text-4xl mb-3 font-medium">
            Hello, I&apos;m
          </h3>
          <h1 className="text-5xl xl:text-8xl -ml-1 xl:-ml-2 mb-3 font-semibold">
            Amzud Uddin <span className="text-purple-600">Shamim</span>
          </h1>
          <h3 className="text-sm xl:text-xl font-medium">
            A Software Engineer & a passionate full-stack web developer
          </h3>
          <HeroButtons />
        </div>
        <div className="relative h-full">
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center z-0">
            <div className="bg-[#f1f0fb] size-80 xl:size-[800px] rounded-full relative">
              <div className="bg-[#9333ea] size-4 xl:size-8 rounded-full absolute top-10 xl:top-32 left-0 xl:left-0"></div>
              <div className="bg-[#9333ea] size-3 xl:size-5 rounded-full absolute top-5 xl:top-16 right-0 xl:right-10"></div>
              <div className="bg-[#9333ea] size-6 xl:size-10 rounded-full absolute bottom-10 xl:bottom-32 -right-5 xl:right-0"></div>
              <Image
                src="/assets/icons/hero-triangle.svg"
                alt="Triangle"
                className="size-10 xl:size-20 absolute bottom-0 -left-10 xl:-left-52"
                width={0}
                height={0}
                sizes="100w"
              />
            </div>
          </div>

          <div className="relative h-full flex justify-center items-end">
            <Image
              src="/assets/images/shamim_transparent.png"
              alt="Shamim Image"
              className="h-auto xl:h-screen w-3/4 xl:w-auto"
              width={0}
              height={0}
              sizes="100w"
            />
          </div>
        </div>
      </div>

      <div id="skills">
        <Skills />
      </div>

      <div id="projects">
        <Projects />
      </div>

      <div id="contact" className="h-screen bg-purple-200">
        contact
      </div>
    </div>
  );
}

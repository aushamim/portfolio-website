import Image from "next/image";
import HeroButtons from "./Components/Hero/HeroButtons";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import ImageBG from "./Components/Hero/ImageBG";

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
          <ImageBG />

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

      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="min-h-screen bg-[#f9f9fc] grid grid-cols-1 xl:grid-cols-2 items-center xl:-mt-16">
        <div className="pl-5 xl:pl-20">
          <h3 className="text-4xl mb-3 font-medium">Hello, I&apos;m</h3>
          <h1 className="text-8xl -ml-1 mb-3 font-semibold">
            Amzud Uddin <span className="text-purple-600">Shamim</span>
          </h1>
          <h3 className="text-4xl font-medium">A Software Engineer</h3>
        </div>
        <div className="">
          <div className="bg-[#f1f0fb] size-[700px] rounded-full flex items-end justify-center">
            <Image
              src="/assets/images/shamim_transparent.png"
              alt="Shamim Image"
              className="h-full w-auto"
              width={0}
              height={0}
              sizes="100%"
            />
          </div>
        </div>
      </div>

      <div id="skills" className="h-screen bg-green-200">
        skills
      </div>

      <div id="projects" className="h-screen bg-yellow-200">
        projects
      </div>

      <div id="contact" className="h-screen bg-purple-200">
        contact
      </div>
    </div>
  );
}

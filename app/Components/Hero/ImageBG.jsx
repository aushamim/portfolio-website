"use client";
import anime from "animejs";
import Image from "next/image";
import React, { useEffect } from "react";

const ImageBG = () => {
  useEffect(() => {
    anime({
      targets: ".hero-triangle",
      translateX: 30,
      translateY: -30,
      scale: [0.5, 1],
      autoplay: true,
      loop: true,
      direction: "alternate",
    });

    anime({
      targets: ".hero-circles",
      borderRadius: ["0.5rem", "50%"],
      rotate: 360,
      scale: [0.5, 1.5],
      autoplay: true,
      loop: true,
      direction: "alternate",
      easing: "easeInOutCubic",
      duration: 2000,
      delay: anime.stagger(300),
    });
  }, []);

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center z-0">
      <div className="bg-[#9333ea] size-4 xl:size-8 rounded-lg scale-[0.5] absolute top-28 xl:top-60 left-10 xl:left-20 hero-circles"></div>
      <div className="bg-[#9333ea] size-3 xl:size-5 rounded-lg scale-[0.5] absolute top-14 xl:top-28 right-16 xl:right-40 hero-circles"></div>
      <div className="bg-[#9333ea] size-6 xl:size-10 rounded-lg scale-[0.5] absolute bottom-20 xl:bottom-32 right-8 xl:right-32 hero-circles"></div>
      <Image
        src="/assets/icons/hero-triangle.svg"
        alt="Triangle"
        className="size-10 xl:size-20 absolute bottom-0 left-0 hero-triangle"
        width={0}
        height={0}
        sizes="100w"
      />
    </div>
  );
};

export default ImageBG;

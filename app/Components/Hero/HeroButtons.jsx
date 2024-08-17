"use client";
import React from "react";

const HeroButtons = () => {
  return (
    <div className="mt-8 flex items-center justify-center xl:justify-start gap-5">
      <button
        onClick={() => {
          document
            .getElementById("contact")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
        className="btn-purple"
      >
        Contact Me
      </button>
      <a
        href="https://drive.google.com/file/d/1KowvVn7-FoR5fHYzeyngvWRwCRXQXccL/view?usp=sharing"
        className="btn-purple"
      >
        Download Resume
      </a>
    </div>
  );
};

export default HeroButtons;

import React from "react";
import Projects from "../../Components/Projects/Projects";
import Self from "../../Components/Self/Self";

const Home = () => {
  return (
    <div className="App">
      <div id="self">
        <Self></Self>
      </div>
      <div id="projects">
        <Projects></Projects>
      </div>
    </div>
  );
};

export default Home;

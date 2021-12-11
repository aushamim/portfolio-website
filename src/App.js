import "./App.css";
import "./vivify.min.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContactMe from "./Pages/ContactMe/ContactMe";
import Resume from "./Pages/Resume/Resume";
import Home from "./Pages/Home/Home";
import Projects from "./Components/Projects/Projects";
import Blog from "./Pages/Blog/Blog";
import AboutMe from "./Pages/AboutMe/AboutMe";
import Project01 from "./Components/SingleProject/Project01";
import Project02 from "./Components/SingleProject/Project02";
import Project03 from "./Components/SingleProject/Project03";
import Project04 from "./Components/SingleProject/Project04";
import Particles from "./Components/Particles/Particles";

function App() {
  return (
    <>
      <Particles />
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path="/project1">
            <Project01></Project01>
          </Route>
          <Route path="/project2">
            <Project02></Project02>
          </Route>
          <Route path="/project3">
            <Project03></Project03>
          </Route>
          <Route path="/project4">
            <Project04></Project04>
          </Route>

          <Route path="/contact">
            <ContactMe></ContactMe>
          </Route>
          <Route path="/resume">
            <Resume></Resume>
          </Route>
          <Route path="/blog">
            <Blog></Blog>
          </Route>
          <Route path="/about">
            <AboutMe></AboutMe>
          </Route>
          <Route path="/projects">
            <Projects></Projects>
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;

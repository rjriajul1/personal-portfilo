import React from "react";
import Hero from "./hero/Hero";
import AboutMe from "./aboutMe/AboutMe";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";
import GitHubContributionChart from "./gitHubContributions/GitHubContributionChart";
const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <GitHubContributionChart/>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
};

export default Home;

import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} alt="Arrow icon" className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold">Anuja</span> 👋
      <br />A Software Engineer from India
    </h1>
  ),
  2: (
    <InfoBox
      text="I have over 1 years of experience in developing websites using React Js"
      link="/about"
      btnText="Learn more"
    />
  ),
  3: (
    <InfoBox
      text="Worked in multipale projects and tech stack. Curious about the impact?"
      link="/projects"
      btnText="Visit my portfolio"
    />
  ),
  4: (
    <InfoBox
      text="Need a project done or looking for a devloper? I'm just a few keystrokes away"
      link="/contact"
      btnText="Let's talk!"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  console.log("Current Stage:", currentStage);
  return renderContent[currentStage] || null;
};

export default HomeInfo;

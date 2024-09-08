import React from "react";
import useTypewriter from "../hooks/typeWriter";
import { skills, experiences } from "../constants";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import CTA from "../components/CTA";

const About = () => {
  const text = "Anuja Shinde";
  const displayText = useTypewriter(text, 100);

  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm{" "}
        <span
          className="text-5xl font-bold bg-clip-text text-transparent drop-shadow"
          style={{
            backgroundImage: "linear-gradient(to right, #FF61D2, #FE9090)",
          }}
        >
          {displayText}
        </span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Software Developer from India, specializing in technical education
          through hands-on learning and building applications
        </p>
      </div>
      <div className="flex flex-row py-5 gap-5">
        <a
          href="https://www.linkedin.com/in/anuja-shinde-811247238/"
          target="_blank"
        >
          <img
            src="https://static-00.iconduck.com/assets.00/linkedin-icon-2048x2048-3mmtnow6.png"
            className="w-8 h-8 object-contain"
          />
        </a>
        <a href="https://github.com/anuza08" target="_blank">
          <img
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            className="w-8 h-8 object-contain"
          />
        </a>
      </div>
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20">
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="py-16">
          <h3 className="subhead-text"> Work Experience</h3>
          <div className="mt-5 flex flex-col gap-3 text-slate-500">
            <p>Here's the rundown of my experience:</p>
          </div>
          <div className="mt-12 flex">
            <VerticalTimeline>
              {experiences.map((experience) => (
                <VerticalTimelineElement
                  key={experience.company_name}
                  date={experience.date}
                  contentStyle={{
                    borderBottom: "8px",
                    borderStyle: "solid",
                    borderBottomColor: experience.iconBg,
                    boxShadow: "none",
                  }}
                >
                  <div>
                    <h3 className="text-black text-xl font-poppins font-semibold">
                      {experience.title}
                    </h3>
                    <p
                      className="text-black-500 font-medium font-base"
                      style={{ margin: 0 }}
                    >
                      {experience.company_name}
                    </p>
                  </div>
                  <ul className="my-5 list-disc ml-5 space-y-2">
                    {experience.points.map((point, index) => (
                      <li
                        key={`experience-point-${index}`}
                        className="text-black-500/50 font-normal pl-1 text-sm"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </div>
      </div>
      <hr className="border-slate-200" />
      <CTA />
    </section>
  );
};

export default About;

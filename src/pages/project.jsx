import React from "react";
import useTypewriter from "../hooks/typeWriter";
import { projects } from "../constants";
import { Link } from "react-router-dom";
import CTA from "../components/CTA";

const Project = () => {
  const text = "Projects";
  const displayText = useTypewriter(text, 100);

  return (
    <section className="max-container">
      <h1 className="head-text">
        My {""}
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
          I've embarked on numerous projects throughout the years, If you come
          across something that piques your interest, feel free to explore the
          codebase and contribute your ideas for further enhancements. Your
          collaboration is highly valued!
        </p>
      </div>

      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            <div className="btn-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />

              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={project.iconUrl}
                  alt="Project icon"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {project.name}
              </h4>
              <p className="mt-2 text-slate-500">{project.description}</p>
              <div className="mt-5 flex items-center gap-2 font-poppins">
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600"
                >
                  Live Link
                </Link>
                {/* 7777 */}
              </div>
            </div>
          </div>
        ))}{" "}
      </div>
      <hr className="border-slate-200" />
      <CTA />
    </section>
  );
};

export default Project;

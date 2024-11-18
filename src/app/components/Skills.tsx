"use client";
import React, { useEffect } from "react";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaRobot } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { SiTypescript, SiNextdotjs } from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
      easing: "ease-in-out-cubic", // Easing function for smoother animations
      once: true, // Only animate once when scrolling into view
    });
  }, []);

  const skillsData = [
    { Icon: SiTypescript, name: "TypeScript", color: "text-blue-600", delay: 100 },
    { Icon: DiJavascript, name: "JavaScript", color: "text-yellow-500", delay: 200 },
    { Icon: FaReact, name: "React", color: "text-blue-400", delay: 300 },
    { Icon: SiNextdotjs, name: "Next.js", color: "text-black", delay: 400 },
    { Icon: FaNodeJs, name: "Node.js", color: "text-green-500", delay: 500 },
    { Icon: FaHtml5, name: "HTML", color: "text-orange-500", delay: 600 },
    { Icon: FaCss3Alt, name: "CSS", color: "text-blue-500", delay: 700 },
    { Icon: FaRobot, name: "Generative AI", color: "text-gray-500", delay: 800 },
  ];

  return (
    <div className="px-8 py-16 bg-gray-800 text-white">
      <h2 className="text-4xl font-bold text-center mb-12" data-aos="fade-up">
        My Skills
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {skillsData.map(({ Icon, name, color, delay }, index) => (
          <div
            key={index}
            className={`text-center p-4 transition-transform transform hover:scale-110 hover:bg-gray-700 rounded-lg shadow-lg`}
            data-aos="fade-up"
            data-aos-delay={delay}
          >
            <Icon size={60} {...{ className: `mx-auto mb-4 ${color} transition-opacity hover:opacity-80` }} />

            <h3 className="text-xl font-medium">{name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

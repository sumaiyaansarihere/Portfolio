"use client";
import React from "react";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaRobot } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { SiTypescript, SiNextdotjs } from "react-icons/si";

const Skills: React.FC = () => {
  const skillsData = [
    { Icon: SiTypescript, name: "TypeScript", color: "text-blue-600" },
    { Icon: DiJavascript, name: "JavaScript", color: "text-yellow-500" },
    { Icon: FaReact, name: "React", color: "text-blue-400" },
    { Icon: SiNextdotjs, name: "Next.js", color: "text-black" },
    { Icon: FaNodeJs, name: "Node.js", color: "text-green-500" },
    { Icon: FaHtml5, name: "HTML", color: "text-orange-500" },
    { Icon: FaCss3Alt, name: "CSS", color: "text-blue-500" },
    { Icon: FaRobot, name: "Generative AI", color: "text-gray-500" },
  ];

  return (
    <div className="px-8 py-16 bg-gray-800 text-white">
      <h2 className="text-4xl font-bold text-center mb-12">My Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {skillsData.map(({ Icon, name, color }, index) => (
          <div
            key={index}
            className="text-center p-4 transition-transform transform hover:scale-110 hover:bg-gray-700 rounded-lg shadow-lg"
          >
            <Icon size={60} className={`mx-auto mb-4 ${color} transition-opacity hover:opacity-80`} />
            <h3 className="text-xl font-medium">{name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

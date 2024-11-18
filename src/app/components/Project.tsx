import React from "react";
import Image from 'next/image';

const nodeJsProjects = [
  {
    title: 'Simple Calculator',
    description: 'A basic calculator application built using Node.js and TypeScript.',
    image: '/IMG-20241029-WA0096.jpg',
    repoLink:'https://github.com/sumaiyaansarihere/A-simple-calculator',
  },
  {
    title: 'Number Guessing Game',
    description: 'A fun number guessing game created with Node.js and TypeScript.',
    image: '/IMG-20241029-WA0099.jpg',
    repoLink: 'https://github.com/sumaiyaansarihere/Number-Guessing-Game',
  },
  {
    title: 'To-do List',
    description: 'A task management app for adding, updating, and deleting tasks using Node.js.',
    image: '/IMG-20241029-WA0100.jpg', 
    repoLink: 'https://github.com/sumaiyaansarihere/To-Do-List', 
  },
  {
    title: 'Currency Converter',
    description: 'An application to convert currencies in real-time, built with Node.js.',
    image: '/IMG-20241029-WA0102.jpg', 
    repoLink: 'https://github.com/sumaiyaansarihere/Currency-Converter', 
  },
  {
    title: 'An ATM',
    description: 'A simulation of ATM functionalities such as withdrawal, deposit, and balance inquiry.',
    image: '/IMG-20241029-WA0107.jpg', 
    repoLink: 'https://github.com/sumaiyaansarihere/An-ATM-Machine', 
  },
  {
    title: 'Student Management System',
    description: 'A Node.js application for managing student records, including adding, updating, and deleting information.',
    image: '/IMG-20241029-WA0111.jpg', 
    repoLink: 'https://github.com/sumaiyaansarihere/student-Management-System', 
  },
  {
    title: 'Word Counter',
    description: 'A Node.js app that counts the number of words and characters in a given text input.',
    image: '/IMG-20241029-WA0108.jpg', 
    repoLink: 'https://github.com/sumaiyaansarihere/Word-Counter', 
  }
];

const htmlProjects = [
  {
    title: 'Calculator App',
    description: 'A web-based calculator created using HTML and CSS.',
    image: '/HTML Calculator.jpg',
    repoLink: 'https://github.com/sumaiyaansarihere/Calculator-App',
  },
  {
    title: 'Tic Tac Toe Game App',
    description: 'An engaging Tic Tac Toe game built with HTML and CSS.',
    image: '/HTML Tic tac toe game.jpg',
    repoLink: 'https://github.com/sumaiyaansarihere/Tic-Tac-Toe-Game',
  },
  {
    title: 'Weather App',
    description: 'Accurate weather updates at your fingertips. Built with HTML and CSS.',
    image: '/HTML Weather app.jpg',
    repoLink: 'https://github.com/sumaiyaansarihere/Weather-App',
  }
];

const Project: React.FC = () => {
  return (
    <div className="px-8 py-12">
      {/* Node.js Projects Section */}
      <h2 className="text-4xl font-bold text-center mb-8 text-green-800">NODE PROJECTS</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {nodeJsProjects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6">
            <Image 
              src={project.image} 
              alt={project.title} 
              className="w-full h-64 object-cover"
              width={500} 
              height={300} 
            />
            <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
            <p className="text-gray-600 mt-2">{project.description}</p>
            <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
              <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg">
                View Project
              </button>
            </a>
          </div>
        ))}
      </div>

      {/* HTML Projects Section */}
      <h2 className="text-4xl font-bold text-center mb-8 text-green-800">HTML PROJECTS</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {htmlProjects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6">
            <Image 
              src={project.image} 
              alt={project.title} 
              className="w-full h-64 object-cover"
              width={500} 
              height={300} 
            />
            <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
            <p className="text-gray-600 mt-2">{project.description}</p>
            <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
              <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg">
                View Project
              </button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;

"use client";
import React from "react";

const About: React.FC = () => {
  return (
    <div id="ABOUT" className="min-h-screen bg-gray-700 text-orange-300 flex items-center justify-center">
      <div className="text-center px-8 py-16">
        {/* About Heading */}
        <h2 className="text-5xl font-bold text-white mb-8">About</h2>

        {/* About Paragraph */}
        <p className="text-xl max-w-3xl mx-auto text-orange-300">
          I’m Sumaiya Ansari, a frontend developer passionate about building beautiful and user-friendly web applications. With skills in HTML, CSS, JavaScript, and TypeScript, I specialize in creating responsive, interactive, and visually engaging websites. My journey as a developer began with a curiosity for technology and problem-solving, and now I’m constantly striving to learn new tools and technologies to enhance my craft.
          <br />
          <br />
          Currently, I’m focused on mastering Next.js for building fast, scalable web apps, while also exploring the exciting potential of Generative AI to innovate and improve the way we interact with web applications. I believe in the power of combining design with technical expertise to create products that not only work well but are also intuitive and enjoyable for users.
        </p>
      </div>
    </div>
  );
};

export default About;

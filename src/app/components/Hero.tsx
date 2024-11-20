"use client";
import React from "react";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <div className="flex items-center min-h-screen justify-between py-10 bg-orange-300 text-gray-700 px-8 flex-col md:flex-row relative z-30">
      {/* Text Section */}
      <div className="z-10 w-full md:w-1/2">
        <h1 className="text-4xl md:text-9xl font-bold mb-4">I&apos;m Sumaiya Ansari</h1>
        <p className="text-base md:text-lg font-bold max-w-lg">
          I&apos;m Sumaiya Ansari, a frontend developer with a passion for creating visually engaging, user-friendly web interfaces. Skilled in HTML, CSS, Java, and TypeScript, I build responsive designs that deliver seamless experiences across all devices. My current focus is on mastering Next.js and exploring the potential of Generative AI to enhance interactivity and creativity in web development. I love blending technical skill with design to bring ideas to life and create applications that make an impact. Let&apos;s connect and turn concepts into reality!
        </p>
      </div>
      {/* Profile Picture */}
      <div className="z-0 w-full md:w-1/4 flex justify-center md:justify-end mt-8 md:mt-0">
        <Image
          src="/profile.jpg"  // Ensure this is in the public folder
          alt="Profile picture of Sumaiya Ansari"
          width={400}
          height={400}
          // className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Hero;

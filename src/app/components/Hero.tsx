"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const Hero: React.FC = () => {
  // Initialize AOS for animations
  useEffect(() => {
    AOS.init({
      duration: 1500,  // Duration of the fade-in
      easing: 'ease-in-out',
      once: true,  // Make sure it only triggers once
    });
  }, []);

  return (
    <div className="flex items-center justify-between min-h-screen bg-orange-300 text-gray-700 px-8 flex-col md:flex-row">
      {/* Text Section */}
      <div className="z-10 w-full md:w-1/2" data-aos="fade-in">
        <h1 className="text-4xl md:text-9xl font-bold mb-4">I&apos;m Sumaiya Ansari</h1>
        <p className="text-base md:text-lg font-bold max-w-lg">
          I&apos;m Sumaiya Ansari, a frontend developer with a passion for creating visually engaging, user-friendly web interfaces. Skilled in HTML, CSS, Java, and TypeScript, I build responsive designs that deliver seamless experiences across all devices. My current focus is on mastering Next.js and exploring the potential of Generative AI to enhance interactivity and creativity in web development. I love blending technical skill with design to bring ideas to life and create applications that make an impact. Let&apos;s connect and turn concepts into reality!
        </p>
      </div>

      {/* Profile Picture */}
      <div className="z-0 w-full md:w-1/4 flex justify-center md:justify-end mt-8 md:mt-0" data-aos="fade-in">
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

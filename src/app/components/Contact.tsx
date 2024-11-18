'use client';
import React from "react";
import { FaGithub, FaDiscord, FaEnvelope, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form handling logic goes here
  };

  return (
    <section className="contact-section">
      <div className="container mx-auto text-center py-12">
        {/* Contact Form */}
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Contact Me</h2>
        <form className="contact-form space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            className="input-field"
            required
          />
          <input
            type="email"
            placeholder="Your Gmail"
            className="input-field"
            required
          />
          <textarea
            placeholder="Your Message"
            className="input-field"
            required
          ></textarea>
          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>

        {/* Social Links */}
        <div className="social-links mt-12 flex flex-col items-center justify-center">
          <h3 className="text-3xl font-semibold text-gray-800 mb-4">Connect With Me</h3>
          <div className="flex flex-wrap justify-center gap-8">
            <a
              href="https://github.com/sumaiyaansarihere"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 hover:text-orange-500"
            >
              <FaGithub className="text-3xl" /> sumaiyaansarihere
            </a>
            <a
              href="https://discord.com/users/sumaiyaansari_95028"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 hover:text-orange-500"
            >
              <FaDiscord className="text-3xl" /> sumaiyaansari_95028
            </a>
            <a
              href="mailto:sumaiyaansari423@gmail.com"
              className="flex items-center gap-2 text-gray-700 hover:text-orange-500"
            >
              <FaEnvelope className="text-3xl" /> sumaiyaansari423@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/sumaiya-ansari-b97962314/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 hover:text-orange-500"
            >
              <FaLinkedin className="text-3xl" /> sumaiya-ansari-b97962314
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

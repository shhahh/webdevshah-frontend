import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-blue-600">Shah</span>
            </h1>
            <h2 className="text-3xl md:text-4xl mb-6 text-gray-700">
              Full Stack Web Developer
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              I create beautiful, functional websites and web applications 
              using modern technologies. Let's build something amazing together!
            </p>
            
            <div className="flex space-x-4 mb-8">
              <Link
                to="/portfolio"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
              >
                View My Work
              </Link>
              <Link
                to="/contact"
                className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition"
              >
                Hire Me
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-600 hover:text-blue-600 transition"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-600 hover:text-blue-600 transition"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-600 hover:text-blue-600 transition"
              >
                <FaTwitter />
              </a>
            </div>
          </motion.div>

          {/* Image/Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 mt-10 md:mt-0"
          >
            <img
              src="/hero-image.svg"
              alt="Web Developer"
              className="w-full max-w-lg mx-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 
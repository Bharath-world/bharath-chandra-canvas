
import React from 'react';
import { downloadResume } from '../utils/resumeGenerator';

interface HeroProps {
  darkMode: boolean;
}

const Hero = ({ darkMode }: HeroProps) => {
  const handleDownloadResume = () => {
    downloadResume();
  };

  return (
    <section id="home" className={`min-h-screen flex items-center justify-center ${
      darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-indigo-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Hi, I'm{' '}
              <span className="text-blue-600 dark:text-blue-400">
                Bharath Chandra
              </span>
            </h1>
            <h2 className={`text-xl md:text-2xl mb-6 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              UI/UX Designer | Web Developer | Creative Technophile
            </h2>
            <p className={`text-lg mb-8 leading-relaxed ${
              darkMode ? 'text-gray-400' : 'text-gray-700'
            }`}>
              I'm a Computer Science graduate from Sreyas Institute of Engineering and Technology, 
              passionate about design and development with a keen eye for user experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={handleDownloadResume}
                className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Download Resume
              </button>
              <button
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                View My Work
              </button>
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className={`px-8 py-3 rounded-lg font-medium border-2 transition-colors duration-200 ${
                  darkMode 
                    ? 'border-gray-600 text-gray-300 hover:border-gray-500 hover:text-white' 
                    : 'border-gray-300 text-gray-700 hover:border-gray-400 hover:text-gray-900'
                }`}
              >
                Get In Touch
              </button>
            </div>
          </div>

          {/* Photo Section */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl">
                <img
                  src="/lovable-uploads/57b75450-19b8-4515-aab9-43f10725b785.png"
                  alt="Bharath Chandra"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-600 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-indigo-600 rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

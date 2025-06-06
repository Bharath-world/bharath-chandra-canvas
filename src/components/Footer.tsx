
import React from 'react';
import { Github, Linkedin, Instagram, Behance, Phone, Mail } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

const Footer = ({ darkMode }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`py-12 ${
      darkMode ? 'bg-gray-900 border-t border-gray-700' : 'bg-white border-t border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className={`text-xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Bharath Chandra
            </h3>
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Computer Science Graduate from Sreyas Institute of Engineering and Technology, 
              passionate about UI/UX Design and Web Development.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className={`text-lg font-semibold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Quick Links
            </h4>
            <div className="space-y-2">
              {['Home', 'About', 'Experience', 'Projects', 'Resume', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => document.querySelector(`#${item.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' })}
                  className={`block w-full transition-colors duration-200 ${
                    darkMode 
                      ? 'text-gray-400 hover:text-white' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Contact & Social Links */}
          <div className="text-center md:text-right">
            <h4 className={`text-lg font-semibold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Connect With Me
            </h4>
            
            {/* Contact Details */}
            <div className={`mb-4 space-y-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              <div className="flex items-center justify-center md:justify-end space-x-2">
                <Mail size={16} />
                <span className="text-sm">bharathchandr2002@gmail.com</span>
              </div>
              <div className="flex items-center justify-center md:justify-end space-x-2">
                <Phone size={16} />
                <span className="text-sm">+91 7995237067</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center md:justify-end space-x-3">
              <a
                href="https://github.com/Bharath-world"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full transition-all duration-200 hover:scale-110 ${
                  darkMode 
                    ? 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700' 
                    : 'bg-gray-100 text-gray-600 hover:text-gray-900 hover:bg-gray-200'
                }`}
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/d-bharath-4a0284344/"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full transition-all duration-200 hover:scale-110 ${
                  darkMode 
                    ? 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700' 
                    : 'bg-gray-100 text-gray-600 hover:text-gray-900 hover:bg-gray-200'
                }`}
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://www.instagram.com/_btech_babji"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full transition-all duration-200 hover:scale-110 ${
                  darkMode 
                    ? 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700' 
                    : 'bg-gray-100 text-gray-600 hover:text-gray-900 hover:bg-gray-200'
                }`}
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.behance.net/bharathchandra29"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full transition-all duration-200 hover:scale-110 ${
                  darkMode 
                    ? 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700' 
                    : 'bg-gray-100 text-gray-600 hover:text-gray-900 hover:bg-gray-200'
                }`}
              >
                <Behance size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className={`mt-12 pt-8 border-t text-center ${
          darkMode ? 'border-gray-700 text-gray-400' : 'border-gray-200 text-gray-600'
        }`}>
          <p className="text-sm">
            © {currentYear} Bharath Chandra. All rights reserved. Built with React and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import React from 'react';
import { Code, Palette, Camera, Film } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

const About = ({ darkMode }: AboutProps) => {
  const skills = [
    { name: 'Python', level: 85 },
    { name: 'HTML/CSS', level: 90 },
    { name: 'React', level: 80 },
    { name: 'JavaScript', level: 75 },
  ];

  const interests = [
    { name: 'Video Editing', icon: Film, description: 'Creating engaging video content' },
    { name: 'Communication', icon: Code, description: 'Effective team collaboration' },
    { name: 'Fashion', icon: Palette, description: 'Style and aesthetic appreciation' },
    { name: 'Cinema', icon: Camera, description: 'Film analysis and appreciation' },
  ];

  return (
    <section id="about" className={`py-20 ${
      darkMode ? 'bg-gray-800' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            About Me
          </h2>
          <p className={`text-lg max-w-3xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            A passionate fresher software developer eager to contribute to innovative projects 
            and grow in the tech industry.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education & Background */}
          <div>
            <h3 className={`text-2xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Education & Background
            </h3>
            <div className={`p-6 rounded-lg mb-6 ${
              darkMode ? 'bg-gray-700' : 'bg-gray-50'
            }`}>
              <h4 className={`text-lg font-semibold mb-2 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Bachelor's in Computer Science
              </h4>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Fresh graduate with a strong foundation in software development principles, 
                algorithms, and modern web technologies.
              </p>
            </div>

            {/* Skills */}
            <h4 className={`text-xl font-semibold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Technical Skills
            </h4>
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-1">
                    <span className={`font-medium ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {skill.name}
                    </span>
                    <span className={`text-sm ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {skill.level}%
                    </span>
                  </div>
                  <div className={`w-full rounded-full h-2 ${
                    darkMode ? 'bg-gray-600' : 'bg-gray-200'
                  }`}>
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interests */}
          <div>
            <h3 className={`text-2xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Interests & Hobbies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {interests.map((interest) => (
                <div
                  key={interest.name}
                  className={`p-4 rounded-lg transition-all duration-200 hover:scale-105 ${
                    darkMode 
                      ? 'bg-gray-700 hover:bg-gray-600' 
                      : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                >
                  <interest.icon className="w-8 h-8 text-blue-600 mb-3" />
                  <h4 className={`font-semibold mb-2 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {interest.name}
                  </h4>
                  <p className={`text-sm ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {interest.description}
                  </p>
                </div>
              ))}
            </div>

            <div className={`mt-8 p-6 rounded-lg ${
              darkMode ? 'bg-gray-700' : 'bg-blue-50'
            }`}>
              <h4 className={`text-lg font-semibold mb-3 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                What Drives Me
              </h4>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                I'm passionate about creating solutions that make a difference. Whether it's 
                developing user-friendly applications or collaborating with teams to bring 
                innovative ideas to life, I'm always eager to learn and contribute.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


import React from 'react';
import { Code, Palette, Camera, Film, Database, Globe } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

const About = ({ darkMode }: AboutProps) => {
  const technicalSkills = [
    { name: 'Python', level: 85 },
    { name: 'HTML/CSS', level: 90 },
    { name: 'JavaScript', level: 80 },
    { name: 'React', level: 75 },
    { name: 'MongoDB', level: 70 },
    { name: 'MySQL', level: 75 },
  ];

  const softSkills = [
    { name: 'Communication', icon: Code, description: 'Clear and effective communication' },
    { name: 'Teamwork', icon: Globe, description: 'Collaborative problem solving' },
    { name: 'Creativity', icon: Palette, description: 'Innovative thinking and design' },
  ];

  const interests = [
    { name: 'Cinema', icon: Film, description: 'Film analysis and appreciation' },
    { name: 'Video Editing', icon: Camera, description: 'Creating engaging video content' },
    { name: 'Fashion', icon: Palette, description: 'Style and aesthetic appreciation' },
    { name: 'UI Design', icon: Code, description: 'User interface and experience design' },
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
            I'm a Computer Science graduate from Sreyas Institute of Engineering and Technology, 
            passionate about design and development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div>
            <h3 className={`text-2xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Technical Skills
            </h3>
            <div className="space-y-4 mb-8">
              {technicalSkills.map((skill) => (
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

            {/* Soft Skills */}
            <h4 className={`text-xl font-semibold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Soft Skills
            </h4>
            <div className="grid grid-cols-1 gap-3">
              {softSkills.map((skill) => (
                <div
                  key={skill.name}
                  className={`p-3 rounded-lg transition-all duration-200 ${
                    darkMode 
                      ? 'bg-gray-700 hover:bg-gray-600' 
                      : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <skill.icon className="w-5 h-5 text-blue-600" />
                    <div>
                      <h5 className={`font-medium ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {skill.name}
                      </h5>
                      <p className={`text-sm ${
                        darkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {skill.description}
                      </p>
                    </div>
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
                developing user-friendly applications or designing beautiful interfaces, I'm 
                always eager to learn and contribute to meaningful projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

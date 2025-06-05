
import React from 'react';
import { Briefcase, Award, Calendar } from 'lucide-react';

interface ExperienceProps {
  darkMode: boolean;
}

const Experience = ({ darkMode }: ExperienceProps) => {
  const internships = [
    {
      title: 'Gen AI Intern',
      company: 'Systemtron',
      duration: '2024',
      description: 'Worked on generative AI projects and machine learning implementations.',
      type: 'internship'
    },
    {
      title: 'Graphic Designer',
      company: 'InAmigos Foundation',
      duration: '2023',
      description: 'Created visual designs and marketing materials for social impact campaigns.',
      type: 'internship'
    }
  ];

  const certifications = [
    {
      title: 'Data Analysis with Python',
      issuer: 'Accenture',
      year: '2024',
      description: 'Comprehensive course covering data analysis techniques using Python libraries.'
    },
    {
      title: 'Job Simulation',
      issuer: 'IBM (Forage)',
      year: '2024',
      description: 'Practical job simulation experience in software development and consulting.'
    }
  ];

  return (
    <section id="experience" className={`py-20 ${
      darkMode ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Experience & Certifications
          </h2>
          <p className={`text-lg max-w-3xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            My professional journey and continuous learning through internships and certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Internships */}
          <div>
            <div className="flex items-center mb-8">
              <Briefcase className={`w-8 h-8 mr-3 ${
                darkMode ? 'text-blue-400' : 'text-blue-600'
              }`} />
              <h3 className={`text-2xl font-bold ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Internships
              </h3>
            </div>
            
            <div className="space-y-6">
              {internships.map((item, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl ${
                    darkMode ? 'bg-gray-800 hover:bg-gray-750' : 'bg-white hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className={`text-xl font-semibold ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {item.title}
                      </h4>
                      <p className={`text-lg ${
                        darkMode ? 'text-blue-400' : 'text-blue-600'
                      }`}>
                        {item.company}
                      </p>
                    </div>
                    <div className="flex items-center">
                      <Calendar className={`w-4 h-4 mr-2 ${
                        darkMode ? 'text-gray-400' : 'text-gray-500'
                      }`} />
                      <span className={`text-sm ${
                        darkMode ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        {item.duration}
                      </span>
                    </div>
                  </div>
                  <p className={`${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center mb-8">
              <Award className={`w-8 h-8 mr-3 ${
                darkMode ? 'text-blue-400' : 'text-blue-600'
              }`} />
              <h3 className={`text-2xl font-bold ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Certifications
              </h3>
            </div>
            
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl ${
                    darkMode ? 'bg-gray-800 hover:bg-gray-750' : 'bg-white hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className={`text-xl font-semibold ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {cert.title}
                      </h4>
                      <p className={`text-lg ${
                        darkMode ? 'text-blue-400' : 'text-blue-600'
                      }`}>
                        {cert.issuer}
                      </p>
                    </div>
                    <div className="flex items-center">
                      <Calendar className={`w-4 h-4 mr-2 ${
                        darkMode ? 'text-gray-400' : 'text-gray-500'
                      }`} />
                      <span className={`text-sm ${
                        darkMode ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        {cert.year}
                      </span>
                    </div>
                  </div>
                  <p className={`${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

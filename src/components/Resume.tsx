
import React from 'react';
import { Download, FileText } from 'lucide-react';

interface ResumeProps {
  darkMode: boolean;
}

const Resume = ({ darkMode }: ResumeProps) => {
  const handleDownload = () => {
    // In a real application, this would download the actual resume file
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // This would be the actual path to the resume PDF
    link.download = 'Bharath_Chandra_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className={`py-20 ${
      darkMode ? 'bg-gray-800' : 'bg-white'
    }`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Resume
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Download my resume to learn more about my experience, education, and skills.
          </p>
        </div>

        <div className={`rounded-lg shadow-lg p-8 text-center ${
          darkMode ? 'bg-gray-700' : 'bg-gray-50'
        }`}>
          <div className="flex justify-center mb-6">
            <div className={`p-4 rounded-full ${
              darkMode ? 'bg-blue-900' : 'bg-blue-100'
            }`}>
              <FileText className="w-12 h-12 text-blue-600" />
            </div>
          </div>

          <h3 className={`text-2xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Bharath Chandra's Resume
          </h3>

          <p className={`mb-8 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Get a comprehensive overview of my technical skills, educational background, 
            projects, and professional experience in software development.
          </p>

          <button
            onClick={handleDownload}
            className="inline-flex items-center space-x-3 px-8 py-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            <Download size={20} />
            <span>Download Resume (PDF)</span>
          </button>

          <div className={`mt-8 p-4 rounded-lg ${
            darkMode ? 'bg-gray-600' : 'bg-white'
          }`}>
            <h4 className={`font-semibold mb-2 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              What's included:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                • Contact Information
              </div>
              <div className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                • Technical Skills
              </div>
              <div className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                • Educational Background
              </div>
              <div className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                • Project Details
              </div>
              <div className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                • Certifications
              </div>
              <div className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                • Professional Summary
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;

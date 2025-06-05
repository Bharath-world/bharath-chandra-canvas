
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

interface ChatbotProps {
  darkMode: boolean;
}

interface Message {
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const Chatbot = ({ darkMode }: ChatbotProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hi! I'm Bharath's AI assistant. Ask me about his skills, education, projects, or experience!",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('skill') || message.includes('technology') || message.includes('tech')) {
      return "Bharath is skilled in Python, HTML, CSS, JavaScript, React, MongoDB, and MySQL. He's also experienced in UI/UX design and data analysis!";
    }
    
    if (message.includes('education') || message.includes('study') || message.includes('degree') || message.includes('college')) {
      return "Bharath is a Computer Science graduate from Sreyas Institute of Engineering and Technology. He's passionate about both development and design!";
    }
    
    if (message.includes('project') || message.includes('work') || message.includes('portfolio')) {
      return "Bharath has worked on a Movie Recommendation System using Python and ML, UI/UX design projects, and data analysis dashboards. Check out the Projects section for more details!";
    }
    
    if (message.includes('experience') || message.includes('internship') || message.includes('job')) {
      return "Bharath has completed internships as a Gen AI Intern at Systemtron and as a Graphic Designer at InAmigos Foundation. He also has certifications from Accenture and IBM!";
    }
    
    if (message.includes('certification') || message.includes('certificate')) {
      return "Bharath has certifications in Data Analysis with Python from Accenture and completed an IBM Job Simulation through Forage.";
    }
    
    if (message.includes('interest') || message.includes('hobby') || message.includes('passion')) {
      return "Besides coding, Bharath is passionate about cinema, video editing, fashion, and UI design. He believes in balancing technical skills with creative pursuits!";
    }
    
    if (message.includes('contact') || message.includes('reach') || message.includes('hire') || message.includes('email')) {
      return "You can reach Bharath at bharathchandr2002@gmail.com or call +91 7995237067. He's also active on GitHub, LinkedIn, and Behance!";
    }
    
    if (message.includes('location') || message.includes('where') || message.includes('place')) {
      return "Bharath is based in Hyderabad, India and is open to both local and remote opportunities!";
    }
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! I'm here to help you learn more about Bharath Chandra. Feel free to ask about his skills, education, projects, experience, or interests!";
    }
    
    if (message.includes('movie') || message.includes('recommendation')) {
      return "Bharath's Movie Recommendation System is a Python-based project that uses machine learning algorithms and collaborative filtering to suggest movies based on user preferences!";
    }
    
    return "I can help you learn about Bharath's technical skills (Python, React, UI/UX), education, projects, internship experience, certifications, or how to contact him. What would you like to know?";
  };

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      const userMessage: Message = {
        text: inputMessage,
        isBot: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, userMessage]);
      
      setTimeout(() => {
        const botResponse: Message = {
          text: getBotResponse(inputMessage),
          isBot: true,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botResponse]);
      }, 1000);
      
      setInputMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className={`p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${
            darkMode 
              ? 'bg-blue-600 hover:bg-blue-700 text-white' 
              : 'bg-blue-600 hover:bg-blue-700 text-white'
          }`}
        >
          <MessageCircle size={24} />
        </button>
      ) : (
        <div className={`w-80 h-96 rounded-lg shadow-2xl flex flex-col ${
          darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
        }`}>
          {/* Header */}
          <div className={`p-4 rounded-t-lg flex justify-between items-center ${
            darkMode ? 'bg-gray-700 border-b border-gray-600' : 'bg-gray-50 border-b border-gray-200'
          }`}>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">BC</span>
              </div>
              <div>
                <h3 className={`font-semibold text-sm ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Bharath's AI Assistant
                </h3>
                <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  Online
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className={`p-1 rounded-full hover:bg-gray-200 ${
                darkMode ? 'hover:bg-gray-600 text-gray-400' : 'text-gray-500'
              }`}
            >
              <X size={16} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                    message.isBot
                      ? darkMode
                        ? 'bg-gray-700 text-gray-200'
                        : 'bg-gray-100 text-gray-800'
                      : 'bg-blue-600 text-white'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className={`p-4 border-t ${
            darkMode ? 'border-gray-600' : 'border-gray-200'
          }`}>
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about Bharath..."
                className={`flex-1 px-3 py-2 rounded-lg text-sm border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  darkMode 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                }`}
              />
              <button
                onClick={handleSendMessage}
                className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;

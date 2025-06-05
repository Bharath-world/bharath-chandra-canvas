
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
      text: "Hi! I'm Bharath's AI assistant. Ask me about his skills, education, or projects!",
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
      return "Bharath is skilled in Python, React, HTML, CSS, JavaScript, and web development. He's passionate about creating innovative solutions with modern technologies!";
    }
    
    if (message.includes('education') || message.includes('study') || message.includes('degree')) {
      return "Bharath is a fresher software developer with a strong educational background in computer science and software development.";
    }
    
    if (message.includes('project') || message.includes('work') || message.includes('portfolio')) {
      return "You can check out Bharath's projects in the Projects section above! He has worked on various web development projects showcasing his skills in React and Python.";
    }
    
    if (message.includes('experience') || message.includes('fresher')) {
      return "Bharath is a fresher software developer who is eager to start his career. Despite being new to the industry, he has strong technical skills and a passion for learning.";
    }
    
    if (message.includes('interest') || message.includes('hobby') || message.includes('passion')) {
      return "Besides coding, Bharath is interested in video editing, communication, fashion, and cinema. He believes in maintaining a good work-life balance!";
    }
    
    if (message.includes('contact') || message.includes('reach') || message.includes('hire')) {
      return "You can reach out to Bharath through the Contact section above or connect with him on LinkedIn and GitHub. He's always open to new opportunities!";
    }
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! I'm here to help you learn more about Bharath Chandra. Feel free to ask about his skills, education, projects, or interests!";
    }
    
    return "I can help you learn about Bharath's skills (Python, React, web development), education, projects, interests, or how to contact him. What would you like to know?";
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
                placeholder="Ask about Bharath's skills..."
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

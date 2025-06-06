
export const generateResumeContent = () => {
  const resumeData = {
    personalInfo: {
      name: "Bharath Chandra",
      title: "Computer Science Graduate | UI/UX Designer | Web Developer",
      email: "bharathchandr2002@gmail.com",
      phone: "+91 7995237067",
      location: "Hyderabad, India",
      linkedin: "https://www.linkedin.com/in/d-bharath-4a0284344/",
      github: "https://github.com/Bharath-world",
      behance: "https://www.behance.net/bharathchandra29"
    },
    summary: "Passionate Computer Science graduate from Sreyas Institute of Engineering and Technology with expertise in UI/UX design and web development. Experienced in Python programming, machine learning, and modern web technologies. Seeking opportunities to contribute creative solutions and technical skills in software development.",
    education: {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Sreyas Institute of Engineering and Technology",
      location: "Hyderabad, India",
      year: "2024"
    },
    experience: [
      {
        title: "Gen AI Intern",
        company: "Systemtron",
        duration: "2024",
        responsibilities: [
          "Worked on generative AI projects and machine learning algorithms",
          "Developed and tested AI models for various applications",
          "Collaborated with cross-functional teams on AI implementation"
        ]
      },
      {
        title: "Graphic Designer",
        company: "InAmigos Foundation",
        duration: "2023",
        responsibilities: [
          "Created visual designs for digital marketing campaigns",
          "Designed user interfaces for web applications",
          "Collaborated with marketing team on brand identity projects"
        ]
      }
    ],
    projects: [
      {
        name: "Movie Recommendation System",
        technologies: "Python, Machine Learning, Pandas, Scikit-learn, Flask",
        description: "Developed a Python-based recommendation system using machine learning algorithms and collaborative filtering to suggest movies based on user preferences."
      },
      {
        name: "Personal Portfolio Website",
        technologies: "React, TypeScript, Tailwind CSS",
        description: "Built a responsive portfolio website with dark/light mode toggle, smooth animations, and interactive chatbot functionality."
      },
      {
        name: "Data Analysis Dashboard",
        technologies: "Python, Pandas, Matplotlib, Jupyter",
        description: "Created interactive dashboard for data visualization and analysis during Accenture certification program."
      }
    ],
    skills: {
      technical: ["Python", "HTML", "CSS", "JavaScript", "React", "TypeScript", "MongoDB", "MySQL", "Machine Learning", "Data Analysis"],
      tools: ["Figma", "Adobe XD", "Photoshop", "Git", "VS Code", "Jupyter"],
      soft: ["Communication", "Teamwork", "Creativity", "Problem Solving", "Leadership"]
    },
    certifications: [
      "Accenture – Data Analysis with Python",
      "IBM – Job Simulation (Forage)"
    ]
  };

  return resumeData;
};

export const downloadResume = () => {
  const resumeData = generateResumeContent();
  
  // Create HTML content for the resume
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>${resumeData.personalInfo.name} - Resume</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; margin: 0; padding: 20px; color: #333; }
        .header { text-align: center; border-bottom: 2px solid #2563eb; padding-bottom: 20px; margin-bottom: 20px; }
        .header h1 { margin: 0; color: #2563eb; font-size: 2.5em; }
        .header h2 { margin: 5px 0; color: #666; font-weight: normal; }
        .contact-info { margin: 10px 0; }
        .contact-info a { color: #2563eb; text-decoration: none; }
        .section { margin: 20px 0; }
        .section h3 { color: #2563eb; border-bottom: 1px solid #ddd; padding-bottom: 5px; }
        .experience-item, .project-item { margin: 15px 0; }
        .experience-item h4, .project-item h4 { margin: 0; color: #333; }
        .experience-item .company, .project-item .tech { color: #666; font-style: italic; }
        .skills-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; }
        .skill-category h4 { margin: 0 0 10px 0; color: #2563eb; }
        .skills-list { margin: 0; padding-left: 20px; }
        ul { margin: 10px 0; padding-left: 20px; }
        li { margin: 5px 0; }
        @media print { 
          body { margin: 0; padding: 10px; } 
          .header { page-break-after: avoid; }
        }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>${resumeData.personalInfo.name}</h1>
        <h2>${resumeData.personalInfo.title}</h2>
        <div class="contact-info">
          <p>
            📧 ${resumeData.personalInfo.email} | 
            📱 ${resumeData.personalInfo.phone} | 
            📍 ${resumeData.personalInfo.location}
          </p>
          <p>
            <a href="${resumeData.personalInfo.linkedin}">LinkedIn</a> | 
            <a href="${resumeData.personalInfo.github}">GitHub</a> | 
            <a href="${resumeData.personalInfo.behance}">Behance</a>
          </p>
        </div>
      </div>

      <div class="section">
        <h3>Professional Summary</h3>
        <p>${resumeData.summary}</p>
      </div>

      <div class="section">
        <h3>Education</h3>
        <div class="experience-item">
          <h4>${resumeData.education.degree}</h4>
          <div class="company">${resumeData.education.institution}, ${resumeData.education.location} - ${resumeData.education.year}</div>
        </div>
      </div>

      <div class="section">
        <h3>Experience</h3>
        ${resumeData.experience.map(exp => `
          <div class="experience-item">
            <h4>${exp.title}</h4>
            <div class="company">${exp.company} - ${exp.duration}</div>
            <ul>
              ${exp.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
            </ul>
          </div>
        `).join('')}
      </div>

      <div class="section">
        <h3>Projects</h3>
        ${resumeData.projects.map(project => `
          <div class="project-item">
            <h4>${project.name}</h4>
            <div class="tech">Technologies: ${project.technologies}</div>
            <p>${project.description}</p>
          </div>
        `).join('')}
      </div>

      <div class="section">
        <h3>Technical Skills</h3>
        <div class="skills-grid">
          <div class="skill-category">
            <h4>Programming & Web Technologies</h4>
            <ul class="skills-list">
              ${resumeData.skills.technical.map(skill => `<li>${skill}</li>`).join('')}
            </ul>
          </div>
          <div class="skill-category">
            <h4>Tools & Software</h4>
            <ul class="skills-list">
              ${resumeData.skills.tools.map(tool => `<li>${tool}</li>`).join('')}
            </ul>
          </div>
          <div class="skill-category">
            <h4>Soft Skills</h4>
            <ul class="skills-list">
              ${resumeData.skills.soft.map(skill => `<li>${skill}</li>`).join('')}
            </ul>
          </div>
        </div>
      </div>

      <div class="section">
        <h3>Certifications</h3>
        <ul>
          ${resumeData.certifications.map(cert => `<li>${cert}</li>`).join('')}
        </ul>
      </div>
    </body>
    </html>
  `;

  // Create a blob and download
  const blob = new Blob([htmlContent], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'Bharath_Chandra_Resume.html';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
  
  // Also try to open print dialog for PDF conversion
  const printWindow = window.open('', '_blank');
  if (printWindow) {
    printWindow.document.write(htmlContent);
    printWindow.document.close();
    setTimeout(() => {
      printWindow.print();
    }, 1000);
  }
};

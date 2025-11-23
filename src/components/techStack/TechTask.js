import React from 'react';
import "./techStack.css"
import { DiReact, DiHtml5, DiCss3, DiJsBadge, DiNodejsSmall, DiPhp, DiJava, DiPython, DiMysql, DiMongodb } from 'react-icons/di';
import { SiTypescript, SiTailwindcss, SiSqlite, SiBootstrap, SiLaravel, SiExpress, SiPostman, SiGit, SiGithub, SiFigma, SiSequelize, SiOracle, SiSpring } from 'react-icons/si';

const iconMap = {
  'HTML5': DiHtml5,
  'CSS3': DiCss3,
  'Bootstrap': SiBootstrap,
  'Tailwind CSS': SiTailwindcss,
  'JavaScript': DiJsBadge,
  'TypeScript': SiTypescript,
  'React.js': DiReact,
  'Node.js': DiNodejsSmall,
  'PHP': DiPhp,
  'Java': DiJava,
  'Python': DiPython,
  'Oracle Database': SiOracle,
  'Laravel': SiLaravel,
  'Express.js': SiExpress,
  'MySQL': DiMysql,
  'MongoDB': DiMongodb,
  'SQLite': SiSqlite,
  'Sequelize': SiSequelize,
  'Postman': SiPostman,
  'Git': SiGit,
  'GitHub': SiGithub,
  'Figma': SiFigma,
  'Spring Boot': SiSpring,
};

// All technologies in a single array
const allTechnologies = [
  "HTML5", "CSS3", "Bootstrap", "Tailwind CSS", "JavaScript", "TypeScript",
  "React.js", "Node.js", "PHP", "Java", "Python", "Oracle Database", "Laravel", "Express.js",
  "MySQL", "MongoDB", "SQLite", "Sequelize", "Postman", "Git", "GitHub", "Figma", "Spring Boot"
];

// Duplicate the array to create seamless scrolling
const scrollingTechnologies = [...allTechnologies, ...allTechnologies];

const TechItem = ({ name }) => {
  const IconComponent = iconMap[name] || null;

  return (
    <div className="tech-item" data-tech={name} title={name}>
      {IconComponent ? (
        <IconComponent 
          size={40} 
          className="tech-icon"
          style={{ color: 'inherit' }}
        />
      ) : (
        <span style={{ fontSize: '40px' }}>📄</span>
      )}
      <span className="tech-name">{name}</span>
    </div>
  );
};

const TechStack = () => {
  return (
    <section className="tech-stack-section">
      <div className="floating-bg floating-bg-1"></div>
      <div className="floating-bg floating-bg-2"></div>
      
      <div className="tech-stack-container">
        <div className="tech-stack-header">
          <h2>Technical Stack</h2>
          <p>Technologies and tools I work with to create amazing digital experiences</p>
        </div>
        
        <div className="tech-scroll-wrapper">
          <div className="tech-scroll-track">
            {scrollingTechnologies.map((tech, index) => (
              <TechItem key={`${tech}-${index}`} name={tech} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
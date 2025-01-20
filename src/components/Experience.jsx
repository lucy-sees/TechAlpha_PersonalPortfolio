// Experience.js
import React from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';

const ExperienceCard = ({ title, role, period, details, position }) => {
  const cardVariants = {
    hidden: { 
      opacity: 0,
      x: position % 2 === 0 ? -50 : 50
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className={`experience-card ${position % 2 === 0 ? 'left' : 'right'}`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h3 className="card-title">{title}</h3>
      <div className="card-role">{role}</div>
      <div className="card-period">{period}</div>
      <ul className="card-details">
        {details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
    </motion.div>
  );
};

const Experience = () => {
  const experiences = [
    {
      title: "Codsoft",
      role: "Artificial Intelligence Intern",
      period: "April 2024 - May 2024",
      details: [
        "Developed Python-based AI models for real-world applications",
        "Collaborated in Agile teams for AI system integration"
      ]
    },
    {
      title: "Tech Alpha",
      role: "Web Developer Intern",
      period: "April 2024 - May 2024",
      details: [
        "Designed responsive React applications",
        "Streamlined development with SASS and Webpack"
      ]
    },
    {
      title: "HuruDevs",
      role: "Freelance Software Developer",
      period: "June 2024 - Present",
      details: [
        "Developed scalable web platforms with Next.js",
        "Enhanced authentication and front-end performance"
      ]
    },
    {
      title: "Microverse",
      role: "Fullstack Software Development",
      period: "July 2023 - Feb 2024",
      details: [
        "Mastered full-stack web development",
        "Collaborated with global peers on projects"
      ]
    },
    {
      title: "University of Nairobi",
      role: "Electrical Engineering",
      period: "September 2016 - October 2019",
      details: [
        "Gained foundational engineering knowledge",
        "Learned problem-solving in technical domains"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section className="experience-section">
      <Container>
        <motion.h2 
          className="experience-heading"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.h2>
        
        <motion.p 
          className="experience-tagline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          My journey as a developer.
        </motion.p>

        <motion.div 
          className="timeline-container"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="timeline-trunk" />
          {experiences.map((exp, index) => (
            <ExperienceCard 
              key={index}
              {...exp}
              position={index}
            />
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default Experience;
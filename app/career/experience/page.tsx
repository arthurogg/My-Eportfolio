"use client";
import styles from './page.module.css';
import { FaCalendarAlt, FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa';

export default function Experience() {
  const experiences = [
    {
      company: "IREX : Institut de Retour d'Expérience",
      logo: "image_irex.png",
      role: "Stagiaire en Interlligence Artificielle",
      period: "Juin 2025 - Aout 2025",
      location: "Bourcheville, Quebec",
      description: "Initiation au télé-travail, apprentissage des méthodes de machines learning et documentation des solutions fournies ",
      skills: ["Python", "Numpy", "Télé-travail"],
      link: "https://www.irex.aretex.ca"
    },
  ];

  return (
    <div className={styles.container}>
      <header className={`${styles.header} ${styles.reveal}`} style={{ animationDelay: '0.1s' }}>
        <h1>Work Experience</h1>
        <p>My professional journey and completed internships</p>
      </header>

      <div className={styles.timeline}>
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            className={`${styles.experienceCard} ${styles.reveal}`}
            style={{ animationDelay: `${0.2 + index * 0.15}s` }}
          >
            <div className={styles.cardHeader}>
              <div className={styles.companyInfo}>
                {exp.logo ? (
                  <img src={exp.logo} alt={exp.company} className={styles.companyLogo} />
                ) : (
                  <div className={styles.companyInitial}>
                    {exp.company.charAt(0)}
                  </div>
                )}
                <div>
                  <h3>{exp.company}</h3>
                  <span className={styles.role}>{exp.role}</span>
                </div>
              </div>
              {exp.link && (
                <a href={exp.link} target="_blank" rel="noopener noreferrer" className={styles.companyLink}>
                  <FaExternalLinkAlt />
                </a>
              )}
            </div>

            <div className={styles.meta}>
              <span><FaCalendarAlt /> {exp.period}</span>
              <span><FaMapMarkerAlt /> {exp.location}</span>
            </div>

            <p className={styles.description}>{exp.description}</p>

            <div className={styles.skills}>
              {exp.skills.map((skill, i) => (
                <span key={i} className={styles.skillTag}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
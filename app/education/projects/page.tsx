import styles from './page.module.css';
import { FaCode, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';

export default function AcademicProjects() {
  // Données des projets académiques
  const projects = [
    {
      title: "SMA Medical Office System",
      description: "A multi-agent system for managing a virtual medical office with doctor, patient, and secretary agents implemented using JADE.",
      image: "/image1.png", // Vous pouvez ajouter des images pour vos projets
      outcomes: [
        "Implemented agents for a doctor, patient, and secretary to manage medical office workflows",
        "Designed interaction protocols for scheduling, diagnosis, and communication between agents",
        "Developed a custom container setup for agent communication using JADE"
      ],
      technologies: ["Java", "Jade Framework"],
      links: {
        demo: "https://github.com/arthurogg"
      }
    },
    {
      title: "ML-Based Cardiac Pathology Detection ",
      description: "Developed a machine learning model for detecting cardiac pathology using a dataset from cameroon patients with high precision.",
      image: "/image2.png",
      outcomes: [
        "Achieved 95% accuracy in anomaly detection",
        "Reduced false positives by 60%",
      ],
      technologies: ["TensorFlow", "Scikit-learn", "Pandas", "Numpy", "Python"],
      links: {
        demo: "https://github.com/Zacharie-TENE/anomaly-detection"
      }
    },

    {
      title: "Smart Diagnosis : Systemic lupus erythematosus Case",
      description: "Development of a neural network to predict the presence of systemic lupus erythematosus in patients based on clinical data. This binary classification model aids in the early diagnosis of this complex autoimmune disease.",
      image: "/image4.png",
      outcomes: [
        "Reduced report generation time by 80%",
        "Integrated 15+ data sources",
        "Enabled real-time decision making for stakeholders"
      ],
      technologies: ["TensorFlow", "Scikit-learn", "Pandas", "Numpy", "Python"],
      links: {
        demo: "https://github.com/Zacharie-TENE/data-dashboard"
      }
    }
  ];

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={`${styles.subtitle} ${styles.reveal}`} style={{ animationDelay: '0.1s' }}>
            My Work
          </p>
          <h1 className={`${styles.title} ${styles.reveal}`} style={{ animationDelay: '0.2s' }}>
            Academic <span>Projects</span>
          </h1>
          <p className={`${styles.description} ${styles.reveal}`} style={{ animationDelay: '0.4s' }}>
            Notable research and development work during my academic journey. To see more, visit my{' '}
            <a href="https://github.com/arthurogg" target="_blank" rel="noopener noreferrer" className={styles.githubLink}>
              GitHub profile <FaGithub className={styles.githubIcon} />
            </a>
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className={styles.section}>
        <div className={`${styles.sectionHeader} ${styles.reveal}`} style={{ animationDelay: '0.3s' }}>
          <FaCode className={styles.sectionIcon} />
          <h2>Featured Projects</h2>
        </div>

        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`${styles.projectCard} ${styles.reveal}`}
              style={{ animationDelay: `${0.4 + index * 0.15}s` }}
            >
              <div className={styles.projectImage}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  priority={index === 0}
                />
              </div>

              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                
                <p className={styles.projectDescription}>
                  {project.description}
                </p>

                <div className={styles.outcomes}>
                  <h4 className={styles.outcomesTitle}>Key Outcomes:</h4>
                  <ul className={styles.outcomesList}>
                    {project.outcomes.map((outcome, idx) => (
                      <li key={idx}>{outcome}</li>
                    ))}
                  </ul>
                </div>

                <div className={styles.techStack}>
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className={styles.projectLinks}>
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.demoLink}
                    >
                      View demo/report <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className={`${styles.ctaSection} ${styles.reveal}`} style={{ animationDelay: '0.5s' }}>
        <p>Want to see my educational background?</p>
        <a href="/education/background" className={styles.btnPrimary}>
          Academic Background <span>→</span>
        </a>
      </section>
    </div>
  );
}
import styles from './page.module.css';
import { FaCode, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';

export default function AcademicProjects() {
  // Données des projets académiques
  const projects = [
    {
      title: "Distributed Data Pipeline",
      description: "Built a real-time data processing pipeline handling millions of events per second using modern big data technologies.",
      image: "/project-pipeline.jpg", // Vous pouvez ajouter des images pour vos projets
      outcomes: [
        "Processed 2M+ events per second with 99.9% uptime",
        "Reduced data latency by 75% compared to previous system",
        "Implemented fault-tolerant architecture with auto-recovery"
      ],
      technologies: ["Apache Spark", "Kafka", "Python", "Docker", "Kubernetes"],
      links: {
        demo: "https://github.com/Zacharie-TENE/pipeline-project"
      }
    },
    {
      title: "ML-Based Anomaly Detection",
      description: "Developed a machine learning model for detecting anomalies in industrial sensor data with high precision.",
      image: "/project-ml.jpg",
      outcomes: [
        "Achieved 95% accuracy in anomaly detection",
        "Reduced false positives by 60%",
        "Deployed in production environment with real-time monitoring"
      ],
      technologies: ["TensorFlow", "Scikit-learn", "Docker", "FastAPI", "PostgreSQL"],
      links: {
        demo: "https://github.com/Zacharie-TENE/anomaly-detection"
      }
    },
    {
      title: "HPC Simulation Framework",
      description: "Optimized parallel computing algorithms for scientific simulations on high-performance cluster systems.",
      image: "/project-hpc.jpg",
      outcomes: [
        "Improved simulation performance by 300%",
        "Scaled to 1000+ cores efficiently",
        "Published research paper on optimization techniques"
      ],
      technologies: ["MPI", "OpenMP", "C++", "CUDA", "Linux"],
      links: {
        demo: "https://github.com/Zacharie-TENE/hpc-simulation"
      }
    },
    {
      title: "Data Visualization Dashboard",
      description: "Created interactive dashboards for complex data analysis and business intelligence reporting.",
      image: "/project-dashboard.jpg",
      outcomes: [
        "Reduced report generation time by 80%",
        "Integrated 15+ data sources",
        "Enabled real-time decision making for stakeholders"
      ],
      technologies: ["React", "D3.js", "Python", "Flask", "MongoDB"],
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
            <a href="https://github.com/Zacharie-TENE" target="_blank" rel="noopener noreferrer" className={styles.githubLink}>
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
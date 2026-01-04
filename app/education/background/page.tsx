import styles from './page.module.css';
import { FaGraduationCap, FaCalendar } from 'react-icons/fa';
import Image from 'next/image';

export default function AcademicBackground() {
  const academicPath = [
    {
      period: "2025 - Present",
      school: "ENSEEIHT (INP Toulouse)",
      path : "/inp-enseeiht-couleur.png",
      degree: "Master's in Big Data & HPC",
      description: "Specialization in large-scale data processing, distributed systems, and high-performance computing.",
      location: "Toulouse, France"
    },
    {
      period: "2021 - 2025",
      school: "ENSPY (École Nationale Supérieure Polytechnique de Yaoundé)",
      path :"",
      degree: "Engineering Degree",
      description: "Foundation in computer science, mathematics, and engineering principles.",
      location: "Yaoundé, Cameroon"
    }
  ];

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={`${styles.subtitle} ${styles.reveal}`} style={{ animationDelay: '0.1s' }}>
            My Journey
          </p>
          <h1 className={`${styles.title} ${styles.reveal}`} style={{ animationDelay: '0.2s' }}>
            Academic <span>Background</span>
          </h1>
          <p className={`${styles.description} ${styles.reveal}`} style={{ animationDelay: '0.4s' }}>
            A rigorous academic training that has shaped my approach to data science and engineering.
          </p>
        </div>
      </section>

      {/* Academic Timeline */}
      <section className={styles.section}>
        <div className={`${styles.sectionHeader} ${styles.reveal}`} style={{ animationDelay: '0.3s' }}>
          <FaGraduationCap className={styles.sectionIcon} />
          <h2>Academic Timeline</h2>
        </div>
        
        <div className={styles.timeline}>
          {academicPath.map((item, index) => (
            <div 
              key={index} 
              className={`${styles.timelineItem} ${styles.reveal}`}
              style={{ animationDelay: `${0.4 + index * 0.2}s` }}
            >
             <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <div className={styles.cardHeader}>
                  <span className={styles.period}>
                    <FaCalendar /> {item.period}
                  </span>
                  {item.path && (
                    <div className={styles.schoolLogo}>
                      <Image 
                        src={item.path}
                        alt={`${item.school} logo`}
                        width={60}
                        height={60}
                        style={{ objectFit: 'contain' }}
                      />
                    </div>
                  )}
                </div>
                <h3 className={styles.school}>{item.school}</h3>
                <p className={styles.degree}>{item.degree}</p>
                <p className={styles.itemDescription}>{item.description}</p>
                <span className={styles.location}>{item.location}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className={`${styles.ctaSection} ${styles.reveal}`} style={{ animationDelay: '0.5s' }}>
        <p>Interested in my academic projects?</p>
        <a href="/education/projects" className={styles.btnPrimary}>
          View Projects <span>→</span>
        </a>
      </section>
    </div>
  );
}
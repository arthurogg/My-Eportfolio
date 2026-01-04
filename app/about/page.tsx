import styles from './page.module.css';
import { FaFileDownload, FaGraduationCap, FaCode, FaShieldAlt, FaRocket } from 'react-icons/fa';

export default function About() {
  return (
    <section className={styles.aboutContainer}>
      {/* Fond animé */}
      <div className={styles.backgroundGrid}></div>
      <div className={styles.glowOrb}></div>
      
      <div className={styles.header}>
        <span className={styles.tagline}>Who am I?</span>
        <h1 className={styles.reveal} style={{ animationDelay: '0.2s' }}>
          About <span className={styles.highlight}>Me</span>
        </h1>
        <p className={styles.reveal} style={{ animationDelay: '0.3s' }}>
          Software Engineering Student &amp; Cybersecurity Enthusiast
        </p>
        <div className={styles.headerLine}></div>
      </div>

      <div className={styles.bentoGrid}>
        {/* Bloc 1 : Education */}
        <div className={`${styles.card} ${styles.cardEducation} ${styles.reveal}`} 
             style={{ animationDelay: '0.4s' }}>
          <div className={styles.cardGlow}></div>
          <div className={styles.iconWrapper}>
            <FaGraduationCap />
          </div>
          <h3>Educational Background</h3>
          <p>
            Currently pursuing Computer Engineering at <strong>ENSEEIHT</strong> in Toulouse, France. 
            Passionate about software development and cybersecurity, with a strong 
            foundation from <strong>ENSPY</strong> in Cameroon.
          </p>
          <div className={styles.cardAccent}></div>
        </div>

        {/* Bloc 2 : Technical Focus */}
        <div className={`${styles.card} ${styles.cardFocus} ${styles.reveal}`} 
             style={{ animationDelay: '0.5s' }}>
          <div className={styles.cardGlow}></div>
          <div className={styles.iconWrapper}>
            <FaCode />
          </div>
          <h3>Technical Focus</h3>
          <p>
            Specialized in software systems development with a growing interest in 
            cybersecurity. Continuously expanding my knowledge and gaining meaningful 
            experiences in the field.
          </p>
          <div className={styles.techStack}>
            <span>Python</span>
            <span>React</span>
            <span>Security</span>
          </div>
        </div>

        {/* Bloc 3 : Career Goals */}
        <div className={`${styles.card} ${styles.cardGoals} ${styles.reveal}`} 
             style={{ animationDelay: '0.6s' }}>
          <div className={styles.cardGlow}></div>
          <div className={styles.iconWrapper}>
            <FaShieldAlt />
          </div>
          <h3>Career Goals</h3>
          <p>
            Aspiring to pursue the <strong>TLS-SEC</strong> (cybersecurity) track in my final year, 
            focusing on software engineering to develop expertise in protecting 
            digital systems, data, and infrastructure.
          </p>
          <div className={styles.shieldPattern}></div>
        </div>

        {/* Bloc 4 : Aspirations */}
        <div className={`${styles.card} ${styles.cardAspirations} ${styles.reveal}`} 
             style={{ animationDelay: '0.7s' }}>
          <div className={styles.cardGlow}></div>
          <div className={styles.iconWrapper}>
            <FaRocket />
          </div>
          <h3>Professional Aspirations</h3>
          <p>
            Committed to becoming a skilled IT engineer with expertise in cybersecurity 
            and software engineering. Each challenge is viewed as a learning opportunity, 
            driving my professional growth.
          </p>
        </div>

        {/* Bloc 5 : Actions */}
        <div className={`${styles.card} ${styles.cardActions} ${styles.reveal}`} 
             style={{ animationDelay: '0.8s' }}>
          <button className={`${styles.btn} ${styles.btnSecondary}`}>
            <span>Hire Me</span>
          </button>
          <button className={`${styles.btn} ${styles.btnPrimary}`}>
            <FaFileDownload />
            <span>View My CV</span>
          </button>
        </div>
      </div>
    </section>
  );
}
import styles from './page.module.css';
import { FaLinkedin, FaGithub, FaWhatsapp, FaFileAlt } from 'react-icons/fa';

export default function Home() {
  return (
    <div className={""}>

      {/* Section Hero */}
      <main className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={`${styles.title} ${styles.reveal}`} style={{ animationDelay: '0.2s' }}>
             Arthur Negoum <span></span>
          </h1>
          
          <p className={`${styles.description} ${styles.reveal}`} style={{ animationDelay: '0.4s' }}>
            Since my first steps into the digital world, I have always been fascinated by the power of data and its ability to uncover concrete solutions that improve our daily lives. Currently a student specializing in Big Data and HPC at ENSEEIHT (INP Toulouse), I am enthusiastically deep-diving into data exploitation. My ambition is to build a career dedicated to Data Analytics and Intelligence. 
            
            This portfolio retraces my journey, my data-oriented projects, and the values that define me.
          </p>

          <div className={`${styles.btnGroup} ${styles.reveal}`} style={{ animationDelay: '0.6s' }}>
            <a href="/arthur_cv_ok.pdf" target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
              <FaFileAlt />
              See my CV
            </a>
            <a href="/yves-arthur-negoum-ppp.pdf" className={styles.btnSecondary}>
              <span className={styles.btnIcon}>◆</span>
              Professional Projects
            </a>
          </div>

          <div className={`${styles.socials} ${styles.reveal}`} style={{ animationDelay: '0.8s' }}>
            <a href="https://www.linkedin.com/in/yves-arthur-negoum-wouatedem" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <FaLinkedin />
            </a>
            <a href="https://github.com/arthurogg" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <FaGithub />
            </a>
            <a href="https://wa.me/+33759043831" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <FaWhatsapp />
            </a>
          </div>
        </div>

        <div className={`${styles.imageContainer} ${styles.reveal}`} style={{ animationDelay: '0.4s' }}>
          <div className={styles.circle}>
            <img 
              src="/2A4F6477-F8F0-4395-B2BC-549E07963B40.jpg" 
              alt="Yves Arthur Negoum" 
            />
          </div>
        </div>
      </main>

    </div>
  );
}
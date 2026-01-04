import React from 'react';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      {/* Texte à gauche */}
      <div className={styles.content}>
        <h1 className={`${styles.title} ${styles.animate}`}>
          Hello, My name is <span style={{color: '#475569'}}>Tene Fogang Zacharie Igor</span>
        </h1>
        
        <p className={`${styles.description} ${styles.animate}`}>
          Welcome to my eportfolio ! After studying in ENSPY for fours Years, I am
          currently a proud student at ENSEEIHT, a prestigious engineering 
          graduate school in Toulouse. With a strong passion for technology and 
          innovation, I am pursuing a degree in Computer Engineering, aiming to 
          build a career in this field.
        </p>

        <div className={`${styles.buttonContainer} ${styles.animate}`}>
          <button className={styles.btn}>
            About Me <span>»</span>
          </button>
        </div>

        <div className={`${styles.socials} ${styles.animate}`}>
            {/* Remplacer par vos icônes (ex: react-icons) */}
            <span>in</span>
            <span>github</span>
            <span>twitter</span>
            <span>whatsapp</span>
        </div>
      </div>

      {/* Image à droite */}
      <div className={`${styles.imageContainer} ${styles.animate}`}>
        <div className={styles.profileCircle}>
          <span className={styles.profileLabel}>Profile Picture</span>
          {/* <img src="/path-to-your-image.jpg" alt="Profile" className={styles.image} /> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
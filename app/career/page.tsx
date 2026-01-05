"use client";
import Link from 'next/link';
import styles from './page.module.css';
import { FaBriefcase, FaFileAlt } from 'react-icons/fa';

export default function Career() {
  const careerItems = [
    {
      title: "Work Experience",
      desc: "My relevant professional experiences in enterprise and industry.",
      link: "/career/experience",
      icon: <FaBriefcase />,
      image: "image_work.png", // Ou "/images/experience.jpg" pour utiliser une image
      delay: "0.2s"
    },
    {
      title: "Internship Applications",
      desc: "My targeted companies, current applications, and professional documents.",
      link: "/career/internships",
      icon: <FaFileAlt />,
      image: "image_internship.png", // Ou "/images/internships.jpg" pour utiliser une image
      delay: "0.4s"
    },
  ];

  return (
    <div className={styles.container}>
      <header className={`${styles.header} ${styles.reveal}`} style={{ animationDelay: '0.1s' }}>
        <h1>Professional</h1>
        <p>Discover more about my professional journey and aspirations</p>
      </header>

      <div className={styles.grid}>
        {careerItems.map((item, index) => (
          <Link href={item.link} key={index} className={styles.cardLink}>
            <div className={`${styles.card} ${styles.reveal}`} style={{ animationDelay: item.delay }}>
              <div className={styles.imageBox}>
                {item.image ? (
                  <img src={item.image} alt={item.title} className={styles.cardImage} />
                ) : (
                  <div className={styles.iconContainer}>
                    {item.icon}
                  </div>
                )}
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <span className={styles.cardArrow}>→</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
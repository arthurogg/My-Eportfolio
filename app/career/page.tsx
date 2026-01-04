"use client"; // Obligatoire si vous utilisez des animations ou interactions
import Link from 'next/link';
import styles from './page.module.css';
import { FaBriefcase, FaFileAlt, FaRocket } from 'react-icons/fa';

export default function Career() {
  const careerItems = [
    {
      title: "Work Experience",
      desc: "My relevant professional experiences in enterprise and industry.",
      link: "/career/experience",
      icon: <FaBriefcase />,
      delay: "0.2s"
    },
    {
      title: "Internship Applications",
      desc: "My targeted companies, current applications, and professional documents.",
      link: "/career/internships",
      icon: <FaFileAlt />,
      delay: "0.4s"
    },
  ];

  return (
    <div className={styles.container}>
      <header className={`${styles.header} ${styles.reveal}`} style={{ animationDelay: '0.1s' }}>
        <h1 className={styles.title}>Professional</h1>
        <p>Discover more about my professional journey and aspirations</p>
      </header>

      <div className={styles.grid}>
        {careerItems.map((item, index) => (
          <Link href={item.link} key={index} className={styles.cardLink}>
            <div className={`${styles.card} ${styles.reveal}`} style={{ animationDelay: item.delay }}>
              <div className={styles.imageBox}>
                <div className={styles.iconContainer}>
                  {item.icon}
                </div>
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
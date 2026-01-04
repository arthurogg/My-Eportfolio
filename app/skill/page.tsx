"use client";
import styles from './page.module.css';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

export default function Skill() {
  // Données du graphique Radar
  const radarData = {
    labels: ['Software Development', 'Design and Architecture', 'Databases', 'Software Engineering', 'Systems and Networks', 'AI and Data', 'Transversal Skills'],
    datasets: [
      {
        label: 'Skill Level',
        data: [9, 7, 8, 8, 6, 7, 9],
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        borderColor: '#3b82f6',
        borderWidth: 2,
      },
    ],
  };

  const categories = [
    {
      name: "Languages",
      techs: [
        { name: "Java", icon: "/icons/java.png" },
        { name: "Python", icon: "/icons/python.png" },
        { name: "JavaScript", icon: "/icons/js.png" },
        { name: "TypeScript", icon: "/icons/ts.png" },
        { name: "C", icon: "/icons/c.png" },
      ]
    },
    {
      name: "Frameworks and Libraries",
      techs: [
        { name: "Spring-boot", icon: "/icons/spring.png" },
        { name: "Express-js", icon: "/icons/express.png" },
        { name: "Tailwind", icon: "/icons/tailwind.png" },
        { name: "Next-js", icon: "/icons/next.png" },
      ]
    }
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.reveal}>Skills</h1>
      
      <div className={`${styles.chartSection} ${styles.reveal}`} style={{ animationDelay: '0.2s' }}>
        <Radar data={radarData} options={{ scales: { r: { min: 0, max: 10 } } }} />
      </div>

      <p className={`${styles.subtitle} ${styles.reveal}`} style={{ animationDelay: '0.4s' }}>
        Here are some of the technologies I know and have used in projects.
      </p>

      {categories.map((cat, idx) => (
        <div key={idx} className={`${styles.categorySection} ${styles.reveal}`} style={{ animationDelay: `${0.5 + idx * 0.1}s` }}>
          <h2 className={styles.categoryTitle}>{cat.name}</h2>
          <div className={styles.iconGrid}>
            {cat.techs.map((tech, tIdx) => (
              <div key={tIdx} className={styles.techItem}>
                <img src={tech.icon} alt={tech.name} className={styles.techIcon} />
                <span className={styles.techName}>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
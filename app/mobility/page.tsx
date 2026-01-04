import Image from 'next/image';
import styles from './page.module.css';

export default function Mobility() {
  const mobilityData = [
    {
      city: "Toulouse",
      country: "France",
      period: "2022 - Present",
      description: "Engineering studies at INP-ENSEEIHT with focus on cybersecurity and networks",
      image: "/toulouse.jpg",
      highlights: [
        "Advanced cybersecurity curriculum",
        "Research in network security",
        "French engineering excellence",
        "International student community"
      ]
    },
    {
      city: "Munich",
      country: "Germany", 
      period: "Summer 2023",
      description: "Technical internship in cybersecurity at leading German technology company",
      image: "/munich.jpg",
      highlights: [
        "Hands-on security implementation",
        "German engineering methodology",
        "Cross-cultural team collaboration",
        "Advanced technical skills development"
      ]
    },
    {
      city: "Barcelona",
      country: "Spain",
      period: "2021", 
      description: "Cultural exchange program with focus on technology and innovation",
      image: "/barcelona.jpg",
      highlights: [
        "Spanish language proficiency",
        "Mediterranean culture immersion",
        "Technology startup ecosystem",
        "International networking"
      ]
    }
  ];

  const interests = [
    {
      title: "Sports & Fitness",
      description: "Running marathons, swimming, and cycling for physical and mental well-being",
      image: "/sports.jpg",
      icon: "🏃‍♂️"
    },
    {
      title: "Technology Innovation",
      description: "Contributing to open source projects and exploring emerging technologies",
      image: "/tech.jpg",
      icon: "💻"
    },
    {
      title: "Photography",
      description: "Capturing landscapes and street photography during travels",
      image: "/photography.jpg",
      icon: "📸"
    },
    {
      title: "Music & Arts",
      description: "Guitar playing, composition, and exploring various forms of artistic expression",
      image: "/music.jpg",
      icon: "🎸"
    },
    {
      title: "Reading & Learning",
      description: "Technical books, science fiction, and continuous learning",
      image: "/reading.jpg",
      icon: "📚"
    },
    {
      title: "Robotics & Making",
      description: "Arduino projects, 3D printing, and hardware prototyping",
      image: "/robotics.jpg",
      icon: "🤖"
    }
  ];

  return (
    <div className={styles.container}>
      {/* International Mobility Section */}
      <section className={`${styles.section} ${styles.reveal}`}>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>International Mobility</h2>
          <p className={styles.sectionSubtitle}>
            My journey across different cities and cultures
          </p>
        </div>

        <div className={styles.grid}>
          {mobilityData.map((city, index) => (
            <div
              key={index}
              className={`${styles.card} ${styles.reveal}`}
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={city.image}
                  alt={`${city.city} cityscape`}
                  fill
                  className={styles.cardImage}
                  priority={index === 0}
                />
                <div className={styles.imageOverlay}>
                  <div className={styles.cityInfo}>
                    <h3 className={styles.cityName}>{city.city}</h3>
                    <p className={styles.countryName}>{city.country}</p>
                  </div>
                </div>
              </div>

              <div className={styles.cardContent}>
                <p className={styles.period}>{city.period}</p>
                <p className={styles.description}>{city.description}</p>
                <ul className={styles.highlights}>
                  {city.highlights.map((highlight, idx) => (
                    <li key={idx} className={styles.highlight}>
                      <span className={styles.bullet}></span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Personal Interests Section */}
      <section className={`${styles.section} ${styles.reveal}`} style={{ animationDelay: '0.6s' }}>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>Personal Interests</h2>
          <p className={styles.sectionSubtitle}>
            Exploring my hobbies and passions beyond technology
          </p>
        </div>

        <div className={styles.interestsGrid}>
          {interests.map((interest, index) => (
            <div
              key={interest.title}
              className={`${styles.interestCard} ${styles.reveal}`}
              style={{ animationDelay: `${0.8 + index * 0.1}s` }}
            >
              <div className={styles.interestImageWrapper}>
                <Image
                  src={interest.image}
                  alt={interest.title}
                  fill
                  className={styles.interestImage}
                />
                <div className={styles.interestOverlay}>
                  <span className={styles.interestIcon}>{interest.icon}</span>
                </div>
              </div>
              
              <div className={styles.interestContent}>
                <h3 className={styles.interestTitle}>{interest.title}</h3>
                <p className={styles.interestDescription}>{interest.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Psychometric Test Section */}
      <section className={`${styles.testSection} ${styles.reveal}`} style={{ animationDelay: '1.4s' }}>
        <div className={styles.testHeader}>
          <span className={styles.testIcon}>🧠</span>
          <div>
            <h3 className={styles.testTitle}>Personality Assessment</h3>
            <p className={styles.testDescription}>Comprehensive psychometric evaluation results</p>
          </div>
        </div>
        <div className={styles.testContent}>
          <p>Discover my personality traits, strengths, and working style through professional psychometric testing.</p>
          <button className={styles.btnView}>View Assessment Results</button>
        </div>
      </section>
    </div>
  );
}
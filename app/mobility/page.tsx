import Image from 'next/image';
import styles from './page.module.css';

export default function Mobility() {
  const mobilityData = [
    {
      city: "Toulouse",
      country: "France",
      period: "2025 - Present",
      description: "Engineering studies at INP-ENSEEIHT with focus on Big Data and HPC",
      image: "/image_toulouse.png",
      highlights: [
        "Advanced Data scientist curriculum",
        "Research in data domains",
        "French engineering excellence",
        "International student community"
      ]
    },
    {
      city: "Yaoundé",
      country: "Cameroon", 
      period: "Since 2021",
      description: "Engenneering studies at National Advanced School of Engineering Yaoundé, Cameroon",
      image: "/image_yde.png",
      highlights: [
        "First step in informatics engineering",
        "Mathematics and Physics foundations",
        "Social life",
      ]
    }
  ];

  const interests = [
    {
      title: "Sports & Fitness",
      description: "Running marathons and doing fitness for physical and mental well-being",
      image: "/image_fit.png",
      icon: " "
    },
    {
      title: "Football",
      description: "Playing and watching football matches, following major leagues and tournaments",
      image: "/image_foot.png",
      icon: " "
    },
    {
      title: "Streaming & Gaming",
      description: "Technical books, science fiction, and continuous learning",
      image: "/image_game.png",
      icon: " "
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
    </div>
  );
}
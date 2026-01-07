import styles from './page.module.css';
import { FaLinkedin, FaBriefcase, FaDownload, FaVideo, FaUsers, FaNetworkWired } from 'react-icons/fa';
import Image from 'next/image';

export default function PPP() {
  const pppInfo = {
    title: "Personal Professional Project",
    description: "My journey, goals, and aspirations in engineering",
    video: {
      src: "/resources/ppp/presentation.mp4",
      poster: "/resources/ppp/video-thumbnail.jpg",
      description: "3-minute presentation of my professional journey and goals"
    },
    keyPoints: [
      {
        title: "Background",
        points: [
          "Computer Engineering Student at ENSEEIHT",
          "Previously studied at ENSPY, Cameroon", 
          "Passionate about data processing projects ans solutions based on data analysis"
        ]
      },
      {
        title: "Career Goals",
        points: [
          "Specializing in data science and engineering",
          "Pursuing Big Data & HPC expertise",
          "Aiming for roles in data engineering"
        ]
      },
      {
        title: "Current Focus",
        points: [
          "Master's in Big Data & HPC at ENSEEIHT",
          "Building expertise in distributed systems",
          "Developing machine learning and AI skills"
        ]
      }
    ],
    pdf: {
      href: "/yves-arthur-negoum-ppp.pdf",
      description: "Download the complete presentation of my professional project (PDF)"
    }
  };

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <header className={`${styles.hero} ${styles.reveal}`} style={{ animationDelay: '0.1s' }}>
        <div className={styles.heroContent}>
          <h1 className={`${styles.title} ${styles.reveal}`} style={{ animationDelay: '0.2s' }}>
            {pppInfo.title}
            <div className={styles.socialLinks}>
              <a 
                href="https://www.linkedin.com/in/yves-arthur-negoum-wouatedem-854967302" 
                title="My LinkedIn profile" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.socialLink}
              >
                <FaLinkedin />
              </a>
              <a 
                href="/career/internships" 
                title="My internship applications" 
                className={styles.socialLink}
              >
                <FaBriefcase />
              </a>
            </div>
          </h1>
          <p className={`${styles.description} ${styles.reveal}`} style={{ animationDelay: '0.3s' }}>
            {pppInfo.description}
          </p>
        </div>
      </header>

      {/* Video Section */}
      <section className={styles.section}>
        <div className={`${styles.videoSection} ${styles.reveal}`} style={{ animationDelay: '0.4s' }}>
          <div className={styles.sectionHeader}>
            <FaVideo className={styles.sectionIcon} />
            <h2>Professional Presentation</h2>
          </div>
          
          <div className={styles.videoContainer}>
            <video
              controls
              className={styles.video}
              poster={pppInfo.video.poster}
            >
              <source src={pppInfo.video.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className={styles.videoDescription}>
            {pppInfo.video.description}
          </p>
        </div>
      </section>

      {/* Key Points Section */}
      <section className={styles.section}>
        <div className={`${styles.sectionHeader} ${styles.reveal}`} style={{ animationDelay: '0.5s' }}>
          <FaUsers className={styles.sectionIcon} />
          <h2>Professional Journey</h2>
        </div>

        <div className={styles.keyPointsGrid}>
          {pppInfo.keyPoints.map((section, index) => (
            <div 
              key={index} 
              className={`${styles.keyPointCard} ${styles.reveal}`}
              style={{ animationDelay: `${0.6 + index * 0.1}s` }}
            >
              <h3>{section.title}</h3>
              <ul>
                {section.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* PDF Download Section */}
      <section className={styles.section}>
        <div className={`${styles.downloadSection} ${styles.reveal}`} style={{ animationDelay: '0.8s' }}>
          <div className={styles.downloadCard}>
            <h3>Complete PPP Document</h3>
            <p>Access my detailed professional project presentation</p>
            <a
              href={pppInfo.pdf.href}
              download
              className={styles.downloadBtn}
            >
              <FaDownload /> Download Detailed PPP Document
            </a>
            <span className={styles.downloadDescription}>
              {pppInfo.pdf.description}
            </span>
          </div>
        </div>
      </section>

      {/* MyJobGlasses Section */}
      <section className={styles.section}>
        <div className={`${styles.sectionHeader} ${styles.reveal}`} style={{ animationDelay: '0.9s' }}>
          <FaUsers className={styles.sectionIcon} />
          <h2>Professional Interviews & Networking</h2>
        </div>

        <div className={styles.twoColumnLayout}>
          {/* Column 1: MyJobGlasses */}
          <div className={`${styles.column} ${styles.reveal}`} style={{ animationDelay: '1.0s' }}>
            <div className={styles.interviewCard}>
              <h3>Interview on MyJobGlasses and LinkedIn</h3>
              <p>
                 I have interviewed a data architect and a data scientist engineers to gain deeper insights into these fields. 
              </p>
              
              <div className={styles.imageGrid}>
                <div className={styles.imageContainer}>
                  <Image 
                    src="/image_entretien.png" 
                    width={400} 
                    height={300} 
                    alt="Data Architect Interview" 
                    className={styles.interviewImage}
                  />
                </div>
                <div className={styles.imageContainer}>
                  <Image 
                    src="/image_fre.png" 
                    width={400} 
                    height={300} 
                    alt="Data Scientist LinkedIn Profile" 
                    className={styles.interviewImage}
                  />
                </div>
              </div>

              <span className={styles.downloadDescription}>
                MyJobGlasses is one of the networking tools I use to connect with professionals and elaborate 
                on my professional projects. This document is a summary of my practice on the platform.
              </span>
            </div>
          </div>

          {/* Column 2: Professional Networking */}
          <div className={`${styles.column} ${styles.reveal}`} style={{ animationDelay: '1.1s' }}>
            <div className={styles.networkingCard}>
              <div className={styles.networkingHeader}>
                <FaNetworkWired className={styles.networkingIcon} />
                <h3>Professional Networking</h3>
              </div>
              
              <p>
                To further explore opportunities I could pursue after my studies, should my plans not unfold 
                as expected, I utilize several professional platforms and resources:
              </p>

              <div className={styles.networkingList}>
                <div className={styles.networkingItem}>
                  <h4>🌐 ETE Community</h4>
                </div>

                <div className={styles.networkingItem}>
                  <h4>🔒 Data Insights</h4>
                  <p>
                   {`Following Patrick Ganduberg's YouTube channel has been instrumental in deepening my understanding of different jobs based on data.`}
                  </p>
                  <div className={styles.linkGroup}>
                    <a 
                      href="https://www.youtube.com/channel" 
                      className={styles.networkingLink}
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      YouTube Channel
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/PatrickGanduberg" 
                      className={styles.networkingLink}
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      LinkedIn Profile
                    </a>
                  </div>
                </div>

               
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`${styles.ctaSection} ${styles.reveal}`} style={{ animationDelay: '1.2s' }}>
        <p>Interested in my professional journey?</p>
        <a href="/contact" className={styles.btnPrimary}>
          Get in Touch <span>→</span>
        </a>
      </section>
    </div>
  );
}
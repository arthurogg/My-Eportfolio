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
          "Passionate about software development and cybersecurity"
        ]
      },
      {
        title: "Career Goals",
        points: [
          "Specializing in software systems and security",
          "Pursuing TLS-Sec track in final year if possible",
          "Aiming for roles in cybersecurity/software engineering"
        ]
      },
      {
        title: "Current Focus",
        points: [
          "Master's in Big Data & HPC at ENSEEIHT",
          "Building expertise in distributed systems",
          "Developing machine learning and AI skills"
        ]
      },
      {
        title: "Future Vision",
        points: [
          "Contributing to cybersecurity innovation",
          "Leading high-performance computing projects",
          "Bridging technology gaps in emerging markets"
        ]
      }
    ],
    pdf: {
      href: "/resources/ppp/zacharie-igor-tene-ppp.pdf",
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
                href="https://www.linkedin.com/in/zacharie-igor-tene-fogang/" 
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
              <h3>Interview on MyJobGlasses</h3>
              <p>
                As I have a strong interest in both cybersecurity and software engineering, with a long-term goal 
                of specializing in cybersecurity through further studies, I have interviewed both software engineers 
                and a cybersecurity professional to gain deeper insights into these fields. Additionally, I attended 
                a cybersecurity conference organized by Wavestone to enhance my understanding of the domain.
              </p>
              
              <div className={styles.imageGrid}>
                <div className={styles.imageContainer}>
                  <Image 
                    src="/resources/course/1.png" 
                    width={400} 
                    height={300} 
                    alt="Software Engineer Interview" 
                    className={styles.interviewImage}
                  />
                </div>
                <div className={styles.imageContainer}>
                  <Image 
                    src="/resources/course/2.png" 
                    width={400} 
                    height={300} 
                    alt="Cybersecurity Professional Interview" 
                    className={styles.interviewImage}
                  />
                </div>
                <div className={styles.imageContainer}>
                  <Image 
                    src="/resources/course/wavestone.png" 
                    width={400} 
                    height={300} 
                    alt="Wavestone Conference" 
                    className={styles.interviewImage}
                  />
                </div>
              </div>

              <a
                href="/resources/ppp/myjobglasses_orientation.pdf"
                download
                className={styles.downloadBtn}
              >
                <FaDownload /> Download MyJobGlasses Achievement
              </a>
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
                  <p>
                    A community platform where former engineers share their career experiences through online 
                    webinars, providing a comprehensive view of potential job opportunities after graduation.
                  </p>
                  <a 
                    href="https://ete.community" 
                    className={styles.networkingLink}
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Visit ETE Community
                  </a>
                </div>

                <div className={styles.networkingItem}>
                  <h4>🔒 Cybersecurity Insights</h4>
                  <p>
                   {`Following Michel Kartner's expertise - a consultant and trainer in cybersecurity at CyberIni, 
                    which offers valuable insights into the path of a cybersecurity professional.`}
                  </p>
                  <div className={styles.linkGroup}>
                    <a 
                      href="https://www.youtube.com/c/MichelKartner" 
                      className={styles.networkingLink}
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      YouTube Channel
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/michel-kartner" 
                      className={styles.networkingLink}
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      LinkedIn Profile
                    </a>
                  </div>
                </div>

                <div className={styles.networkingItem}>
                  <h4>🎯 Career Planning</h4>
                  <p>
                    Actively growing my network and exploring opportunities through MillionRoads platform 
                    for strategic career planning and connections.
                  </p>
                  <a 
                    href="https://enseeiht.myroad.app/intentions" 
                    className={styles.networkingLink}
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    MillionRoads Profile
                  </a>
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
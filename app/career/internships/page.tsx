import styles from './page.module.css';
import { FaCalendarAlt, FaMapMarkerAlt, FaExternalLinkAlt, FaBuilding, FaDownload, FaLanguage, FaGlobe } from 'react-icons/fa';
import Image from 'next/image';

export default function Internships() {
  // Candidatures ciblées pour des entreprises spécifiques
  const targetedCompanies = [
    {
      id: 1,
      name: "Airbus",
      logo: "/image_airbus.png",
      description: "Manufacturing of components for the aeronautical and aerospace industry.",
      location: "Toulouse, France / Mountain View, CA",
      jobOffer: {
        title: "Stage 2026 - Stage en analyse de données (ALL GENDER)",
        description: "This internship will involve supporting the department in the implementation of dashboards and KPIs to measure and improve the service’s performance across all activities.The internship will start in February 2026 and will last for six months (indicative title).",
        requirements: ["data analyst", "Python", "Anglais :Intermédiaire (B1)"],
        link: "https://www.linkedin.com/jobs/view/4309983638/?trk=eml-email_job_alert_digest_01-primary_job_list-0-jobcard_body_8180862722&refId=xlnv045inpw96EoDDs4ozA%3D%3D&trackingId=uoxRE84Gv3hk1a9XbQiDnw%3D%3D"
      },
      applicationStatus: "Applied",
      documents: {
        cv: "Negoum.pdf",
        coverLetter: "/documents/CoverLetter_Google_EN.pdf"
      }
    },
    {
      id: 2,
      name: "Thales",
      logo: "/image_thals.png",
      description: "Fabrication pour l’aérospatiale et la défense",
      location: "Meudon , Ile-De-France",
      jobOffer: {
        title: "Stage Ingénieur optimisation par IA H/F",
        description: "Ce stage consiste à développer une IA capable d’analyser automatiquement un code source complet, de générer des suggestions d’optimisation en premier niveau, d’exécuter ce processus via un job SLURM GPU long, et d’intégrer un système de monitoring (ex. Pyroscope) ainsi qu’un système multi-agents pour tester et valider les optimisations proposées.",
        requirements: ["Formation ingénieur", "Python/MATLAB"],
        link: "https://www.linkedin.com/jobs/search/?currentJobId=4343761158&keywords=thales%20toulouse&origin=BLENDED_SEARCH_RESULT_NAVIGATION_SEE_ALL&originToLandingJobPostings=4343552486%2C4343741532%2C4345871412"
      },
      applicationStatus: "Preparing",
      documents: {
        cv: "/documents/CV_Airbus_FR.pdf",
        coverLetter: "/documents/LettreMotivation_Airbus_FR.pdf"
      }
    }
  ];

  // Documents génériques pour candidatures internationales
  const genericDocuments = {
    company: "International Applications",
    logo: "/logos/international.png",
    documents: {
      cvEN: "/documents/CV_International_EN.pdf",
      cvFR: "/documents/CV_International_FR.pdf",
      coverLetterEN: "/documents/CoverLetter_Generic_EN.pdf",
      coverLetterFR: "/documents/LettreMotivation_Generic_FR.pdf",
      transcripts: "/documents/Academic_Transcripts.pdf",
      portfolio: "/documents/Portfolio_Projects.pdf"
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Applied": return styles.statusApplied;
      case "In Review": return styles.statusReview;
      case "Preparing": return styles.statusPreparing;
      default: return styles.statusDefault;
    }
  };

  return (
    <div className={styles.container}>
      <header className={`${styles.header} ${styles.reveal}`} style={{ animationDelay: '0.1s' }}>
        <h1>Internship Applications</h1>
        <p>Strategic applications to leading technology and aerospace companies</p>
      </header>

      {/* Targeted Company Applications */}
      <section className={styles.section}>
        <div className={`${styles.sectionHeader} ${styles.reveal}`} style={{ animationDelay: '0.2s' }}>
          <FaBuilding className={styles.sectionIcon} />
          <h2>Targeted Applications</h2>
        </div>

        <div className={styles.companiesGrid}>
          {targetedCompanies.map((company, index) => (
            <div 
              key={company.id} 
              className={`${styles.companyCard} ${styles.reveal}`}
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className={styles.companyHeader}>
                <div className={styles.companyInfo}>
                  <div className={styles.companyLogo}>
                    {company.logo ? (
                      <Image
                        src={company.logo}
                        alt={`${company.name} logo`}
                        width={60}
                        height={60}
                        style={{ objectFit: 'contain' }}
                      />
                    ) : (
                      <FaBuilding />
                    )}
                  </div>
                  <div className={styles.companyDetails}>
                    <h3>{company.name}</h3>
                    <div className={styles.location}>
                      <FaMapMarkerAlt /> {company.location}
                    </div>
                  </div>
                </div>
                <span className={`${styles.status} ${getStatusColor(company.applicationStatus)}`}>
                  {company.applicationStatus}
                </span>
              </div>

              <p className={styles.companyDescription}>{company.description}</p>

              <div className={styles.jobOffer}>
                <h4>{company.jobOffer.title}</h4>
                <p>{company.jobOffer.description}</p>
                
                <div className={styles.requirements}>
                  <strong>Key Requirements:</strong>
                  <ul>
                    {company.jobOffer.requirements.map((req, idx) => (
                      <li key={idx}>{req}</li>
                    ))}
                  </ul>
                </div>

                <a 
                  href={company.jobOffer.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.jobLink}
                >
                  <FaExternalLinkAlt /> View Job Posting
                </a>
              </div>

              <div className={styles.documents}>
                <h4>Application Documents:</h4>
                <div className={styles.documentLinks}>
                  <a 
                    href={company.documents.cv} 
                    className={styles.docLink}
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <FaDownload /> CV
                  </a>
                  <a 
                    href={company.documents.coverLetter} 
                    className={styles.docLink}
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <FaDownload /> Cover Letter
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Generic Documents Section */}
      <section className={`${styles.section} ${styles.documentsSection}`}>
        <div className={`${styles.sectionHeader} ${styles.reveal}`} style={{ animationDelay: '0.6s' }}>
          <FaLanguage className={styles.sectionIcon} />
          <h2>Application Documents Library</h2>
        </div>

        <div className={`${styles.genericDocuments} ${styles.reveal}`} style={{ animationDelay: '0.7s' }}>
          <div className={styles.documentHeader}>
            <div className={styles.docIcon}>
              <FaGlobe />
            </div>
            <div>
              <h3>International Application Kit</h3>
              <p>Complete set of documents for various internship applications</p>
            </div>
          </div>

          <div className={styles.documentGrid}>
            <div className={styles.docCategory}>
              <h4>🇺🇸 English Documents</h4>
              <div className={styles.docLinks}>
                <a href={genericDocuments.documents.cvEN} className={styles.docLink} target="_blank" rel="noopener noreferrer">
                  <FaDownload /> International CV (EN)
                </a>
                <a href={genericDocuments.documents.coverLetterEN} className={styles.docLink} target="_blank" rel="noopener noreferrer">
                  <FaDownload /> Generic Cover Letter (EN)
                </a>
              </div>
            </div>

            <div className={styles.docCategory}>
              <h4>🇫🇷 Documents Français</h4>
              <div className={styles.docLinks}>
                <a href={genericDocuments.documents.cvFR} className={styles.docLink} target="_blank" rel="noopener noreferrer">
                  <FaDownload /> CV International (FR)
                </a>
                <a href={genericDocuments.documents.coverLetterFR} className={styles.docLink} target="_blank" rel="noopener noreferrer">
                  <FaDownload /> Lettre de Motivation (FR)
                </a>
              </div>
            </div>

            <div className={styles.docCategory}>
              <h4>📚 Academic & Portfolio</h4>
              <div className={styles.docLinks}>
                <a href={genericDocuments.documents.transcripts} className={styles.docLink} target="_blank" rel="noopener noreferrer">
                  <FaDownload /> Academic Transcripts
                </a>
                <a href={genericDocuments.documents.portfolio} className={styles.docLink} target="_blank" rel="noopener noreferrer">
                  <FaDownload /> Project Portfolio
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`${styles.ctaSection} ${styles.reveal}`} style={{ animationDelay: '0.8s' }}>
        <p>Interested in my professional experience?</p>
        <a href="/career/experience" className={styles.btnPrimary}>
          View Work Experience <span>→</span>
        </a>
      </section>
    </div>
  );
}

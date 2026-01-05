'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import { 
  FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaUniversity, FaLanguage,
  FaLinkedin, FaGithub, FaTwitter, FaWhatsapp, FaTelegram, FaFacebookMessenger 
} from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState(false);

  // Bot Telegram configuration
  const BOT_TOKEN = '8579957769:AAEMZ_f0KD24xN1aETMLVsXHklc6jo9RJI4';
  const CHAT_ID = '5540976506';

  // Contact information
  const contactInfo = {
    title: "Let's Connect",
    description: "Have a project in mind? Let's chat! I would be happy to help you bring it to life.",
    contactDetails: [
      { icon: FaMapMarkerAlt, text: "Toulouse, France" },
      { icon: FaEnvelope, text: "yvesarthur.negoumwouatedem@etu.toulouse-inp.fr" },
      { icon: FaPhoneAlt, text: "+33 7 80 83 23 81" },
      { icon: FaUniversity, text: "TOULOUSE INP-ENSEEIHT" },
      { icon: FaLanguage, text: "French (native), English (in progress)" }
    ],
    socialLinks: [
      { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
      { icon: FaGithub, href: "https://github.com", label: "GitHub" },
      { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
      { icon: FaWhatsapp, href: "https://whatsapp.com", label: "WhatsApp" },
      { icon: FaTelegram, href: "https://telegram.org", label: "Telegram" },
      { icon: FaFacebookMessenger, href: "https://messenger.com", label: "Messenger" }
    ]
  };

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Send the form data to Telegram
  const sendMessageToTelegram = async () => {
    const text = `💬 *New message received from portfolio:*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Subject:* ${formData.subject}\n*Message:* ${formData.message}`;
    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

    try {
      await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: text,
          parse_mode: 'Markdown',
        }),
      });
      setIsSubmitting(false);
      setConfirmationMessage(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => {
        setConfirmationMessage(false);
      }, 5000);

    } catch (error) {
      console.error('Error occurred while sending the message:', error);
      alert('There was an error while sending your message. Please try again later.');
      setIsSubmitting(false);
    }
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    sendMessageToTelegram();
  };

  return (
    <div className={styles.container}>
      <header className={`${styles.header} ${styles.reveal}`}>
        <h1>{contactInfo.title}</h1>
        <p>{contactInfo.description}</p>
      </header>

      <div className={styles.contentGrid}>
        {/* Left Column: Contact Information */}
        <div className={`${styles.infoCard} ${styles.reveal}`} style={{ animationDelay: '0.2s' }}>
          <h2>Contact Me</h2>
          
          {contactInfo.contactDetails.map((detail, index) => {
            const IconComponent = detail.icon;
            return (
              <div key={index} className={styles.infoItem}>
                <IconComponent className={styles.icon} />
                <span>{detail.text}</span>
              </div>
            );
          })}

          <div className={styles.socialRow}>
            {contactInfo.socialLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label={link.label}
                >
                  <IconComponent />
                </a>
              );
            })}
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <form
          className={`${styles.form} ${styles.reveal}`}
          style={{ animationDelay: '0.4s' }}
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className={styles.input}
            value={formData.name}
            onChange={handleInputChange}
            disabled={isSubmitting}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className={styles.input}
            value={formData.email}
            onChange={handleInputChange}
            disabled={isSubmitting}
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className={styles.input}
            value={formData.subject}
            onChange={handleInputChange}
            disabled={isSubmitting}
          />
          <textarea
            name="message"
            placeholder="Message"
            required
            className={styles.textarea}
            value={formData.message}
            onChange={handleInputChange}
            disabled={isSubmitting}
          ></textarea>
          <button
            type="submit"
            className={`${styles.btnSend} ${isSubmitting ? styles.btnDisabled : ''}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>

      {/* Confirmation Message */}
      {confirmationMessage && (
        <div className={`${styles.confirmationMessage} ${styles.reveal}`}>
          <div className={styles.confirmationContent}>
            <span className={styles.checkIcon}>✓</span>
            <div>
              <h3>Message Sent Successfully!</h3>
              <p>Thank you for reaching out. I'll get back to you as soon as possible.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
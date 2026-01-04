"use client";
import Link from "next/link"; // Importation corrigée ici
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const pathname = usePathname();
  const [isEducationOpen, setIsEducationOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { 
      name: "Education", 
      href: "/education",
      hasDropdown: true,
      sublinks: [
        { name: "Academic Background", href: "/education/background" },
        { name: "Academic Projects", href: "/education/projects" }
      ]
    }, 
    { name: "Experience", href: "/career" },
    { name: "Skills & Technologies", href: "/skill" },
    { name: "PPP", href: "/ppp" },    
    { name: "Mobility and Hobbies", href: "/mobility" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image 
          src="/inp-enseeiht-couleur.png" 
          alt="Logo" 
          width={180} 
          height={75} 
          priority
        />
      </div>
      
      <div className={styles.navLinks}>
        {navLinks.map((link) => {
          // Vérifie si le lien est actif ou si on est dans une sous-page
          const isActive = pathname === link.href || 
            (link.href !== "/" && pathname.startsWith(link.href)) ||
            (link.sublinks && link.sublinks.some(sublink => pathname === sublink.href));
          
          if (link.hasDropdown) {
            return (
              <div 
                key={link.name}
                className={styles.dropdown}
                onMouseEnter={() => setIsEducationOpen(true)}
                onMouseLeave={() => setIsEducationOpen(false)}
              >
                <Link 
                  href={link.href}
                  className={`${styles.link} ${isActive ? styles.active : ""} ${styles.dropdownToggle}`}
                >
                  {link.name} ▾
                </Link>
                
                {isEducationOpen && (
                  <div className={styles.dropdownMenu}>
                    {link.sublinks?.map((sublink) => (
                      <Link
                        key={sublink.name}
                        href={sublink.href}
                        className={`${styles.dropdownItem} ${pathname === sublink.href ? styles.activeDropdown : ""}`}
                      >
                        {sublink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          }
          
          return (
            <Link 
              key={link.name} 
              href={link.href}
              className={`${styles.link} ${isActive ? styles.active : ""}`}
            >
              {link.name}
              {(link.name === "Experience" || link.name === "Mobility and Engagement") && " ▾"}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
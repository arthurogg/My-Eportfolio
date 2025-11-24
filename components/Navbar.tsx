import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <h2>MonPortfolio</h2>
      <div className="nav-links">
        <Link href="/">Accueil</Link>
        <Link href="/about">À propos</Link>
        <Link href="/projects">Projets</Link>
        <Link href="/experiences">Expériences</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}

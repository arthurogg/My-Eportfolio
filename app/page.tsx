export default function Home() {
  return (
    <div>
      <h1>Bienvenue, je suis Yves Arthur Negoum</h1>
      <p style={{ fontSize: "19px", maxWidth: "700px", marginTop: "15px" }}>
        Développeur Full Stack passionné par la création d'expériences web modernes,
        performantes et centrées sur l’utilisateur.
      </p>

      <a className="btn" href="/projects">Voir mes projets</a>

      <div style={{ marginTop: "60px" }}>
        <h2>Compétences principales</h2>

        <div className="grid">
          <div className="card">
            <h3>Frontend</h3>
            <p>React, Next.js, HTML, CSS, JavaScript</p>
          </div>
          <div className="card">
            <h3>Backend</h3>
            <p>Node.js, Express, Java, Spring Boot</p>
          </div>
          <div className="card">
            <h3>Base de données</h3>
            <p>MySQL, PostgreSQL, MongoDB</p>
          </div>
        </div>
      </div>
    </div>
  );
}

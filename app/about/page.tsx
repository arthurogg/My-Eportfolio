export default function About() {
  return (
    <div>
      <h1>À propos</h1>

      <div className="card">
        <p style={{ fontSize: "18px" }}>
          Je suis un développeur passionné par la création d’applications modernes,
          performantes et intuitives. Mon objectif est d’allier technique et esthétique
          pour produire des solutions réellement utiles.
        </p>
      </div>

      <h2>Mon parcours</h2>

      <div className="card">
        <ul style={{ fontSize: "17px", lineHeight: "1.8" }}>
          <li>🎓 Diplôme / Formation</li>
          <li>💼 Expérience en développement</li>
          <li>🚀 Projets personnels et professionnels</li>
        </ul>
      </div>
    </div>
  );
}

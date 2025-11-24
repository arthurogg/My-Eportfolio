export default function Contact() {
  return (
    <div>
      <h1>Me contacter</h1>

      <div className="card">
        <form>
          <label>Nom</label>
          <input type="text" placeholder="Votre nom" />

          <label>Email</label>
          <input type="email" placeholder="Votre email" />

          <label>Message</label>
          <textarea rows={6} placeholder="Votre message"></textarea>

          <button className="btn" style={{ marginTop: "20px" }}>
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
}

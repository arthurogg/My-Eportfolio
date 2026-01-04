type Props = {
  title: string;
  description: string;
  image: string;
  repo?: string;
  demo?: string;
};

export default function ProjectCard({ title, description, image, repo, demo }: Props) {
  return (
    <div className="card">
      <img src={image} alt={title} />

      <h3 style={{ marginTop: "15px" }}>{title}</h3>

      <p style={{ marginTop: "10px", color: "#555" }}>{description}</p>

      <div style={{ marginTop: "15px" }}>
        {repo && (
          <a className="btn" href={repo} target="_blank" style={{ marginRight: "10px" }}>
            Code
          </a>
        )}
        {demo && (
          <a className="btn" href={demo} target="_blank">
            Demo
          </a>
        )}
      </div>
    </div>
  );
}

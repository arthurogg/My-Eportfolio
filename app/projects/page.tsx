import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Application E-commerce",
      description: "Site complet avec panier, API et paiement.",
      image: "/proj1.png",
      repo: "https://github.com",
      demo: "#",
    },
    {
      title: "Dashboard Admin",
      description: "Dashboard moderne avec graphiques et analytics.",
      image: "/proj2.png",
      repo: "https://github.com",
      demo: "#",
    },
    {
      title: "App Mobile",
      description: "Application cross-platform développée en React Native.",
      image: "/proj3.png",
      repo: "https://github.com",
      demo: "#",
    },
  ];

  return (
    <div>
      <h1>Mes projets</h1>
      <div className="grid" style={{ marginTop: "30px" }}>
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </div>
  );
}

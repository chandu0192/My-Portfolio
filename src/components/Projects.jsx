import ProjectCard from "./ProjectCard";

export default function Projects({ setActiveProject }) {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <h2 className="text-4xl font-bold mb-12">Projects</h2>
      <div className="grid md:grid-cols-3 gap-10">
        <ProjectCard
          title="E-commerce Frontend"
          img="https://images.unsplash.com/photo-1512436991641-6745cdb1723f"
          desc="Modern e-commerce UI with product listing and cart layout."
          onClick={() => setActiveProject("ecommerce")}
        />

        <ProjectCard
          title="Dashboard Application"
          img="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
          desc="Admin-style dashboard UI inspired by real products."
          onClick={() => setActiveProject("dashboard")}
        />

        <ProjectCard
          title="Smart Portfolio & Resume Builder"
          img="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
          desc="Frontend platform to generate portfolios and resumes."
          onClick={() => setActiveProject("builder")}
        />
      </div>
    </section>
  );
}
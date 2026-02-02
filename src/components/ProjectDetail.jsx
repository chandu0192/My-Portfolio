export default function ProjectDetail({ activeProject, setActiveProject }) {
  return (
    <section className="max-w-5xl mx-auto px-6 py-24">
      <button onClick={() => setActiveProject(null)} className="mb-6 text-neutral-700 dark:text-neutral-300" aria-label="Back to projects">← Back to Projects</button>
      <h2 className="text-4xl font-bold mb-4">{activeProject}</h2>
      <p className="text-neutral-700 dark:text-neutral-300">Frontend-only project built using React & Tailwind.</p>
    </section>
  );
}
import { motion } from "framer-motion";

export default function Skills() {
  const box = "border border-neutral-800 rounded-2xl p-6 hover:-translate-y-2 hover:shadow-xl transition";
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-bold mb-10">Skills</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <motion.div className={box}><h3 className="font-semibold mb-3">Frontend</h3><ul className="text-neutral-500 space-y-2"><li>HTML5</li>
          <li>CSS3</li>
          <li>Advanced CSS (Flexbox, Grid, Animations)</li>
          <li>JavaScript (ES6+)</li>
          <li>Advanced JavaScript (Closures, Async/Await)</li>
          <li>React.js</li>
          <li>Tailwind CSS</li></ul></motion.div>
        <motion.div className={box}><h3 className="font-semibold mb-3">Tools</h3><ul className="text-neutral-500 space-y-2"><li>Git & GitHub</li><li>Vite</li><li>VS Code</li><li>Responsive Design</li></ul></motion.div>
        <motion.div className={box}><h3 className="font-semibold mb-3">Learning</h3><ul className="text-neutral-500 space-y-2"><li>Next.js</li><li>Full Stack</li><li>Clean Architecture</li></ul></motion.div>
      </div>
    </section>
  );
}
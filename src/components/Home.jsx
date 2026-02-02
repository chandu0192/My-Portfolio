import { motion } from "framer-motion";

export default function Home({ setActiveSection }) {
  return (
    <section className="max-w-6xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center">

      {/* 🔥 SEO PRIMARY (hidden, UI unaffected) */}
      <section className="sr-only">
        <h1>Chitransh Sharma – Frontend Developer</h1>
        <p>
          Chitransh Sharma is a frontend developer specializing in React,
          JavaScript, HTML, CSS, and Tailwind CSS. This portfolio showcases
          frontend projects, skills, and experience in modern web development.
        </p>
      </section>
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <motion.h2
          whileHover={{ rotate: -2, scale: 1.03 }}
          whileTap={{ rotate: 2, scale: 0.98 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
          className="text-5xl font-bold mb-4 cursor-pointer"
        >
          Chitransh Sharma
        </motion.h2>
        <motion.p
          whileHover={{ y: -3 }}
          transition={{ duration: 0.3 }}
          className=" mb-6 cursor-pointer"
        >
          BCA Student • Frontend Developer
          Presidency University, Bangalore (2026–2029)
        </motion.p>
        <p className="text-sm  max-w-md mb-6">
          I am Chitransh Sharma, a frontend developer focused on building clean,
          responsive, and interactive user interfaces using React, JavaScript,
          and Tailwind CSS. This portfolio highlights my projects, skills,
          and learning journey as a frontend developer.
        </p>

        <div className="flex gap-4">
          <motion.button whileHover={{ scale: 1.08 }} className="px-6 py-3 bg-indigo-600 text-white rounded-xl" onClick={() => setActiveSection('projects')} aria-label="View my projects">View My Projects</motion.button>
          <button onClick={() => setActiveSection('hire')} className="px-6 py-3 border border-indigo-600 text-indigo-500 rounded-xl hover:bg-indigo-700 hover:text-white transition" aria-label="Open hire section">Hire Me</button>
        </div>
      </motion.div>

      <div className="flex justify-center md:justify-end">
        <div className="flex justify-center md:justify-end">
          <img
            src="/myphoto.jpeg"
            alt="Portrait of Chitransh Sharma"
            width="340"
            height="420"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="h-[420px] object-cover object-top rounded-3xl shadow-2xl ring-2 ring-indigo-500"
          />


        </div>

      </div>

    </section>
  );
}

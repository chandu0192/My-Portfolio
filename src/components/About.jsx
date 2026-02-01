import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="max-w-6xl mx-auto px-6 py-24">
      {/* 🔥 SEO STATIC BACKUP (TOP = yahin) */}
      <p className="sr-only">
        I am Chitransh Sharma, a BCA student at Presidency University Bangalore
        (2026–2029) and a frontend developer skilled in React, JavaScript,
        HTML, CSS, and Tailwind CSS. I focus on building clean, responsive,
        and modern user interfaces.
      </p>
      <h2 className="text-3xl font-bold mb-6">About Me</h2>
      <p className="muted-text max-w-3xl text-lg">
        <Typewriter words={["I am a BCA student at Presidency University, Bangalore (2026–2029 batch) and a new freelance frontend developer.", "I have been learning frontend development for the past 5 months and have built multiple UI-focused projects including an e-commerce frontend, dashboard layouts, and a smart portfolio builder.", "As a freelancer, I focus on creating clean, responsive, and modern user interfaces using React and Tailwind CSS."]} loop cursor cursorStyle="|" typeSpeed={50} deleteSpeed={10} delaySpeed={3000} />
      </p>
    </motion.section>
  );
}
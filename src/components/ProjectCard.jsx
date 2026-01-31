import { motion } from "framer-motion";

export default function ProjectCard({ title, img, desc, onClick }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} onClick={onClick} className="cursor-pointer border border-neutral-800 rounded-2xl p-6 hover:shadow-xl transition">
      {img && (
        <img src={img} alt={title} className="w-full h-40 object-cover rounded-md mb-4" />
      )}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="muted-text text-sm">{desc ?? 'Modern frontend UI project built using React.'}</p>
    </motion.div>
  );
}
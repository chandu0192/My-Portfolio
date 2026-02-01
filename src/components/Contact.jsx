import { FaGithub, FaLinkedin, FaInstagram, FaTelegram, FaTwitter, FaPhone, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto px-6 py-24"
    >
      <h2 className="text-4xl font-bold mb-6">Contact</h2>

      <p className="muted-text mb-10 max-w-2xl">
        Want to work together or hire me for a frontend project? You can reach out to me directly.
      </p>

      <div className="flex gap-8 items-center text-3xl muted-text">
        <a href="https://github.com/chandu0192?text=Hi%20I%20saw%20your%20portfolio%20and%20want%20to%20talk" target="_blank" className="hover:text-indigo-400 hover:scale-130 transition"><FaGithub /></a>
        <a href="https://linkedin.com/in/chitransh-sharma-93997a383?text=Hi%20I%20saw%20your%20portfolio%20and%20want%20to%20talk" target="_blank" className="hover:text-indigo-400 hover:scale-130 transition"><FaLinkedin /></a>
        <a href="https://instagram.com/ig_chitransh.2007" target="_blank" className="hover:text-indigo-400 hover:scale-130 transition"><FaInstagram /></a>
        <a href="https://twitter.com/Chitransh8918?text=Hi%20I%20saw%20your%20portfolio%20and%20want%20to%20talk" target="_blank" className="hover:text-indigo-400 hover:scale-130 transition"><FaTwitter /></a>
        <a href="https://wa.me/919216533729?text=Hi%20I%20saw%20your%20portfolio%20and%20want%20to%20talk" target="_blank" className="hover:text-indigo-400 hover:scale-130 transition"><FaWhatsapp /></a>
        <a href="https://t.me/freelancechitransh?text=Hi%20I%20saw%20your%20portfolio%20and%20want%20to%20talk" target="_blank" className="hover:text-indigo-400 hover:scale-130 transition"><FaTelegram /></a>
      </div>

      <div className="flex items-center gap-3 mt-8 muted-text">
        <FaPhone />
        <span>+91 9216533729</span>
      </div>
    </motion.section>
  );
}
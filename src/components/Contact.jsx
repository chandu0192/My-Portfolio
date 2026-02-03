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
      <h2 className="text-4xl font-bold mb-6">Contact US</h2>

      <p className="text-neutral-500 mb-10 max-w-2xl">
        Want to work together or hire me for a frontend project? You can reach out to me directly.
      </p>

      {/* <div className="flex gap-8 items-center text-3xl muted-text"> */}
      <address className="not-italic flex gap-8 items-center text-3xl text-neutral-500">
        <a
          href="https://github.com/chandu0192"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub profile"
          className="hover:text-indigo-400 hover:scale-110 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-500"
        >
          <FaGithub />
        </a>

        <a href="https://linkedin.com/in/chitransh-sharma-93997a383" target="_blank" aria-label="LinkedIn profile" rel="noreferrer" className="hover:text-indigo-400 hover:scale-110 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-500"><FaLinkedin /></a>
        <a href="https://instagram.com/ig_chitransh.2007" target="_blank" aria-label="Instagram profile" rel="noreferrer" className="hover:text-indigo-400 hover:scale-110 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-500"><FaInstagram /></a>
        <a href="https://twitter.com/Chitransh8918/intent/tweet?text=Hi%20I%20saw%20your%20portfolio%0Ahttps://www.chitranshdev.in%0Aand%20want%20to%20talk" target="_blank" aria-label="Twitter profile" rel="noreferrer" className="hover:text-indigo-400 hover:scale-110 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-500"><FaTwitter /></a>
        <a href="https://wa.me/919216533729?text=Hi%20I%20saw%20your%20portfolio%0Ahttps://www.chitranshdev.in%0Aand%20want%20to%20talk" target="_blank" aria-label="WhatsApp profile" rel="noreferrer" className="hover:text-indigo-400 hover:scale-110 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-500"><FaWhatsapp /></a>
        <a href="https://t.me/freelancechitransh?text=Hi%20I%20saw%20your%20portfolio%0Ahttps://www.chitranshdev.in%0Aand%20want%20to%20talk" target="_blank" aria-label="Telegram profile" rel="noreferrer" className="hover:text-indigo-400 hover:scale-110 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-500"><FaTelegram /></a>
        {/* </div> */}
      </address>

      <div className="flex items-center gap-3 mt-8 text-neutral-500">
        <FaPhone />
        <a href="tel:+919216533729" aria-label="Call +91 9216533729">+91 9216533729</a>
      </div>
    </motion.section>
  );
}
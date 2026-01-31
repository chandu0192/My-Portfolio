// import { FiMoon, FiSun } from "react-icons/fi";
// import { motion } from "framer-motion";

// export default function Navbar({ theme, setTheme, setActiveSection, setActiveProject }) {
//   const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

//   return (
//     <header className="sticky top-0 z-50 border-b border-neutral-800 backdrop-blur">
//       <nav className="max-w-6xl mx-auto flex justify-between items-center px-6 py-3">
//         <motion.div whileHover={{ scale: 1.05 }} className="flex items-center cursor-pointer" onClick={() => { setActiveSection("home"); setActiveProject(null); }}>
//           <img src="/logo9.png" className="w-14 h-12 -mr-4" />
//           <span className="font-bold bg-gradient-to-r from-[#4FACFE] to-[#00F2FE] bg-clip-text text-transparent ml-2">My-Portfolio</span>
//         </motion.div>

//         <div className="flex gap-6 items-center text-sm">
//           {['home', 'projects', 'hire'].map(link => (
//             <button key={link} onClick={() => setActiveSection(link)} className="hover:text-indigo-400 transition capitalize">{link}</button>
//           ))}
//           <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-neutral-200/20">{theme === "dark" ? <FiSun /> : <FiMoon />}</button>
//         </div>
//       </nav>
//     </header>
//   );
// }

import { FiMoon, FiSun } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Navbar({
  theme,
  setTheme,
  setActiveSection,
  setActiveProject,
}) {
  const toggleTheme = () =>
    setTheme(theme === "dark" ? "light" : "dark");

  const goSection = (sec) => {
    setActiveSection(sec);
    setActiveProject(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-800 backdrop-blur">
      <nav className="max-w-6xl mx-auto flex justify-between items-center px-4 sm:px-6 py-3">

        {/* LEFT — LOGO */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center cursor-pointer gap-1"
          onClick={() => {
            setActiveSection("home");
            setActiveProject(null);
          }}
        >
          <img
            src="/logo.png"
            className="h-9 w-auto object-contain -mr-3"
          />

          <span className="whitespace-nowrap font-bold text-sm sm:text-base bg-gradient-to-r from-[#4FACFE] to-[#00F2FE] bg-clip-text text-transparent leading-none">
            My-Portfolio
          </span>
        </motion.div>




        {/* RIGHT — LINKS */}
        <div className="flex items-center gap-3 sm:gap-6 text-xs sm:text-sm">

          <button
            onClick={() => goSection("home")}
            className="hover:text-indigo-400 transition"
          >
            Home
          </button>

          <button
            onClick={() => goSection("projects")}
            className="hover:text-indigo-400 transition"
          >
            Projects
          </button>

          <button
            onClick={() => goSection("hire")}
            className="hover:text-indigo-400 transition"
          >
            Hire
          </button>

          {/* THEME */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-neutral-200/20"
          >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>
        </div>
      </nav>
    </header>
  );
}

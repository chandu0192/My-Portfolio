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
          role="button"
          aria-label="Go to homepage"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " " || e.key === "Spacebar") {
              e.preventDefault();
              setActiveSection("home");
              setActiveProject(null);
            }
          }}
        >
          <img
            src="/logo.png"
            alt="My-Portfolio logo"
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
            aria-label="Go to Home section"
          >
            Home
          </button>

          <button
            onClick={() => goSection("projects")}
            className="hover:text-indigo-400 transition"
            aria-label="Go to Projects section"
          >
            Projects
          </button>

          <button
            onClick={() => goSection("hire")}
            className="hover:text-indigo-400 transition"
            aria-label="Go to Hire section"
          >
            Hire
          </button>

          {/* THEME */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-neutral-200/20"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>
        </div>
      </nav>
    </header>
  );
}

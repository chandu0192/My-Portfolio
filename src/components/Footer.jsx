export default function Footer({ setActiveSection }) {
  return (
    <footer className="border-t border-neutral-800 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">

        {/* BRAND */}
        <div>
          <h3 className="text-xl font-bold mb-3">Chitransh Sharma</h3>
          <p className="text-neutral-500 text-sm leading-relaxed">
            Frontend Developer & New Freelancer building clean,
            responsive, and modern web interfaces using React
            and Tailwind CSS.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-neutral-500 text-sm">
            <li
              className="hover:text-indigo-400 cursor-pointer"
              onClick={() => setActiveSection("home")}
              role="button"
              tabIndex={0}
              aria-label="Go to Home section"
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') { e.preventDefault(); setActiveSection("home"); } }}
            >
              Home
            </li>
            <li
              className="hover:text-indigo-400 cursor-pointer"
              onClick={() => setActiveSection("projects")}
              role="button"
              tabIndex={0}
              aria-label="Go to Projects section"
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') { e.preventDefault(); setActiveSection("projects"); } }}
            >
              Projects
            </li>
            <li
              className="hover:text-indigo-400 cursor-pointer"
              onClick={() => setActiveSection("hire")}
              role="button"
              tabIndex={0}
              aria-label="Go to Hire section"
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') { e.preventDefault(); setActiveSection("hire"); } }}
            >
              Hire Me
            </li>
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <p className="text-neutral-500 text-sm mb-2">📍 Bangalore, India</p>
          <p className="text-neutral-500 text-sm">📞 +91 9216533729</p>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-neutral-800 py-4 text-center text-xs text-neutral-600 dark:text-neutral-300">
        © {new Date().getFullYear()} Chitransh Sharma. All rights reserved.
      </div>
    </footer>
  );
}

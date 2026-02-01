import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Hire() {
  const [activeService, setActiveService] = useState(null);

  // ✅ auto scroll to detail on mobile
  const detailsRef = useRef(null);

  const scrollToDetails = () => {
    setTimeout(() => {
      if (!detailsRef.current) return;

      const y =
        detailsRef.current.getBoundingClientRect().top +
        window.pageYOffset -
        100; // 🔥 navbar offset adjust here

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }, 80);
  };


  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <h2 className="text-4xl font-bold mb-6">Hire Me</h2>

      <p className="text-neutral-600 dark:text-neutral-400 max-w-3xl mb-12">
        I am available for frontend freelance work. I specialize in
        building clean, responsive, and modern user interfaces using
        React and Tailwind CSS.
      </p>

      {/* SERVICES */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <ServiceCard
          title="Landing Page"
          price="₹2,500 – ₹5,000"
          img="https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800"
          onClick={() => {
            setActiveService("landing");
            scrollToDetails();
          }}

        />
        <ServiceCard
          title="Business Website"
          price="₹6,000 – ₹10,000"
          img="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800"
          onClick={() => {
            setActiveService("business");
            scrollToDetails();
          }}
        />
        <ServiceCard
          title="React Frontend"
          price="₹10,000 – ₹20,000"
          img="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800"
          onClick={() => {
            setActiveService("react");
            scrollToDetails();
          }}
        />
      </div>

      {/* DETAILS */}
      <AnimatePresence>
        {activeService && (
          <motion.div
            ref={detailsRef}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.25 }}
            className="
              rounded-2xl p-8
              bg-white dark:bg-transparent
              border border-neutral-300 dark:border-neutral-700
              hover:shadow-xl transition
            "
          >
            <ServiceDetails type={activeService} />

            <div className="flex gap-4 mt-8 flex-wrap">
              <a
                href="https://t.me/freelancechitransh?text=Hi%20I%20saw%20your%20portfolio%20and%20want%20to%20talk"
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl"
              >
                Telegram Me
              </a>

              <a
                href="mailto:sharmachitransh221@gmail.com?text=Hi%20I%20saw%20your%20portfolio%20and%20want%20to%20talk"
                className="px-6 py-3 border border-indigo-500 text-indigo-500 rounded-xl hover:bg-indigo-500 hover:text-white transition"
              >
                Email Me
              </a>

              <a href="https://wa.me/919216533729?text=Hi%20I%20saw%20your%20portfolio%20and%20want%20to%20talk" target="_blank" rel="noopener noreferrer" className="px-6 py-3 text-white rounded-xl flex items-center gap-2 bg-[#22c55e] hover:bg-[#16a34a]">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" width="20" height="20" />
                WhatsApp Me
              </a>

              <button
                onClick={() => setActiveService(null)}
                className="px-6 py-3 border border-neutral-700 rounded-xl"
              >
                Close
              </button>
              <a
                href="tel:+919216533729"
                className="text-sm underline underline-offset-4 mt-6 block"
              >
                Prefer a quick call?
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* ---------- CARD ---------- */

function ServiceCard({ title, price, img, onClick }) {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      className="
        cursor-pointer overflow-hidden rounded-2xl
        bg-white dark:bg-transparent
        border border-neutral-300 dark:border-neutral-700
        hover:shadow-xl transition
      "
    >
      <img src={img} className="h-40 w-full object-cover" />

      <div className="p-6">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-indigo-500">{price}</p>
        <p className="text-sm text-neutral-500 mt-1">
          Click to see full details
        </p>
      </div>
    </motion.div>
  );
}

/* ---------- DETAILS ---------- */


function ServiceDetails({ type }) {
  const base = "space-y-2 text-neutral-600 dark:text-neutral-500";

  if (type === "landing")
    return (
      <>
        <h3 className="text-2xl font-semibold mb-4">Landing Page</h3>
        <ul className={base}>
          <li>• Single-page modern UI</li>
          <li>• Fully responsive</li>
          <li>• SEO friendly</li>
          <li>• Delivery: 2–4 days</li>
        </ul>
      </>
    );

  if (type === "business")
    return (
      <>
        <h3 className="text-2xl font-semibold mb-4">Business Website</h3>
        <ul className={base}>
          <li>• Multi-section layout</li>
          <li>• Professional design</li>
          <li>• Contact sections</li>
          <li>• Delivery: 5–7 days</li>
        </ul>
      </>
    );

  if (type === "react")
    return (
      <>
        <h3 className="text-2xl font-semibold mb-4">React Frontend</h3>
        <ul className={base}>
          <li>• Custom React UI</li>
          <li>• Component-based</li>
          <li>• API ready</li>
          <li>• Delivery: scope based</li>
        </ul>
      </>
    );
  return null;
}
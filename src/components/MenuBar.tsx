"use client"
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const sections = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
];

export default function MenuBar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // 100px offset for navbar height
      let current = sections[0].id;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el && el.offsetTop <= scrollPosition) {
          current = section.id;
        }
      }
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // set on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 flex flex-col items-center">
      <div className="flex items-center bg-white/40 border-2 border-black rounded-full shadow-xl px-4 py-2 space-x-2 font-jetbrains-mono backdrop-blur-md relative z-10">
        {/* Navigation Tabs */}
        <div className="flex space-x-2">
          {sections.map((section) => {
            const isActive = active === section.id;
            return (
              <div key={section.id} className="relative">
                <a
                  href={`#${section.id}`}
                  className={`px-5 py-2 rounded-full font-bold transition-colors relative z-10 ${
                    isActive
                      ? "text-white"
                      : "text-black hover:text-gray-700"
                  }`}
                  style={{ letterSpacing: "0.01em" }}
                >
                  {section.label}
                </a>
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      layoutId="tab-highlight"
                      className="absolute inset-0 rounded-full bg-black z-0"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
        {/* Social Icons */}
        <div className="flex items-center space-x-3 ml-4">
          <a href="https://github.com/mzhang055" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub className="w-6 h-6 text-black hover:text-gray-700 transition-colors" />
          </a>
          <a href="https://linkedin.com/in/mzhang055" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="w-6 h-6 text-blue-700 hover:text-blue-900 transition-colors" />
          </a>
          <a href="https://x.com/michellexyzhang" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
            <FaXTwitter className="w-6 h-6 text-black hover:text-gray-700 transition-colors" />
          </a>
        </div>
      </div>
    </div>
  );
} 
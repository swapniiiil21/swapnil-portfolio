"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const PROJECTS = [
  {
    title: "Retail Operations Intelligence Platform",
    description: "AI-powered analytics platform analyzing sales, inventory, and operational data.",
    features: [
      "End-to-end data analytics pipeline",
      "Exploratory data analysis (EDA)",
      "Customer segmentation using RFM models",
      "Time-series demand forecasting",
      "Interactive visualizations"
    ],
    tech: ["Python", "Pandas", "SQL", "Plotly", "Machine Learning"],
    github: "https://github.com/swapniiiil21/Retail-Operations-Intelligence-Platform",
    demo: "#"
  },
  {
    title: "Sophia AI Desktop Voice Assistant",
    description: "AI voice assistant built using Python and NLP models.",
    features: [
      "Voice command automation",
      "Face recognition login",
      "NLP conversational assistant",
      "Desktop automation and system control",
      "SQLite-based local storage"
    ],
    tech: ["Python", "NLP", "Gemini API", "HuggingFace", "Eel", "SQLite"],
    github: "https://github.com/swapniiiil21/Sophia-AI-Desktop-Voice-Assistant",
    demo: "#"
  },
  {
    title: "VIT Smart Shuttle System",
    description: "Real-time shuttle booking and tracking platform for university campus.",
    features: [
      "Real-time shuttle location tracking",
      "Predictive arrival time estimation",
      "Interactive map visualization",
      "Data analytics dashboards"
    ],
    tech: ["Python", "Machine Learning", "Leaflet.js", "Firebase", "Firestore"],
    github: "https://github.com/swapniiiil21/VIT-Smart-Shuttle-System",
    demo: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-black text-white relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight text-white/90">
            Featured Work
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative bg-white/[0.03] border border-white/10 rounded-3xl p-8 flex flex-col h-full hover:bg-white/[0.05] transition-all duration-300"
              >
                {/* Decorative glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl -z-10" />

                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-4 tracking-tight group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-6 font-light leading-relaxed">
                    {project.description}
                  </p>

                  <ul className="mb-6 space-y-2">
                    {project.features.map((feature, fIdx) => (
                      <li key={fIdx} className="text-sm text-gray-300 flex items-start">
                        <span className="text-blue-500/70 mr-2">✦</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mb-8 mt-auto px-1 py-1">
                    {project.tech.map((tag, tIdx) => (
                      <span key={tIdx} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-gray-300 tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/10">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span>Source</span>
                  </a>
                  <a
                    href={project.demo}  
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors ml-auto"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

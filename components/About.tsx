"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="min-h-screen py-24 flex items-center bg-black text-white relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
            Building Intelligence From Data
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Bio Text */}
            <div className="space-y-6 text-xl text-gray-300 leading-relaxed font-light">
              <p>
                <strong className="text-white font-medium">Swapnil N Chavan</strong> is an AI Engineer and Data Scientist 
                currently pursuing an M.Sc in Data Science at VIT Vellore.
              </p>
              <p>
                He specializes in machine learning, data analytics, and intelligent system design. 
                With industry experience supporting large-scale retail systems across 50+ stores in the US and Canada, 
                he focuses on turning complex operational data into actionable insights.
              </p>
              <p>
                His expertise spans the entire data pipeline from data extraction and cleaning to predictive modeling 
                and visualization.
              </p>
            </div>

            {/* Highlights Card (Glassmorphism) */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-xl shadow-2xl">
              <h3 className="text-2xl font-medium mb-6 text-white tracking-wide">Key Highlights</h3>
              <ul className="space-y-4">
                {[
                  "2+ years industry experience",
                  "Supported analytics for 50+ international retail stores",
                  "Built multiple AI and machine learning projects",
                  "Passionate about building real-world AI applications"
                ].map((highlight, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + idx * 0.1, duration: 0.5 }}
                    className="flex items-start text-gray-300"
                  >
                    <span className="mr-4 text-blue-400 mt-1">✦</span>
                    <span className="text-lg">{highlight}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

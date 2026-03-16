"use client";

import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-zinc-950 text-white relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight text-white/90">
            Professional Experience
          </h2>

          <div className="relative pl-8 md:pl-0">
            {/* Vertical Timeline Line */}
            <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-white/10 -translate-x-[0.5px]"></div>
            
            {/* Timeline Item */}
            <div className="relative flex flex-col md:flex-row items-center justify-between w-full mb-12">
              
              {/* Timeline dot */}
              <div className="absolute left-[-37px] md:left-[50%] w-4 h-4 bg-blue-500 rounded-full md:-translate-x-1/2 mt-1.5 md:mt-0 shadow-[0_0_15px_rgba(59,130,246,0.5)] z-10" />

              <div className="md:w-[45%] w-full mb-4 md:mb-0 text-left md:text-right pr-0 md:pr-12">
                <h3 className="text-2xl font-semibold tracking-wide text-white">Systems Analyst</h3>
                <h4 className="text-xl text-blue-400 mt-1">Systems Plus Pvt Ltd</h4>
                <div className="text-gray-400 mt-2 font-mono text-sm tracking-widest uppercase">
                  Pune, India • Oct 2022 – Jul 2024
                </div>
              </div>

              <div className="md:w-[45%] w-full pl-0 md:pl-12">
                <div className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-2xl backdrop-blur-md hover:bg-white/[0.07] transition-colors">
                  <ul className="space-y-3 text-gray-300 font-light list-none">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-3 mt-1 text-sm">▹</span>
                      Supported Oracle Retail POS systems across 50+ US and Canada stores
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-3 mt-1 text-sm">▹</span>
                      Performed SQL-based analysis of operational datasets
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-3 mt-1 text-sm">▹</span>
                      Built KPI dashboards and analytical reports
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-3 mt-1 text-sm">▹</span>
                      Reduced reconciliation and posting errors by 30%
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-3 mt-1 text-sm">▹</span>
                      Troubleshot enterprise retail infrastructure issues
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-3 mt-1 text-sm">▹</span>
                      Delivered insights for brands including Brooks Brothers and Lucky Brand
                    </li>
                  </ul>
                </div>
              </div>
              
            </div>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
}

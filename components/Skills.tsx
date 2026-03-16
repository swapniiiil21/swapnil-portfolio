"use client";

import { motion } from "framer-motion";

const SKILLS = [
  {
    category: "Programming",
    items: ["Python", "SQL"]
  },
  {
    category: "ML & AI Libraries",
    items: ["Pandas", "NumPy", "Scikit-learn", "TensorFlow", "spaCy", "Transformers", "LangChain", "HuggingFace"]
  },
  {
    category: "Data & BI Tools",
    items: ["Tableau", "Power BI", "Excel", "Plotly"]
  },
  {
    category: "Cloud & Services",
    items: ["AWS S3", "AWS Lambda", "AWS Bedrock", "Firebase"]
  },
  {
    category: "Concepts",
    items: ["EDA", "Machine Learning", "Deep Learning", "Predictive Modeling", "Time Series Forecasting", "Statistical Modeling"]
  },
  {
    category: "Generative AI",
    items: ["Prompt Engineering", "RAG", "Fine-tuning", "OpenAI API", "Gemini API", "Vector Databases"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-zinc-950 text-white relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight text-white/90">
            Technical Arsenal
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SKILLS.map((skillGroup, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white/[0.02] border border-white/[0.05] rounded-3xl p-8 hover:bg-white/[0.04] transition-colors"
              >
                <h3 className="text-xl font-medium mb-6 text-white tracking-wide border-b border-white/10 pb-4">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((item, iIdx) => (
                    <span
                      key={iIdx}
                      className="px-4 py-2 bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-full text-sm text-blue-200 border border-blue-500/20 shadow-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-black text-white relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Info */}
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
                Let&apos;s Work Together
              </h2>
              <p className="text-xl text-gray-400 mb-12 font-light">
                Open to Data Science, AI Engineering, and Analytics roles.
              </p>

              <div className="space-y-6">
                <a href="mailto:swapnilchavan211101@gmail.com" className="flex items-center text-gray-300 hover:text-white transition-colors group">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mr-6 group-hover:bg-blue-500/20 transition-colors">
                    <Mail className="w-5 h-5 text-blue-400" />
                  </div>
                  <span className="text-lg">swapnilchavan211101@gmail.com</span>
                </a>
                
                <a href="tel:+919834453676" className="flex items-center text-gray-300 hover:text-white transition-colors group">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mr-6 group-hover:bg-blue-500/20 transition-colors">
                    <Phone className="w-5 h-5 text-blue-400" />
                  </div>
                  <span className="text-lg">+91 98344 53676</span>
                </a>

                <a href="https://www.linkedin.com/in/swapnil-chavan-30033015a/" target="_blank" rel="noreferrer" className="flex items-center text-gray-300 hover:text-white transition-colors group">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mr-6 group-hover:bg-blue-500/20 transition-colors">
                    <Linkedin className="w-5 h-5 text-blue-400" />
                  </div>
                  <span className="text-lg">LinkedIn Profile</span>
                </a>

                <a href="https://github.com/swapniiiil21" target="_blank" rel="noreferrer" className="flex items-center text-gray-300 hover:text-white transition-colors group">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mr-6 group-hover:bg-blue-500/20 transition-colors">
                    <Github className="w-5 h-5 text-blue-400" />
                  </div>
                  <span className="text-lg">GitHub Profile</span>
                </a>
              </div>
            </div>

            {/* Right Form UI */}
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 backdrop-blur-md">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all placeholder:text-gray-600"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all placeholder:text-gray-600"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                  <textarea 
                    id="message"
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all placeholder:text-gray-600 resize-none"
                    placeholder="Hello, I'd like to talk about..."
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-4 rounded-xl transition-colors mt-4"
                >
                  Send Message
                </button>
              </form>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}

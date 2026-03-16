import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Swapnil Chavan | AI Engineer & Data Scientist",
  description: "Portfolio of Swapnil N Chavan, AI Engineer and Data Scientist specializing in Machine Learning, Data Analytics, and Intelligent System Design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="antialiased bg-black text-white min-h-screen selection:bg-blue-500/30">
        
        {/* Sticky Global Navbar */}
        <nav className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-xl border-b border-white/5 transition-all">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            <a href="#" className="font-bold text-xl tracking-tight hover:text-blue-400 transition-colors">
              SC.
            </a>
            
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400 font-mono">
              <a href="#about" className="hover:text-white transition-colors">About</a>
              <a href="#experience" className="hover:text-white transition-colors">Experience</a>
              <a href="#projects" className="hover:text-white transition-colors">Projects</a>
              <a href="#skills" className="hover:text-white transition-colors">Skills</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </div>
            
            {/* Mobile menu could be added here, but hidden md+ is fine for now */}
            <a href="#contact" className="md:hidden text-sm uppercase tracking-wider font-semibold">Menu</a>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}

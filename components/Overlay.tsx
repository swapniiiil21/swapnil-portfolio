"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

export default function Overlay({ progress }: { progress: MotionValue<number> }) {
  // 0% Section
  const opacity1 = useTransform(progress, [0, 0.15, 0.25], [1, 1, 0]);
  const y1 = useTransform(progress, [0, 0.25], [0, -50]);

  // 30% Section
  const opacity2 = useTransform(progress, [0.2, 0.3, 0.45, 0.55], [0, 1, 1, 0]);
  const x2 = useTransform(progress, [0.2, 0.3], [-50, 0]);

  // 60% Section
  const opacity3 = useTransform(progress, [0.5, 0.6, 0.8, 0.9], [0, 1, 1, 0]);
  const x3 = useTransform(progress, [0.5, 0.6], [50, 0]);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none text-white overflow-hidden">
      
      {/* 0% Scroll - Center */}
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 drop-shadow-2xl">
          Swapnil Chavan
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-xl drop-shadow-md">
          AI Engineer & Data Scientist
        </p>
      </motion.div>

      {/* 30% Scroll - Left */}
      <motion.div
        style={{ opacity: opacity2, x: x2 }}
        className="absolute inset-0 flex flex-col items-start justify-center p-8 md:p-24 max-w-3xl"
      >
        <h2 className="text-3xl md:text-5xl font-semibold leading-tight drop-shadow-2xl">
          I build intelligent systems using machine learning, data science, and AI.
        </h2>
      </motion.div>

      {/* 60% Scroll - Right */}
      <motion.div
        style={{ opacity: opacity3, x: x3 }}
        className="absolute inset-0 flex flex-col items-end justify-center p-8 md:p-24 text-right w-full"
      >
        <div className="max-w-2xl ml-auto">
          <h2 className="text-3xl md:text-5xl font-semibold leading-tight drop-shadow-2xl">
            Transforming data into impactful digital solutions.
          </h2>
        </div>
      </motion.div>

    </div>
  );
}

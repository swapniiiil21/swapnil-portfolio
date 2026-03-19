"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import Overlay from "./Overlay";

const FRAME_COUNT = 120;

function currentFrame(index: number) {
  return `/sequence/frame_${index.toString().padStart(3, "0")}_delay-0.066s.jpg`;
}

export default function ScrollyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      img.onload = () => {
        loadedCount++;
        
        // Draw the first frame immediately
        if (i === 0) {
          drawFrame(0, loadedImages);
        }

        if (loadedCount === FRAME_COUNT) {
          setImages(loadedImages);
        }
      };
      loadedImages.push(img);
    }
  }, []);

  // Update canvas size on resize
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        // re-draw current frame
        if (images.length === FRAME_COUNT) {
          const currentProgress = scrollYProgress.get();
          const frameIndex = Math.min(
            FRAME_COUNT - 1,
            Math.floor(currentProgress * FRAME_COUNT)
          );
          drawFrame(frameIndex, images);
        }
      }
    };
    
    window.addEventListener("resize", handleResize);
    handleResize(); // initial set
    
    return () => window.removeEventListener("resize", handleResize);
  }, [images, scrollYProgress]);

  const drawFrame = (index: number, imgs: HTMLImageElement[]) => {
    if (!canvasRef.current || imgs.length === 0) return;
    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;

    const img = imgs[index];
    if (!img) return;

    const canvas = canvasRef.current;
    
    // Scale image to cover the canvas (object-fit: cover equivalent)
    const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
    const x = canvas.width / 2 - (img.width / 2) * scale;
    const y = canvas.height / 2 - (img.height / 2) * scale;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
  };

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (images.length < FRAME_COUNT) return;
    
    // map scroll progress 0-1 to frame index 0-119
    const frameIndex = Math.min(
      FRAME_COUNT - 1,
      Math.floor(latest * FRAME_COUNT)
    );
    
    // Optimize redraw using requestAnimationFrame could be added,
    // but canvas drawing for simple images is usually fast enough if preloaded.
    drawFrame(frameIndex, images);
  });

  return (
    <div ref={containerRef} className="relative h-[500vh] w-full bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full object-cover" />
        <Overlay progress={scrollYProgress} />
      </div>
    </div>
  );
}

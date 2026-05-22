"use client";

import { useRef, useEffect, useState } from "react";

export default function TextReveal() {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Scroll listener to calculate progress exactly within the section
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Calculate how far the section has scrolled through the viewport
      // The scroll starts when the top of the container enters the viewport,
      // and ends when the bottom of the container leaves the viewport.
      const totalScrollableDistance = rect.height;
      const currentScrollPosition = -rect.top;
      
      // We normalize the scroll progress between 0 and 1
      const progress = Math.min(
        Math.max(currentScrollPosition / (totalScrollableDistance - viewportHeight), 0),
        1
      );
      
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Text copy adapted to ScrollTask (doomscrolling to active productivity focus)
  const words = [
    "Your", "mind’s", "tired,", 
    "your", "body’s", "still.", 
    "Hours", "of", "scrolling", 
    "drain", "more", "than", 
    "just", "time.", 
    "Turn", "it", "into", "progress", "—", 
    "focus", "before", "you", "scroll."
  ];

  return (
    <div 
      ref={containerRef} 
      style={{
        position: "relative",
        height: "220vh", // Generates enough scroll depth for comfortable progress
        background: "#000000",
        zIndex: 6,
        overflow: "visible",
      }}
    >
      {/* Sticky viewport container */}
      <div style={{
        position: "sticky",
        top: 0,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}>
        {/* Stellar Background Star Dots (Matching the screenshot's space aesthetic) */}
        <div style={starDotStyle(10, "15%", "25%", "0.4s")} />
        <div style={starDotStyle(12, "85%", "15%", "1.2s")} />
        <div style={starDotStyle(8, "30%", "70%", "0.8s")} />
        <div style={starDotStyle(15, "75%", "80%", "2.0s")} />
        <div style={starDotStyle(6, "20%", "45%", "1.5s")} />
        <div style={starDotStyle(11, "80%", "55%", "0.5s")} />
        <div style={starDotStyle(9, "50%", "15%", "2.3s")} />
        <div style={starDotStyle(14, "40%", "85%", "1.7s")} />

        <div className="container" style={{
          padding: "0 24px",
          maxWidth: "1000px",
          textAlign: "center"
        }}>
          
          <h2 style={{
            fontSize: "clamp(28px, 5.5vw, 56px)",
            fontWeight: 800,
            lineHeight: 1.25,
            color: "rgba(255, 255, 255, 0.15)", // Default dim color
            letterSpacing: "-1.5px",
            textAlign: "center",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "10px 14px",
            margin: "0 auto",
            maxWidth: "920px"
          }}>
            {words.map((word, index) => {
              // Calculate word-level activation progress
              // We divide the overall progress bar into N segments
              const totalWords = words.length;
              const wordStartThreshold = index / totalWords;
              const wordActiveInterval = 1 / totalWords;
              
              // Local progress for this specific word (from 0 to 1)
              const localWordProgress = Math.min(
                Math.max((scrollProgress - wordStartThreshold) / wordActiveInterval, 0),
                1
              );
              
              // Interpolate opacity between 0.15 (inactive) and 1.0 (fully active)
              const wordOpacity = 0.15 + (0.85 * localWordProgress);
              
              // Interpolate scale for subtle breathing/activate effect
              const wordScale = 0.98 + (0.02 * localWordProgress);

              // Highlight key action words in blue/mint gradient when active
              const isActionWord = ["progress", "focus", "scroll."].includes(word.toLowerCase());
              
              return (
                <span 
                  key={index} 
                  style={{
                    opacity: wordOpacity,
                    transform: `scale(${wordScale})`,
                    transition: "opacity 0.15s cubic-bezier(0.16, 1, 0.3, 1), transform 0.15s cubic-bezier(0.16, 1, 0.3, 1)",
                    display: "inline-block",
                    color: isActionWord && localWordProgress > 0.6 
                      ? "transparent" 
                      : "#ffffff",
                    backgroundImage: isActionWord && localWordProgress > 0.6 
                      ? "linear-gradient(135deg, #6c63ff 0%, #48cfad 100%)" 
                      : "none",
                    WebkitBackgroundClip: isActionWord && localWordProgress > 0.6 ? "text" : "none",
                    backgroundClip: isActionWord && localWordProgress > 0.6 ? "text" : "none",
                  }}
                >
                  {word}
                </span>
              );
            })}
          </h2>

        </div>
      </div>
    </div>
  );
}

// Background star points styling
const starDotStyle = (size, left, top, delay) => ({
  position: "absolute",
  left,
  top,
  width: `${size / 4}px`,
  height: `${size / 4}px`,
  borderRadius: "50%",
  background: "#ffffff",
  boxShadow: `0 0 ${size}px rgba(255, 255, 255, 0.8)`,
  opacity: 0.3,
  animation: "pulse-slow 3s ease-in-out infinite",
  animationDelay: delay,
  pointerEvents: "none"
});

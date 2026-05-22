"use client";

import { useEffect, useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Problem from "../components/Problem";
import Science from "../components/Science";
import HowItWorks from "../components/HowItWorks";
import InterestsSelector from "../components/InterestsSelector";
import Features from "../components/Features";
import WaitlistForm from "../components/WaitlistForm";
import Footer from "../components/Footer";

export default function Home() {
  const [showMobileCta, setShowMobileCta] = useState(false);

  useEffect(() => {
    // Elegant IntersectionObserver for Apple-style slide up & fade in reveal effects
    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -100px 0px", // Trigger when element is 100px from the bottom
      threshold: 0.04, // Trigger as soon as 4% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          // Stop observing to retain open/revealed state
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll(".reveal-element");
    revealElements.forEach((el) => observer.observe(el));

    // Scroll listener for sticky bottom CTA on mobile devices
    const handleScroll = () => {
      if (window.scrollY > 450) {
        setShowMobileCta(true);
      } else {
        setShowMobileCta(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Sticky Premium Navigation */}
      <Header />
      
      {/* Page Content sections */}
      <main style={{ minHeight: "100vh" }}>
        
        {/* Section 1: Hero Pitch & Simulator */}
        <Hero />
        
        {/* Section 2: Pain Point Analysis */}
        <Problem />
        
        {/* Section 2.5: The Psychology & Science of Focus */}
        <Science />
        
        {/* Section 3: Forest timeline visual device flow intercept simulator */}
        <HowItWorks />
        
        {/* Section 4: Fabulous guided interests questionnaire preview */}
        <InterestsSelector />
        
        {/* Section 5: SaaS alternating visual blocks */}
        <Features />
        
        {/* Section 6: Robinhood waitlist gamification & live Supabase connection */}
        <WaitlistForm />

      </main>

      {/* Section 7: Footer */}
      <Footer />

      {/* Mobile Sticky Bottom CTA Drawer (triggers scroll to waitlist) */}
      <div 
        className={`mobile-sticky-cta ${showMobileCta ? "active" : ""}`}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "12px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          <span style={{ fontSize: "11px", color: "var(--text-dim)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px" }}>ScrollTask</span>
          <span style={{ fontSize: "12.5px", color: "#fff", fontWeight: 700, letterSpacing: "-0.2px" }}>Turn scrolling into progress</span>
        </div>
        
        <button 
          onClick={() => {
            const el = document.getElementById("waitlist");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          className="btn btn-primary"
          style={{
            padding: "10px 20px",
            fontSize: "13px",
            borderRadius: "10px",
            boxShadow: "0 4px 15px rgba(108, 99, 255, 0.3)"
          }}
        >
          Get Early Access 🚀
        </button>
      </div>
    </>
  );
}

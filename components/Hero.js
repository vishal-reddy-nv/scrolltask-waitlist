"use client";

import ExtensionMockup from "./ExtensionMockup";

export default function Hero() {
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="hero" 
      style={{
        position: "relative",
        padding: "160px 24px 80px 24px",
        overflow: "hidden",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Premium glowing backgrounds */}
      <div style={{
        position: "absolute",
        top: "15%",
        left: "5%",
        width: "500px",
        height: "500px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(108, 99, 255, 0.1) 0%, transparent 70%)",
        filter: "blur(60px)",
        pointerEvents: "none",
        zIndex: 0,
      }} className="animate-pulse-slow" />
      
      <div style={{
        position: "absolute",
        bottom: "10%",
        right: "5%",
        width: "600px",
        height: "600px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(72, 207, 173, 0.06) 0%, transparent 70%)",
        filter: "blur(80px)",
        pointerEvents: "none",
        zIndex: 0,
      }} className="animate-pulse-slow" />

      <div className="container hero-grid" style={{ position: "relative", zIndex: 10 }}>
        
        {/* Left Column: Premium Pitch */}
        <div className="hero-left-content" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
          
          {/* Active status pill */}
          <div className="badge-soon reveal-element stagger-1" style={{ marginBottom: "20px" }}>
            Reclaim your attention
          </div>

          {/* Large Headline */}
          <h1 className="reveal-element stagger-2" style={{
            fontSize: "clamp(38px, 5.8vw, 68px)",
            fontWeight: 800,
            lineHeight: 1.15,
            letterSpacing: "-2.5px",
            color: "#ffffff",
            marginBottom: "20px",
          }}>
            Stop doomscrolling.<br />
            <span className="text-gradient">Start winning small.</span>
          </h1>

          {/* Subheadline */}
          <p className="reveal-element stagger-3" style={{
            fontSize: "clamp(16px, 1.8vw, 19px)",
            color: "var(--text-muted)",
            lineHeight: 1.6,
            maxWidth: "560px",
            marginBottom: "36px",
            fontWeight: 500,
          }}>
            ScrollTask interrupts your scrolling, gives you tiny AI-generated tasks, and turns wasted time into progress.
          </p>

          {/* CTA Buttons */}
          <div className="reveal-element stagger-4" style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "16px",
            marginBottom: "28px",
          }}>
            <button 
              onClick={() => handleScrollTo("waitlist")} 
              className="btn btn-primary"
              style={{
                fontSize: "15px",
                padding: "16px 36px",
                borderRadius: "12px",
                boxShadow: "0 8px 30px rgba(108, 99, 255, 0.35)",
              }}
            >
              Get Early Access 🚀
            </button>
            
            <button 
              onClick={() => handleScrollTo("how-it-works")} 
              className="btn btn-secondary"
              style={{
                fontSize: "15px",
                padding: "16px 36px",
                borderRadius: "12px",
              }}
            >
              See how it works
            </button>
          </div>


        </div>

        {/* Right Column: Looping Interactive Simulator Mockup */}
        <div 
          className="hero-mockup-wrapper reveal-element stagger-3"
          style={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
          }}
        >
          
          <div style={{ position: "relative", zIndex: 5 }} className="animate-float">
            <ExtensionMockup />
          </div>
        </div>

      </div>
    </section>
  );
}

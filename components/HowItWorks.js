"use client";

import { useState, useEffect } from "react";

const STEPS = [
  {
    title: "1. Doomscroll Intercepted",
    desc: "You open Instagram, TikTok, or YouTube. Instead of wasting 2 hours, ScrollTask silently registers the session duration.",
    icon: "📱",
    color: "#6c63ff"
  },
  {
    title: "2. Overlay Intercepts",
    desc: "Before the algorithm hooks your dopamine receptors, a premium glass overlay smoothly intercepts your scroll feed.",
    icon: "⚡",
    color: "#63b3ff"
  },
  {
    title: "3. AI checklist task",
    desc: "AI extracts lightweight, bite-sized tasks from your study presets or uploaded PDFs, presenting a 2-minute checkpoint.",
    icon: "🧠",
    color: "#a8a4ff"
  },
  {
    title: "4. Dopamine Streak Reward",
    desc: "Completing your task triggers a satisfying reward blast (+10 Focus XP, streak multiplier) to rewire habit pathways.",
    icon: "🔥",
    color: "#48cfad"
  },
  {
    title: "5. Guilt-Free Scrolling",
    desc: "Your scroll feed unlocks. You continue browsing completely guilt-free, backed by actual productive wins.",
    icon: "🚀",
    color: "#ffd700"
  }
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play the simulator loop
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % STEPS.length);
    }, 1500);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section 
      id="how-it-works" 
      className="section-padding" 
      style={{ 
        position: "relative",
        background: "rgba(5, 5, 8, 0.7)",
        zIndex: 5
      }}
    >
      {/* Ambient background glow */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "600px",
        height: "300px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(108, 99, 255, 0.04) 0%, transparent 80%)",
        filter: "blur(60px)",
        pointerEvents: "none"
      }} />

      <div className="container">
        
        {/* Section Header */}
        <div className="reveal-element" style={{ textAlign: "center", marginBottom: "64px" }}>
          <span style={{
            background: "rgba(108, 99, 255, 0.08)",
            color: "#a8a4ff",
            fontSize: "10px",
            fontWeight: 800,
            padding: "5px 12px",
            borderRadius: "20px",
            textTransform: "uppercase",
            letterSpacing: "0.8px"
          }}>
            Behavioral Psychology Loop
          </span>
          <h2 style={{
            fontSize: "clamp(28px, 4vw, 42px)",
            fontWeight: 800,
            color: "#ffffff",
            marginTop: "16px",
            marginBottom: "16px",
            letterSpacing: "-1px"
          }}>
            When you scroll → <span className="text-gradient">ScrollTask interrupts</span>
          </h2>
          <p style={{
            fontSize: "16px",
            color: "var(--text-muted)",
            maxWidth: "540px",
            margin: "0 auto",
            lineHeight: 1.6
          }}>
            Willpower alone fails. ScrollTask hacks your brain's reward feedback loops, turning mindless distraction into productive momentum.
          </p>
        </div>

        {/* Storytelling Split Layout */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "0.9fr 1.1fr",
          gap: "48px",
          alignItems: "center"
        }} className="hero-grid">
          
          {/* Left Column: Visual Mobile Phone Simulator */}
          <div style={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
            width: "100%"
          }} className="hero-mockup-wrapper reveal-element">
            
            {/* Phone Frame */}
            <div style={{
              width: "100%",
              maxWidth: "320px",
              height: "540px",
              background: "#000",
              borderRadius: "40px",
              border: "12px solid #1a1a24",
              boxShadow: "0 25px 60px rgba(0, 0, 0, 0.8), 0 0 30px rgba(108, 99, 255, 0.1)",
              position: "relative",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column"
            }}>
              
              {/* Phone Speaker Notch */}
              <div style={{
                position: "absolute",
                top: "0",
                left: "50%",
                transform: "translateX(-50%)",
                width: "110px",
                height: "22px",
                background: "#1a1a24",
                borderBottomLeftRadius: "16px",
                borderBottomRightRadius: "16px",
                zIndex: 100
              }} />

              {/* SIMULATED CONTENT CORRESPONDING TO ACTIVE STEP */}
              <div style={{ flex: 1, position: "relative", display: "flex", flexDirection: "column" }}>
                
                {/* STEP 0: Instagram Scroll */}
                {activeStep === 0 && (
                  <div style={{ flex: 1, background: "#000", display: "flex", flexDirection: "column", padding: "30px 10px 10px 10px", animation: "fadeIn 0.4s" }}>
                    <div style={{ fontSize: "14px", fontWeight: 700, borderBottom: "1px solid #1c1c1e", paddingBottom: "6px", marginBottom: "10px" }}>Instagram</div>
                    
                    {/* Simulated Post Card scrolling */}
                    <div style={{ background: "#121212", borderRadius: "12px", padding: "8px", border: "1px solid #1c1c1e" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "8px" }}>
                        <div style={{ width: "16px", height: "16px", borderRadius: "50%", background: "linear-gradient(45deg, #f99f1b, #d91a7f)" }} />
                        <span style={{ fontSize: "9px", fontWeight: 700 }}>mindless_post</span>
                      </div>
                      <div style={{
                        height: "180px",
                        background: "linear-gradient(135deg, #1f1b2c, #161c2c)",
                        borderRadius: "8px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "24px",
                        animation: "scrollFeedUp 4.5s linear infinite"
                      }}>
                         reels loop 🌀
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 1: Blocker Intercept Overlay */}
                {activeStep === 1 && (
                  <div style={{ flex: 1, background: "#000", display: "flex", flexDirection: "column", padding: "30px 10px 10px 10px", position: "relative" }}>
                    <div style={{ fontSize: "14px", fontWeight: 700, borderBottom: "1px solid #1c1c1e", paddingBottom: "6px", marginBottom: "10px", opacity: 0.2 }}>Instagram</div>
                    
                    {/* Blur Intercept Card */}
                    <div style={{
                      position: "absolute",
                      top: 0, left: 0, right: 0, bottom: 0,
                      background: "rgba(0,0,0,0.6)",
                      backdropFilter: "blur(12px)",
                      WebkitBackdropFilter: "blur(12px)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "16px",
                      zIndex: 10
                    }}>
                      <div style={{
                        width: "100%",
                        background: "radial-gradient(circle at top left, #0e0e22, #050508)",
                        border: "1px solid rgba(108, 99, 255, 0.4)",
                        borderRadius: "20px",
                        padding: "24px 16px",
                        textAlign: "center",
                        boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
                        animation: "scaleIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards"
                      }}>
                        <div style={{
                          width: "36px",
                          height: "36px",
                          borderRadius: "50%",
                          background: "rgba(108, 99, 255, 0.15)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          margin: "0 auto 12px auto",
                          animation: "pulseGlow 1.5s infinite"
                        }}>
                          <span style={{ fontSize: "18px" }}>⚡</span>
                        </div>
                        <h4 style={{ fontSize: "14px", fontWeight: 800, color: "#fff", marginBottom: "6px" }}>Focus Intercepted!</h4>
                        <p style={{ fontSize: "10px", color: "var(--text-muted)", lineHeight: "1.4" }}>
                          ScrollTask is protecting your focus loop. Loading checklist...
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 2: AI task generation */}
                {activeStep === 2 && (
                  <div style={{ flex: 1, background: "#000", display: "flex", flexDirection: "column", padding: "30px 10px 10px 10px", position: "relative" }}>
                    <div style={{
                      position: "absolute",
                      top: 0, left: 0, right: 0, bottom: 0,
                      background: "rgba(0,0,0,0.65)",
                      backdropFilter: "blur(12px)",
                      WebkitBackdropFilter: "blur(12px)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "16px",
                      zIndex: 10
                    }}>
                      <div style={{
                        width: "100%",
                        background: "radial-gradient(circle at top left, #0e0e22, #050508)",
                        border: "1px solid rgba(72, 207, 173, 0.3)",
                        borderRadius: "20px",
                        padding: "20px 16px",
                        textAlign: "left",
                        boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
                        animation: "scaleIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards"
                      }}>
                        <span style={{ fontSize: "8px", fontWeight: 800, color: "#48cfad", background: "rgba(72,207,173,0.1)", padding: "3px 6px", borderRadius: "10px", display: "inline-block", marginBottom: "6px" }}>AI EXTRACTED</span>
                        <h4 style={{ fontSize: "12.5px", fontWeight: 700, color: "#fff", marginBottom: "12px", lineHeight: "1.3" }}>
                          Biology Checkpoint
                        </h4>
                        
                        <div style={{ width: "100%", height: "4px", background: "rgba(255,255,255,0.06)", borderRadius: "2px", marginBottom: "12px" }}>
                          <div style={{ height: "100%", background: "#48cfad", width: "0%" }} />
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                          <div style={{ display: "flex", alignItems: "center", gap: "6px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.04)", borderRadius: "6px", padding: "6px 8px", fontSize: "10.5px" }}>
                            <span>⬜</span>
                            <span>Explain photosynthesis in 2 sentences</span>
                          </div>
                        </div>

                        {/* Simulated mouse pointer heading to click */}
                        <div style={{
                          position: "absolute",
                          bottom: "16px",
                          right: "24px",
                          fontSize: "14px",
                          animation: "mouseMoveClick 2s infinite"
                        }}>
                          🖱️
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 3: Dopamine Streak Reward */}
                {activeStep === 3 && (
                  <div style={{ flex: 1, background: "#000", display: "flex", flexDirection: "column", padding: "30px 10px 10px 10px", position: "relative" }}>
                    <div style={{
                      position: "absolute",
                      top: 0, left: 0, right: 0, bottom: 0,
                      background: "rgba(0,0,0,0.75)",
                      backdropFilter: "blur(12px)",
                      WebkitBackdropFilter: "blur(12px)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "16px",
                      zIndex: 10
                    }}>
                      <div style={{
                        width: "100%",
                        background: "radial-gradient(circle at top left, #0e0e22, #050508)",
                        border: "1px solid rgba(72, 207, 173, 0.4)",
                        borderRadius: "20px",
                        padding: "24px 16px",
                        textAlign: "center",
                        boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
                        animation: "scaleIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards",
                        position: "relative"
                      }}>
                        <div style={{ fontSize: "36px", marginBottom: "8px", filter: "drop-shadow(0 0 8px rgba(72,207,173,0.3))" }}>🏆</div>
                        <h4 style={{ fontSize: "14px", fontWeight: 800, color: "#48cfad", marginBottom: "4px" }}>Checkpoint Cleared!</h4>
                        <p style={{ fontSize: "11px", color: "#fff", marginBottom: "10px" }}>+10 Focus XP Reclaimed!</p>
                        
                        <div style={{
                          background: "rgba(255,255,255,0.03)",
                          border: "1px solid rgba(255,255,255,0.06)",
                          padding: "6px 10px",
                          borderRadius: "8px",
                          display: "inline-block",
                          fontSize: "10px"
                        }}>
                          🔥 <strong>6-Day Focus Streak</strong> preserved!
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 4: Continue Scrolling */}
                {activeStep === 4 && (
                  <div style={{ flex: 1, background: "#000", display: "flex", flexDirection: "column", padding: "30px 10px 10px 10px", animation: "fadeIn 0.4s" }}>
                    <div style={{ fontSize: "14px", fontWeight: 700, borderBottom: "1px solid #1c1c1e", paddingBottom: "6px", marginBottom: "10px" }}>Instagram</div>
                    
                    {/* Unlocked banner */}
                    <div style={{
                      background: "rgba(72, 207, 173, 0.1)",
                      border: "1px solid rgba(72, 207, 173, 0.2)",
                      borderRadius: "10px",
                      padding: "8px 12px",
                      fontSize: "10.5px",
                      color: "#48cfad",
                      textAlign: "center",
                      marginBottom: "10px",
                      animation: "slideInDown 0.3s cubic-bezier(0.16, 1, 0.3, 1) both"
                    }}>
                      🔓 Focus checkpoint complete. Feed unlocked!
                    </div>

                    {/* Feed scrolls again */}
                    <div style={{ background: "#121212", borderRadius: "12px", padding: "8px", border: "1px solid #1c1c1e" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "8px" }}>
                        <div style={{ width: "16px", height: "16px", borderRadius: "50%", background: "#48cfad" }} />
                        <span style={{ fontSize: "9px", fontWeight: 700 }}>unlocked_doomscroll</span>
                      </div>
                      <div style={{
                        height: "140px",
                        background: "linear-gradient(135deg, #1c2c24, #1b2c2c)",
                        borderRadius: "8px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "20px"
                      }}>
                        guilt-free scrolling 🍀
                      </div>
                    </div>
                  </div>
                )}

              </div>

              {/* Bottom device navigation bar bar */}
              <div style={{
                height: "36px",
                borderTop: "1px solid #1c1c1e",
                background: "#000",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                fontSize: "12px",
                opacity: 0.8,
                paddingBottom: "8px"
              }}>
                <span>🏠</span>
                <span>🔍</span>
                <span>➕</span>
                <span>♥</span>
                <span>👤</span>
              </div>

            </div>
          </div>

          {/* Right Column: Interactive Description Nodes */}
          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "14px",
            width: "100%"
          }}>
            {STEPS.map((step, idx) => {
              const isActive = activeStep === idx;
              const isHovered = hoveredIdx === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  onMouseEnter={() => {
                    setActiveStep(idx);
                    setHoveredIdx(idx);
                    setIsPaused(true);
                  }}
                  onMouseLeave={() => {
                    setHoveredIdx(null);
                    setIsPaused(false);
                  }}
                  className="card-glass"
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "16px",
                    padding: "20px",
                    cursor: "pointer",
                    background: isActive 
                      ? "rgba(255, 255, 255, 0.05)" 
                      : (isHovered ? "rgba(255, 255, 255, 0.025)" : "rgba(255, 255, 255, 0.01)"),
                    border: "1px solid",
                    borderColor: isActive 
                      ? step.color 
                      : (isHovered ? "rgba(255, 255, 255, 0.2)" : "rgba(255, 255, 255, 0.06)"),
                    boxShadow: isActive 
                      ? `0 8px 30px ${step.color}25` 
                      : (isHovered ? "0 4px 15px rgba(255,255,255,0.02)" : "none"),
                    transform: isActive 
                      ? "translateX(10px) scale(1.01)" 
                      : (isHovered ? "translateX(4px) scale(1.002)" : "translateX(0) scale(1)"),
                    transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)"
                  }}
                >
                  <div style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: isActive ? step.color : "rgba(255,255,255,0.03)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "16px",
                    fontWeight: 700,
                    color: isActive ? "#fff" : "var(--text-dim)",
                    transition: "all 0.3s",
                    boxShadow: isActive ? `0 0 10px ${step.color}66` : "none"
                  }}>
                    {step.icon}
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "2px", textAlign: "left", flex: 1 }}>
                    <h4 style={{ fontSize: "15px", fontWeight: 700, color: isActive ? "#fff" : "rgba(255, 255, 255, 0.85)" }}>
                      {step.title}
                    </h4>
                    <p style={{ fontSize: "12.5px", color: "var(--text-muted)", lineHeight: "1.45" }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>

      <style jsx global>{`
        @keyframes scrollFeedUp {
          0% { transform: translateY(0); }
          100% { transform: translateY(-30px); }
        }
        @keyframes slideInDown {
          from { transform: translateY(-20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </section>
  );
}

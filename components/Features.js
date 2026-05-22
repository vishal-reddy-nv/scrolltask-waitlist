"use client";

import { useState, useEffect } from "react";

export default function Features() {
  // Block 1 checkbox ticker state
  const [b1Ticks, setB1Ticks] = useState([true, false, false]);
  // Block 2 PDF extraction state: 'upload' | 'parsing' | 'extracted'
  const [b2State, setB2State] = useState("upload");
  // Block 3 progress animation state
  const [b3Streak, setB3Streak] = useState(5);
  const [b3Percent, setB3Percent] = useState(70);

  // Animations ticker loops
  useEffect(() => {
    // Block 1 ticking loop
    const b1Interval = setInterval(() => {
      setB1Ticks((prev) => {
        if (prev[0] && prev[1] && prev[2]) return [true, false, false];
        if (prev[0] && prev[1]) return [true, true, true];
        return [true, true, false];
      });
    }, 2500);

    // Block 2 PDF loop
    const b2Interval = setInterval(() => {
      setB2State((prev) => {
        if (prev === "upload") return "parsing";
        if (prev === "parsing") return "extracted";
        return "upload";
      });
    }, 4000);

    // Block 3 streak counter loop
    const b3Interval = setInterval(() => {
      setB3Streak((prev) => (prev >= 6 ? 5 : prev + 1));
      setB3Percent((prev) => (prev >= 100 ? 70 : prev + 15));
    }, 3000);

    return () => {
      clearInterval(b1Interval);
      clearInterval(b2Interval);
      clearInterval(b3Interval);
    };
  }, []);

  return (
    <section 
      id="features" 
      className="section-padding"
      style={{ 
        position: "relative",
        background: "linear-gradient(to bottom, transparent, rgba(10, 10, 20, 0.4), transparent)",
        zIndex: 5
      }}
    >
      <div className="container">
        
        {/* Section Header */}
        <div className="reveal-element" style={{ textAlign: "center", marginBottom: "80px" }}>
          <span style={{
            background: "rgba(72, 207, 173, 0.08)",
            color: "#48cfad",
            fontSize: "10px",
            fontWeight: 800,
            padding: "5px 12px",
            borderRadius: "20px",
            textTransform: "uppercase",
            letterSpacing: "0.8px"
          }}>
            Product Core Capabilities
          </span>
          <h2 style={{
            fontSize: "clamp(28px, 4vw, 42px)",
            fontWeight: 800,
            color: "#ffffff",
            marginTop: "16px",
            marginBottom: "16px",
            letterSpacing: "-1.5px"
          }}>
            Designed for <span className="text-gradient">high-converting focus</span>
          </h2>
          <p style={{
            fontSize: "16px",
            color: "var(--text-muted)",
            maxWidth: "540px",
            margin: "0 auto",
            lineHeight: 1.6
          }}>
            Willpower fails because algorithms are engineered to addict. ScrollTask levels the playing field.
          </p>
        </div>

        {/* ALTERNATING VISUAL BLOCKS */}
        <div style={{ display: "flex", flexDirection: "column", gap: "100px" }}>
          
          {/* BLOCK 1: AI Creates Tiny Tasks */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "48px",
            alignItems: "center"
          }} className="hero-grid reveal-element">
            
            {/* Left side: Text */}
            <div style={{ textAlign: "left" }}>
              <div style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "rgba(108, 99, 255, 0.1)",
                border: "1px solid rgba(108, 99, 255, 0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
                marginBottom: "20px"
              }}>
                🧠
              </div>
              <h3 style={{ fontSize: "clamp(24px, 3vw, 32px)", fontWeight: 800, color: "#fff", marginBottom: "16px", letterSpacing: "-0.5px" }}>
                AI creates tiny tasks
              </h3>
              <p style={{ fontSize: "15px", color: "var(--text-muted)", lineHeight: 1.6, marginBottom: "20px" }}>
                Autofill learning structures or custom goals. Our fine-tuned LLM instantly breaks massive, intimidating objectives into bite-sized, 2-minute actionable checkpoints.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "13.5px", color: "#fff", fontWeight: 500 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ color: "#48cfad" }}>✓</span> Zero intimidating hurdles that trigger procrastination
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ color: "#48cfad" }}>✓</span> Automatically adapted based on target deadlines
                </div>
              </div>
            </div>

            {/* Right side: Interactive Visual Card */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div 
                className="card-glass"
                style={{
                  width: "100%",
                  maxWidth: "380px",
                  background: "rgba(10, 10, 20, 0.6)",
                  border: "1px solid rgba(186, 104, 200, 0.2)",
                  padding: "32px 24px",
                  borderRadius: "24px",
                  boxShadow: "0 15px 35px rgba(0,0,0,0.4)"
                }}
              >
                <span style={{ fontSize: "9px", fontWeight: 800, color: "#6c63ff", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "6px" }}>
                  AI CHECKLIST GENERATOR
                </span>
                <h4 style={{ fontSize: "16px", fontWeight: 700, color: "#fff", marginBottom: "20px" }}>
                  Objective: Master React Hooks
                </h4>

                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  {[
                    "Read 1 page of official documentation",
                    "Write a custom useLocalStorage snippet",
                    "Fix dependency array in mock useEffect card"
                  ].map((task, idx) => {
                    const ticked = b1Ticks[idx];
                    return (
                      <div
                        key={idx}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          background: ticked ? "transparent" : "rgba(255,255,255,0.02)",
                          border: ticked ? "1px solid transparent" : "1px solid rgba(255,255,255,0.05)",
                          borderRadius: "10px",
                          padding: "10px 12px",
                          fontSize: "12.5px",
                          opacity: ticked ? 0.4 : 1,
                          textDecoration: ticked ? "line-through" : "none",
                          transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
                        }}
                      >
                        <span style={{ color: "#6c63ff", fontSize: "14px" }}>{ticked ? "✅" : "⬜"}</span>
                        <span>{task}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

          </div>

          {/* BLOCK 2: PDF → AI Study Assistant */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "48px",
            alignItems: "center"
          }} className="hero-grid reveal-element">
            
            {/* Left side: Interactive Visual Card (Alternating) */}
            <div style={{ display: "flex", justifyContent: "center" }} className="mobile-only-order-2">
              <div 
                className="card-glass"
                style={{
                  width: "100%",
                  maxWidth: "380px",
                  background: "rgba(10, 10, 20, 0.6)",
                  border: "1px solid rgba(72, 207, 173, 0.2)",
                  padding: "32px 24px",
                  borderRadius: "24px",
                  boxShadow: "0 15px 35px rgba(0,0,0,0.4)",
                  textAlign: "center"
                }}
              >
                {b2State === "upload" && (
                  <div style={{ padding: "20px 0", animation: "fadeIn 0.3s" }}>
                    <div style={{ fontSize: "40px", marginBottom: "16px" }}>📄</div>
                    <h4 style={{ fontSize: "15px", fontWeight: 700, color: "#fff", marginBottom: "6px" }}>Drop Study PDF here</h4>
                    <p style={{ fontSize: "11px", color: "var(--text-muted)" }}>Drag textbooks, lecture notes, or guidelines.</p>
                    <div style={{
                      marginTop: "16px",
                      background: "rgba(72, 207, 173, 0.08)",
                      border: "1px solid rgba(72, 207, 173, 0.2)",
                      borderRadius: "10px",
                      padding: "8px",
                      fontSize: "11px",
                      color: "#48cfad",
                      display: "inline-block"
                    }}>
                      biology_chapter_2.pdf (4.8MB)
                    </div>
                  </div>
                )}

                {b2State === "parsing" && (
                  <div style={{ padding: "20px 0", animation: "fadeIn 0.3s" }}>
                    <div style={{
                      width: "48px",
                      height: "48px",
                      border: "2px solid rgba(72,207,173,0.15)",
                      borderTopColor: "#48cfad",
                      borderRadius: "50%",
                      animation: "spin 0.8s linear infinite",
                      margin: "0 auto 16px auto"
                    }} />
                    <h4 style={{ fontSize: "15px", fontWeight: 700, color: "#fff", marginBottom: "6px" }}>AI Coach Reading PDF</h4>
                    <p style={{ fontSize: "11px", color: "var(--text-muted)" }}>Extracting key syllabus & focus markers...</p>
                  </div>
                )}

                {b2State === "extracted" && (
                  <div style={{ padding: "10px 0", textAlign: "left", animation: "fadeIn 0.3s" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
                      <span style={{ fontSize: "20px" }}>✅</span>
                      <div>
                        <span style={{ fontSize: "9px", color: "#48cfad", fontWeight: 800, textTransform: "uppercase" }}>EXTRACTION COMPLETE</span>
                        <h4 style={{ fontSize: "13px", fontWeight: 750, color: "#fff" }}>Extracted study tasks:</h4>
                      </div>
                    </div>
                    
                    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                      <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.04)", borderRadius: "8px", padding: "8px 10px", fontSize: "11px" }}>
                        ⬜ Summarize cell wall differences (pg 12)
                      </div>
                      <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.04)", borderRadius: "8px", padding: "8px 10px", fontSize: "11px" }}>
                        ⬜ List 3 lipid synthesis phases (pg 15)
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right side: Text */}
            <div style={{ textAlign: "left" }}>
              <div style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "rgba(72, 207, 173, 0.1)",
                border: "1px solid rgba(72, 207, 173, 0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
                marginBottom: "20px"
              }}>
                📄
              </div>
              <h3 style={{ fontSize: "clamp(24px, 3vw, 32px)", fontWeight: 800, color: "#fff", marginBottom: "16px", letterSpacing: "-0.5px" }}>
                PDF → AI study assistant
              </h3>
              <p style={{ fontSize: "15px", color: "var(--text-muted)", lineHeight: 1.6, marginBottom: "20px" }}>
                Upload massive textbooks, lecture guides, or research PDFs. ScrollTask reads the material and builds customized micro-checkpoints so you learn directly inside your attention loops.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "13.5px", color: "#fff", fontWeight: 500 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ color: "#48cfad" }}>✓</span> Supports heavy lecture notes and syllabus formats
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ color: "#48cfad" }}>✓</span> Hyper-targeted prompts mapped to textbook paragraphs
                </div>
              </div>
            </div>

          </div>

          {/* BLOCK 3: Scrolling Becomes Progress */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "48px",
            alignItems: "center"
          }} className="hero-grid reveal-element">
            
            {/* Left side: Text */}
            <div style={{ textAlign: "left" }}>
              <div style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "rgba(99, 179, 255, 0.1)",
                border: "1px solid rgba(99, 179, 255, 0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
                marginBottom: "20px"
              }}>
                📈
              </div>
              <h3 style={{ fontSize: "clamp(24px, 3vw, 32px)", fontWeight: 800, color: "#fff", marginBottom: "16px", letterSpacing: "-0.5px" }}>
                Scrolling becomes progress
              </h3>
              <p style={{ fontSize: "15px", color: "var(--text-muted)", lineHeight: 1.6, marginBottom: "20px" }}>
                Track focus streaks, count the hours of attention saved from social algorithms, and watch your focus dashboard grow in real time. We make productive work as gamified and addictive as social scrolling.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "13.5px", color: "#fff", fontWeight: 500 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ color: "#48cfad" }}>✓</span> Interactive gamified streak levels and focus multipliers
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ color: "#48cfad" }}>✓</span> Deep insight tracking (reclaimed attention metrics)
                </div>
              </div>
            </div>

            {/* Right side: Interactive Visual Card */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div 
                className="card-glass"
                style={{
                  width: "100%",
                  maxWidth: "380px",
                  background: "rgba(10, 10, 20, 0.6)",
                  border: "1px solid rgba(99, 179, 255, 0.2)",
                  padding: "28px 24px",
                  borderRadius: "24px",
                  boxShadow: "0 15px 35px rgba(0,0,0,0.4)"
                }}
              >
                <div style={{ display: "flex", justifyItems: "space-between", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                  <span style={{ fontSize: "9px", fontWeight: 800, color: "#63b3ff", textTransform: "uppercase", letterSpacing: "1px" }}>
                    RECLAIMED FOCUS LEVEL
                  </span>
                  <div style={{ background: "rgba(72,207,173,0.1)", color: "#48cfad", borderRadius: "10px", padding: "4px 8px", fontSize: "9px", fontWeight: 700 }}>
                    🔥 Active Streak: {b3Streak} Days
                  </div>
                </div>

                {/* Score bar */}
                <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.04)", borderRadius: "16px", padding: "16px", marginBottom: "14px" }}>
                  <div style={{ display: "flex", justifyItems: "space-between", justifyContent: "space-between", fontSize: "11px", color: "var(--text-muted)", marginBottom: "6px" }}>
                    <span>Weekly Target Completion</span>
                    <span style={{ fontWeight: 700, color: "#fff" }}>{b3Percent}%</span>
                  </div>
                  <div style={{ width: "100%", height: "8px", background: "rgba(255,255,255,0.06)", borderRadius: "4px", overflow: "hidden" }}>
                    <div style={{ height: "100%", background: "linear-gradient(90deg, #6c63ff, #48cfad)", width: `${b3Percent}%`, transition: "width 0.4s" }} />
                  </div>
                </div>

                {/* Quick stats grid */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                  <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.04)", borderRadius: "12px", padding: "12px", textAlign: "center" }}>
                    <span style={{ fontSize: "20px", fontWeight: 850, color: "#fff", display: "block" }}>12 hrs</span>
                    <span style={{ fontSize: "9px", color: "var(--text-dim)", textTransform: "uppercase" }}>Focus Reclaimed</span>
                  </div>
                  <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.04)", borderRadius: "12px", padding: "12px", textAlign: "center" }}>
                    <span style={{ fontSize: "20px", fontWeight: 850, color: "#48cfad", display: "block" }}>+240 XP</span>
                    <span style={{ fontSize: "9px", color: "var(--text-dim)", textTransform: "uppercase" }}>Focus Multiplier</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Responsive layout corrections */}
      <style jsx>{`
        @media (max-width: 991px) {
          .mobile-only-order-2 {
            order: 2 !important;
          }
        }
      `}</style>
    </section>
  );
}

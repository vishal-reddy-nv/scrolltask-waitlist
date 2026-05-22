"use client";

import { useState } from "react";

const INTEREST_PRESETS = {
  study: {
    emoji: "📚",
    title: "Study better",
    color: "#6c63ff",
    tagline: "Break down textbooks and prep for tests without burnout.",
    examples: [
      "Review chapter 3 biology index terms (10 min)",
      "Sketch a cell wall structure diagram (5 min)",
      "Write a 3-sentence summary of photosynthesis (3 min)",
      "Answer 3 practice questions on DNA replication (5 min)"
    ]
  },
  habits: {
    emoji: "💪",
    title: "Build habits",
    color: "#48cfad",
    tagline: "Stack healthy actions onto your daily browsing loops.",
    examples: [
      "Drink one full glass of water (1 min)",
      "Hold a physical stretching pose (2 min)",
      "Do 15 bodyweight air squats (2 min)",
      "Write down 3 things you are grateful for (2 min)"
    ]
  },
  skills: {
    emoji: "🧠",
    title: "Learn skills",
    color: "#63b3ff",
    tagline: "Master languages, design tools, or math step-by-step.",
    examples: [
      "Learn 5 Spanish verbs (haber, tener, hacer, etc.)",
      "Translate 3 basic restaurant ordering phrases",
      "Listen to 2 minutes of foreign pronunciation audio",
      "Recall today's conjugation patterns on a scrap paper"
    ]
  },
  coding: {
    emoji: "💻",
    title: "Coding",
    color: "#a8a4ff",
    tagline: "Learn data structures, fix bugs, and study system architecture.",
    examples: [
      "Read 1 page of the Python documentation",
      "Write down the algorithm flowchart logic",
      "Identify 2 possible boundary edge conditions",
      "Refactor variable names for perfect cleanliness"
    ]
  },
  productivity: {
    emoji: "🎯",
    title: "Productivity",
    color: "#ffd700",
    tagline: "Reclaim lost hours, organize your inbox, and organize tasks.",
    examples: [
      "Archive 10 old spam newsletter subscriptions",
      "Write down your 3 core high-priority tasks",
      "Clean up your desktop downloads directory",
      "Take 5 deep breathing focus pauses"
    ]
  }
};

export default function InterestsSelector() {
  const [selected, setSelected] = useState("study");
  const data = INTEREST_PRESETS[selected];

  return (
    <section 
      id="interests" 
      className="section-padding"
      style={{
        position: "relative",
        background: "rgba(5, 5, 8, 0.2)",
        zIndex: 5
      }}
    >
      {/* Glow effect */}
      <div style={{
        position: "absolute",
        top: "30%",
        right: "10%",
        width: "400px",
        height: "400px",
        borderRadius: "50%",
        background: `radial-gradient(circle, ${data.color}08 0%, transparent 70%)`,
        filter: "blur(60px)",
        pointerEvents: "none",
        transition: "background 0.5s"
      }} />

      <div className="container">
        
        {/* Header Title */}
        <div className="reveal-element" style={{ textAlign: "center", marginBottom: "56px" }}>
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
            Guided Onboarding
          </span>
          <h2 style={{
            fontSize: "clamp(28px, 4vw, 42px)",
            fontWeight: 800,
            color: "#ffffff",
            marginTop: "16px",
            marginBottom: "16px",
            letterSpacing: "-1.5px"
          }}>
            What would you like <span className="text-gradient">ScrollTask</span> to help you with?
          </h2>
          <p style={{
            fontSize: "15.5px",
            color: "var(--text-muted)",
            maxWidth: "500px",
            margin: "0 auto",
            lineHeight: 1.6
          }}>
            Select a target below to preview how ScrollTask formats it into a highly actionable bite-sized focus block.
          </p>
        </div>

        {/* Dynamic Selector Split View */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1.1fr 0.9fr",
          gap: "40px",
          alignItems: "center"
        }} className="hero-grid">
          
          {/* Left Column: Interactive Cards Grid */}
          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            width: "100%"
          }}>
            {Object.entries(INTEREST_PRESETS).map(([key, item]) => {
              const isSelected = selected === key;
              return (
                <div
                  key={key}
                  onClick={() => setSelected(key)}
                  className="card-glass"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    padding: "20px",
                    cursor: "pointer",
                    background: isSelected ? "rgba(255, 255, 255, 0.04)" : "rgba(255, 255, 255, 0.01)",
                    border: "1px solid",
                    borderColor: isSelected ? item.color : "rgba(255, 255, 255, 0.06)",
                    boxShadow: isSelected ? `0 8px 25px ${item.color}15` : "none",
                    transform: isSelected ? "translateX(6px)" : "translateX(0)",
                    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
                  }}
                >
                  <span style={{ fontSize: "28px", filter: `drop-shadow(0 0 8px ${item.color}33)` }}>
                    {item.emoji}
                  </span>
                  
                  <div style={{ display: "flex", flexDirection: "column", gap: "2px", textAlign: "left" }}>
                    <h4 style={{ fontSize: "16px", fontWeight: 700, color: isSelected ? "#fff" : "rgba(255, 255, 255, 0.85)" }}>
                      {item.title}
                    </h4>
                    <p style={{ fontSize: "12.5px", color: "var(--text-muted)" }}>
                      {item.tagline}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Live checklist representation */}
          <div 
            className="card-glass reveal-element"
            style={{
              padding: "36px 28px",
              background: "rgba(10, 10, 20, 0.7)",
              border: `1px solid ${data.color}33`,
              boxShadow: `0 20px 40px rgba(0, 0, 0, 0.4), 0 0 25px ${data.color}11`,
              borderRadius: "24px",
              textAlign: "left",
              minHeight: "360px",
              display: "flex",
              flexDirection: "column",
              transition: "border 0.3s ease, box-shadow 0.3s ease"
            }}
          >
            {/* Header info */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <span style={{ fontSize: "24px" }}>{data.emoji}</span>
              <div>
                <span style={{ fontSize: "9px", fontWeight: 800, color: data.color, textTransform: "uppercase", letterSpacing: "1px" }}>
                  Bite-Sized Focus Block
                </span>
                <h3 style={{ fontSize: "18px", fontWeight: 800, color: "#fff" }}>
                  {data.title} Checklist
                </h3>
              </div>
            </div>

            {/* Checklist items list */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", flex: 1, marginBottom: "20px" }}>
              {data.examples.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                    background: "rgba(255, 255, 255, 0.02)",
                    border: "1px solid rgba(255, 255, 255, 0.04)",
                    borderRadius: "10px",
                    padding: "10px 12px",
                    fontSize: "12.5px",
                    color: "rgba(255,255,255,0.85)",
                    animation: `fadeInUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) both`,
                    animationDelay: `${idx * 0.08}s`
                  }}
                >
                  <span style={{ color: data.color }}>⬜</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Simulated UI action bar */}
            <div style={{ borderTop: "1px solid rgba(255, 255, 255, 0.06)", paddingTop: "14px", display: "flex", justifyItems: "space-between", justifyContent: "space-between", alignItems: "center", fontSize: "11px", color: "var(--text-dim)" }}>
              <span>⏱️ Estimated Focus: 15 mins</span>
              <span style={{ color: data.color, fontWeight: 700 }}>Auto-extracted via AI Coach</span>
            </div>

          </div>

        </div>

      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}

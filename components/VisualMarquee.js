"use client";

import { useEffect, useState } from "react";

const COMMUNITY_CARDS = [
  { text: "📚 Finished 3 chapters of biology study guide", user: "@visha_r" },
  { text: "💻 Completed 45 minutes of coding practice", user: "@alex_k" },
  { text: "💪 Spent 20 minutes doing full-body stretches", user: "@sarah_m" },
  { text: "⚡ Reduced Instagram screen usage by 80%", user: "@jordan_l" },
  { text: "🇫🇷 Memorized 15 French vocabulary verbs", user: "@emma_d" },
  { text: "🧠 Solved 3 complex algorithmic problems", user: "@tyler_p" },
  { text: "🎨 Drew 2 high-fidelity UI wireframe templates", user: "@kloe_t" },
  { text: "✍️ Wrote a complete project summary document", user: "@danny_c" }
];

export default function VisualMarquee() {
  const [tasksCount, setTasksCount] = useState(19750);
  const [hoursCount, setHoursCount] = useState(4880);
  const [usersCount, setUsersCount] = useState(940);

  // Smooth counter animation on load
  useEffect(() => {
    const duration = 2000; // 2 seconds
    const intervalTime = 30; // 30ms step
    const steps = duration / intervalTime;

    const tasksIncrement = (20000 - 19750) / steps;
    const hoursIncrement = (5000 - 4880) / steps;
    const usersIncrement = (1000 - 940) / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      if (currentStep >= steps) {
        setTasksCount(20000);
        setHoursCount(5000);
        setUsersCount(1000);
        clearInterval(timer);
      } else {
        setTasksCount((prev) => Math.round(prev + tasksIncrement));
        setHoursCount((prev) => Math.round(prev + hoursIncrement));
        setUsersCount((prev) => Math.round(prev + usersIncrement));
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      id="community" 
      style={{
        padding: "60px 0 80px 0",
        background: "rgba(5, 5, 8, 0.4)",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid rgba(255, 255, 255, 0.03)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.03)",
        zIndex: 5
      }}
    >
      {/* Background radial gradient */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "800px",
        height: "200px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(72, 207, 173, 0.03) 0%, transparent 80%)",
        filter: "blur(50px)",
        pointerEvents: "none"
      }} />

      <div className="container">
        
        {/* BLINKIST CREDIBILITY COUNTERS STRIP */}
        <div 
          className="reveal-element"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
            textAlign: "center",
            marginBottom: "64px",
            background: "rgba(255, 255, 255, 0.01)",
            border: "1px solid rgba(255, 255, 255, 0.04)",
            borderRadius: "24px",
            padding: "40px 24px",
            backdropFilter: "blur(12px)"
          }}
        >
          {/* Stat 1 */}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <span style={{
              fontSize: "clamp(32px, 5vw, 48px)",
              fontWeight: 850,
              background: "linear-gradient(135deg, #6c63ff, #63b3ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              letterSpacing: "-1.5px",
              fontVariantNumeric: "tabular-nums"
            }}>
              {tasksCount.toLocaleString()}+
            </span>
            <span style={{
              fontSize: "11px",
              fontWeight: 800,
              color: "var(--text-muted)",
              textTransform: "uppercase",
              letterSpacing: "1px"
            }}>
              Tasks Completed
            </span>
          </div>

          {/* Stat 2 */}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", borderLeft: "1px solid rgba(255,255,255,0.06)", borderRight: "1px solid rgba(255,255,255,0.06)" }}>
            <span style={{
              fontSize: "clamp(32px, 5vw, 48px)",
              fontWeight: 850,
              background: "linear-gradient(135deg, #48cfad, #63b3ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              letterSpacing: "-1.5px",
              fontVariantNumeric: "tabular-nums"
            }}>
              {hoursCount.toLocaleString()}+
            </span>
            <span style={{
              fontSize: "11px",
              fontWeight: 800,
              color: "var(--text-muted)",
              textTransform: "uppercase",
              letterSpacing: "1px"
            }}>
              Hours of Focus Saved
            </span>
          </div>

          {/* Stat 3 */}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <span style={{
              fontSize: "clamp(32px, 5vw, 48px)",
              fontWeight: 850,
              background: "linear-gradient(135deg, #6c63ff, #48cfad)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              letterSpacing: "-1.5px",
              fontVariantNumeric: "tabular-nums"
            }}>
              {usersCount.toLocaleString()}+
            </span>
            <span style={{
              fontSize: "11px",
              fontWeight: 800,
              color: "var(--text-muted)",
              textTransform: "uppercase",
              letterSpacing: "1px"
            }}>
              Beta Testers Active
            </span>
          </div>
        </div>

        {/* FOCUSMATE COMMUNITY ACHIEVEMENTS MARQUEE */}
        <div style={{ textAlign: "center", marginBottom: "28px" }} className="reveal-element">
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
            Human Achievements Hub
          </span>
          <h3 style={{
            fontSize: "24px",
            fontWeight: 800,
            color: "#fff",
            marginTop: "16px",
            letterSpacing: "-0.5px"
          }}>
            What people are achieving in focus blocks
          </h3>
        </div>

        {/* Horizontally scrolling marquee track */}
        <div className="marquee-container reveal-element" style={{ width: "100%" }}>
          <div className="marquee-content">
            {/* First render of cards */}
            {COMMUNITY_CARDS.map((card, idx) => (
              <div 
                key={idx}
                style={{
                  background: "rgba(255, 255, 255, 0.02)",
                  border: "1px solid rgba(255, 255, 255, 0.06)",
                  borderRadius: "16px",
                  padding: "16px 20px",
                  display: "inline-flex",
                  flexDirection: "column",
                  gap: "6px",
                  minWidth: "260px",
                  backdropFilter: "blur(8px)"
                }}
              >
                <p style={{ fontSize: "13.5px", color: "#f5f5f7", fontWeight: 500, whiteSpace: "normal" }}>
                  {card.text}
                </p>
                <span style={{ fontSize: "11px", color: "var(--text-dim)", fontWeight: 600 }}>
                  {card.user}
                </span>
              </div>
            ))}

            {/* Duplicated render of cards for infinite looping without gap */}
            {COMMUNITY_CARDS.map((card, idx) => (
              <div 
                key={`dup-${idx}`}
                style={{
                  background: "rgba(255, 255, 255, 0.02)",
                  border: "1px solid rgba(255, 255, 255, 0.06)",
                  borderRadius: "16px",
                  padding: "16px 20px",
                  display: "inline-flex",
                  flexDirection: "column",
                  gap: "6px",
                  minWidth: "260px",
                  backdropFilter: "blur(8px)"
                }}
              >
                <p style={{ fontSize: "13.5px", color: "#f5f5f7", fontWeight: 500, whiteSpace: "normal" }}>
                  {card.text}
                </p>
                <span style={{ fontSize: "11px", color: "var(--text-dim)", fontWeight: 600 }}>
                  {card.user}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

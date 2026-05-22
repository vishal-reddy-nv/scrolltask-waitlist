"use client";

export default function Problem() {
  const problems = [
    {
      title: "“I opened Instagram for 5 minutes...”",
      desc: "...and suddenly an hour disappeared.",
      accent: "rgba(240, 148, 89, 0.15)", // Instagram pink-orange tint
      icon: "📱",
      badge: "Time Wasted"
    },
    {
      title: "“I want to learn something...”",
      desc: "...but scrolling fills every free moment.",
      accent: "rgba(108, 99, 255, 0.15)", // Brand purple tint
      icon: "📚",
      badge: "Procrastination"
    },
    {
      title: "“Screen blockers don't work”",
      desc: "...they feel restrictive instead of motivating.",
      accent: "rgba(255, 107, 107, 0.15)", // Red blocker tint
      icon: "🔒",
      badge: "Willpower Fail"
    }
  ];

  return (
    <section 
      id="problem" 
      className="section-padding" 
      style={{ 
        position: "relative",
        background: "linear-gradient(to bottom, transparent, rgba(10, 10, 20, 0.4), transparent)",
        zIndex: 5
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="reveal-element" style={{ textAlign: "center", marginBottom: "64px" }}>
          <h2 style={{
            fontSize: "clamp(28px, 4vw, 42px)",
            fontWeight: 800,
            color: "#ffffff",
            marginBottom: "16px",
            letterSpacing: "-1px"
          }}>
            Scrolling keeps <span style={{ color: "#ff6b6b" }}>winning</span>.
          </h2>
          <p style={{
            fontSize: "16px",
            color: "var(--text-muted)",
            maxWidth: "580px",
            margin: "0 auto",
            lineHeight: 1.6
          }}>
            Social media feeds are literally engineered to capture your attention. Willpower alone cannot compete with algorithms designed by teams of PhDs.
          </p>
        </div>

        {/* 3 Cards Layout */}
        <div 
          className="problem-cards-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
          }}
        >


          {problems.map((prob, idx) => (
            <div 
              key={idx}
              className={`card-glass reveal-element stagger-${idx + 1}`}
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                padding: "36px 28px",
                overflow: "hidden",
                cursor: "default"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 15px 30px rgba(0,0,0,0.3), 0 0 30px ${prob.accent}`;
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = "var(--card-border)";
              }}
            >
              {/* Background ambient glow matching card accent color */}
              <div style={{
                position: "absolute",
                top: "-50px",
                right: "-50px",
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                background: `radial-gradient(circle, ${prob.accent} 0%, transparent 70%)`,
                filter: "blur(20px)",
                pointerEvents: "none",
                zIndex: 0
              }} />

              {/* Card Badge */}
              <span style={{
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                padding: "4px 10px",
                borderRadius: "20px",
                fontSize: "11px",
                fontWeight: 600,
                color: "var(--text-muted)",
                marginBottom: "24px",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                zIndex: 5
              }}>
                {prob.badge}
              </span>

              {/* Quote Mark Icon */}
              <span style={{
                fontSize: "40px",
                color: "rgba(255,255,255,0.06)",
                fontFamily: "Georgia, serif",
                lineHeight: 1,
                position: "absolute",
                top: "70px",
                left: "24px",
                pointerEvents: "none"
              }}>
                “
              </span>

              {/* Main Headline */}
              <h3 style={{
                fontSize: "19px",
                fontWeight: 700,
                color: "#ffffff",
                lineHeight: 1.4,
                marginBottom: "12px",
                zIndex: 5,
                paddingLeft: "12px"
              }}>
                {prob.title}
              </h3>

              {/* Sub-text */}
              <p style={{
                fontSize: "14px",
                color: "var(--text-muted)",
                lineHeight: 1.5,
                zIndex: 5,
                paddingLeft: "12px"
              }}>
                {prob.desc}
              </p>

              {/* Visual Icon Badge in corner */}
              <span style={{
                position: "absolute",
                bottom: "20px",
                right: "24px",
                fontSize: "20px",
                opacity: 0.8,
                zIndex: 5
              }}>
                {prob.icon}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

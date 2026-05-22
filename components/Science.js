"use client";

export default function Science() {
  const principles = [
    {
      badge: "The Trap",
      title: "1. The Doomscroll Loop",
      desc: "Social algorithms are engineered to exploit your dopamine pathways, trapping you in overstimulation loops. Screen blockers fail because they rely on willpower; ScrollTask intercepts the loop and redirects it.",
      image: "/images/doomscroll_trap.png",
      glow: "rgba(108, 99, 255, 0.15)"
    },
    {
      badge: "The Friction",
      title: "2. The Intimidation Gap",
      desc: "High goals feel like climbing a ladder with missing rungs—the sheer friction causes immediate procrastination. By reducing the height of the first step, you start climbing with zero psychological resistance.",
      image: "/images/micro_steps_ladder.png",
      glow: "rgba(72, 207, 173, 0.15)"
    },
    {
      badge: "The Spark",
      title: "3. Cascading Momentum",
      desc: "Starting is always the hardest part. Clearing a single, tiny 2-minute focus task acts like a small falling domino—it triggers a powerful cascade of momentum that naturally tips over massive accomplishments.",
      image: "/images/domino_momentum.png",
      glow: "rgba(99, 179, 255, 0.15)"
    },
    {
      badge: "The Reward",
      title: "4. Dopamine Hills",
      desc: "Your brain rejects a single, far-away peak on a giant mountain. ScrollTask transforms that intimidating summit into a sequence of small, immediate hills—rewarding you instantly to build lasting habit loops.",
      image: "/images/focus_peaks.png",
      glow: "rgba(168, 164, 255, 0.15)"
    }
  ];

  return (
    <section 
      id="science" 
      className="section-padding" 
      style={{ 
        position: "relative",
        background: "rgba(4, 4, 7, 0.75)",
        borderTop: "1px solid rgba(255, 255, 255, 0.03)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.03)",
        zIndex: 5
      }}
    >
      {/* Background radial highlight */}
      <div style={{
        position: "absolute",
        top: "30%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "500px",
        height: "500px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(108, 99, 255, 0.03) 0%, transparent 70%)",
        filter: "blur(50px)",
        pointerEvents: "none",
        zIndex: 0
      }} />

      <div className="container">
        
        {/* Section Header */}
        <div className="reveal-element" style={{ textAlign: "center", marginBottom: "64px" }}>
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
            The Science of Focus
          </span>
          <h2 style={{
            fontSize: "clamp(28px, 4vw, 42px)",
            fontWeight: 800,
            color: "#ffffff",
            marginTop: "16px",
            marginBottom: "16px",
            letterSpacing: "-1.5px"
          }}>
            Why willpower fails, and <span className="text-gradient">how we fix it</span>
          </h2>
          <p style={{
            fontSize: "16px",
            color: "var(--text-muted)",
            maxWidth: "560px",
            margin: "0 auto",
            lineHeight: 1.6
          }}>
            ScrollTask isn't just an app—it's built on proven behavioral psychology principles that hack your brain's natural reward loops.
          </p>
        </div>

        {/* 2x2 Grid of visual cards */}
        <div 
          className="science-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "32px",
          }}
        >
          {principles.map((pr, idx) => (
            <div 
              key={idx}
              className={`card-glass reveal-element stagger-${idx + 1}`}
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "24px",
                borderRadius: "24px",
                background: "rgba(10, 10, 20, 0.4)",
                border: "1px solid rgba(255, 255, 255, 0.05)",
                overflow: "hidden",
                cursor: "default",
                transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = `0 20px 40px rgba(0,0,0,0.4), 0 0 25px ${pr.glow}`;
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.05)";
              }}
            >
              {/* Image Box */}
              <div style={{
                width: "100%",
                height: "220px",
                borderRadius: "16px",
                overflow: "hidden",
                marginBottom: "20px",
                border: "1px solid rgba(255, 255, 255, 0.03)",
                background: "#08080f",
                position: "relative"
              }}>
                <img 
                  src={pr.image} 
                  alt={pr.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.5s"
                  }}
                  onMouseEnter={(e) => e.target.style.transform = "scale(1.03)"}
                  onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
                />
              </div>

              {/* Text Area */}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{
                    fontSize: "9px",
                    fontWeight: 800,
                    color: "#48cfad",
                    background: "rgba(72, 207, 173, 0.08)",
                    padding: "3px 8px",
                    borderRadius: "8px",
                    textTransform: "uppercase"
                  }}>
                    {pr.badge}
                  </span>
                </div>
                
                <h3 style={{
                  fontSize: "19px",
                  fontWeight: 800,
                  color: "#ffffff",
                  letterSpacing: "-0.3px",
                  marginTop: "6px"
                }}>
                  {pr.title}
                </h3>
                
                <p style={{
                  fontSize: "13.5px",
                  color: "var(--text-muted)",
                  lineHeight: 1.55,
                  marginTop: "4px"
                }}>
                  {pr.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Grid styling to handle responsiveness */}
      <style jsx>{`
        @media (max-width: 991px) {
          .science-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}

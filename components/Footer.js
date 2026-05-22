"use client";

export default function Footer() {
  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer 
      style={{
        background: "rgba(3, 3, 6, 0.95)",
        borderTop: "1px solid rgba(255, 255, 255, 0.05)",
        padding: "60px 24px 40px 24px",
        position: "relative",
        zIndex: 5
      }}
    >
      <div className="container">
        
        {/* Top footer row */}
        <div 
          className="footer-row"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "32px",
            marginBottom: "40px"
          }}
        >


          {/* Left Column: Brand */}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-start" }} className="footer-row">
            <a href="#" onClick={handleScrollToTop} style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontWeight: 800,
              fontSize: "20px",
              letterSpacing: "-0.5px",
            }}>
              <div style={{
                width: "24px",
                height: "24px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #6c63ff, #48cfad)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 10px rgba(108, 99, 255, 0.25)",
              }}>
                <svg width="24" height="24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 50 12 A 38 38 0 1 1 17 69" stroke="#ffffff" strokeWidth="10" strokeLinecap="round" />
                  <path d="M 26 48 L 46 68 L 76 28" stroke="#ffffff" strokeWidth="11" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="text-gradient" style={{ fontWeight: 800 }}>ScrollTask</span>
            </a>
            <p style={{
              fontSize: "13.5px",
              color: "var(--text-muted)",
              fontWeight: 500
            }}>
              Turn scrolling into progress.
            </p>
          </div>

          {/* Right Column: Contact & Socials */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "flex-end" }} className="footer-row">
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
              <span style={{ fontSize: "12.5px", color: "var(--text-muted)", fontWeight: 500, textAlign: "center" }}>
                scrolltaskapp@gmail.com
              </span>
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=scrolltaskapp@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  fontSize: "14px",
                  color: "var(--text-main)",
                  fontWeight: 600,
                  textDecoration: "none",
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.06)",
                  padding: "10px 18px",
                  borderRadius: "12px",
                  transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.background = "rgba(108, 99, 255, 0.08)";
                  e.currentTarget.style.borderColor = "rgba(108, 99, 255, 0.25)";
                  e.currentTarget.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--text-main)";
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.03)";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.06)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2.2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span>Mail us for queries</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "16px",
          paddingTop: "24px",
          borderTop: "1px solid rgba(255, 255, 255, 0.04)"
        }} className="footer-row">
          <p style={{
            fontSize: "12.5px",
            color: "var(--text-dim)",
            fontWeight: 500
          }}>
            © {new Date().getFullYear()} ScrollTask. All rights reserved. Built with Next.js App Router.
          </p>

          <a 
            href="#" 
            onClick={handleScrollToTop}
            style={{
              fontSize: "12.5px",
              color: "var(--text-dim)",
              fontWeight: 500,
              display: "inline-flex",
              alignItems: "center",
              gap: "4px",
              transition: "color 0.2s"
            }}
            onMouseEnter={(e) => e.target.style.color = "#fff"}
            onMouseLeave={(e) => e.target.style.color = "var(--text-dim)"}
          >
            <span>Back to top</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

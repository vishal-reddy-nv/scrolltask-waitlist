"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      zIndex: 1000,
      padding: scrolled ? "16px 24px" : "24px 24px",
      background: scrolled ? "rgba(5, 5, 8, 0.85)" : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(255, 255, 255, 0.06)" : "1px solid transparent",
      transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
    }}>
      <div className="container" style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        {/* Logo */}
        <a href="#" onClick={(e) => handleScrollTo(e, "hero")} style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          fontWeight: 800,
          fontSize: "22px",
          letterSpacing: "-0.5px",
        }}>
          {/* Brand Mark checkmark */}
          <div style={{
            width: "28px",
            height: "28px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #6c63ff, #48cfad)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 0 12px rgba(108, 99, 255, 0.3)",
          }}>
            <svg width="28" height="28" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M 50 12 A 38 38 0 1 1 17 69" stroke="#ffffff" strokeWidth="10" strokeLinecap="round" />
              <path d="M 26 48 L 46 68 L 76 28" stroke="#ffffff" strokeWidth="11" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span className="text-gradient" style={{ fontWeight: 800 }}>ScrollTask</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav style={{
          display: "flex",
          alignItems: "center",
          gap: "32px",
        }} className="desktop-only-nav">
          <a href="#how-it-works" onClick={(e) => handleScrollTo(e, "how-it-works")} style={{ fontSize: "14px", fontWeight: 500, color: "var(--text-muted)", transition: "color 0.2s" }} onMouseEnter={(e) => e.target.style.color = "#fff"} onMouseLeave={(e) => e.target.style.color = "var(--text-muted)"}>How it Works</a>
          <a href="#interests" onClick={(e) => handleScrollTo(e, "interests")} style={{ fontSize: "14px", fontWeight: 500, color: "var(--text-muted)", transition: "color 0.2s" }} onMouseEnter={(e) => e.target.style.color = "#fff"} onMouseLeave={(e) => e.target.style.color = "var(--text-muted)"}>Interests</a>
          <a href="#features" onClick={(e) => handleScrollTo(e, "features")} style={{ fontSize: "14px", fontWeight: 500, color: "var(--text-muted)", transition: "color 0.2s" }} onMouseEnter={(e) => e.target.style.color = "#fff"} onMouseLeave={(e) => e.target.style.color = "var(--text-muted)"}>Features</a>
        </nav>

        {/* CTA Repeated Button */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <a
            href="#waitlist"
            onClick={(e) => handleScrollTo(e, "waitlist")}
            className="btn btn-secondary desktop-only-nav"
            style={{
              padding: "10px 20px",
              fontSize: "13px",
              borderRadius: "10px",
              border: "1px solid rgba(108, 99, 255, 0.25)",
              color: "#a8a4ff"
            }}
          >
            Get Early Access 🚀
          </a>

          {/* Mobile Menu Toggle Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#fff",
              padding: "8px",
            }}
            className="mobile-toggle-btn"
          >
            {mobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div style={{
          position: "fixed",
          top: "100%",
          left: 0,
          width: "100%",
          background: "rgba(5, 5, 8, 0.98)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          animation: "menuSlideDown 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        }}>
          <a href="#how-it-works" onClick={(e) => handleScrollTo(e, "how-it-works")} style={{ fontSize: "16px", fontWeight: 600, color: "var(--text-muted)" }}>How it Works</a>
          <a href="#interests" onClick={(e) => handleScrollTo(e, "interests")} style={{ fontSize: "16px", fontWeight: 600, color: "var(--text-muted)" }}>Interests</a>
          <a href="#features" onClick={(e) => handleScrollTo(e, "features")} style={{ fontSize: "16px", fontWeight: 600, color: "var(--text-muted)" }}>Features</a>
          
          <a 
            href="#waitlist" 
            onClick={(e) => handleScrollTo(e, "waitlist")}
            className="btn btn-primary"
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "8px",
            }}
          >
            Get Early Access 🚀
          </a>
        </div>
      )}
    </header>
  );
}

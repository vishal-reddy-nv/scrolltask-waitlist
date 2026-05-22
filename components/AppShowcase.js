"use client";

import { useState, useEffect } from "react";

export default function AppShowcase() {
  const [activeTab, setActiveTab] = useState("fitness");
  const [pushupCount, setPushupCount] = useState(4);
  const [demoStep, setDemoStep] = useState(1); // For interactive loop if they click elements

  // Auto-increment pushup count in mock camera to make it feel alive!
  useEffect(() => {
    const interval = setInterval(() => {
      setPushupCount((prev) => (prev >= 12 ? 4 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="app-showcase" 
      style={{
        padding: "100px 24px",
        background: "radial-gradient(circle at 50% 50%, rgba(13, 14, 34, 0.6) 0%, rgba(5, 5, 8, 1) 100%)",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid rgba(255, 255, 255, 0.03)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.03)",
        zIndex: 5
      }}
    >
      {/* Background glow effects */}
      <div style={{
        position: "absolute",
        top: "20%",
        left: "50%",
        transform: "translateX(-50%)",
        width: "600px",
        height: "600px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(108, 99, 255, 0.08) 0%, transparent 70%)",
        filter: "blur(60px)",
        pointerEvents: "none",
        zIndex: 1
      }} />

      <div style={{
        position: "absolute",
        bottom: "10%",
        left: "15%",
        width: "300px",
        height: "300px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(72, 207, 173, 0.05) 0%, transparent 70%)",
        filter: "blur(40px)",
        pointerEvents: "none",
        zIndex: 1
      }} />

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }} className="reveal-element">
          <span className="badge-soon" style={{ marginBottom: "16px" }}>
            Now in Private Beta
          </span>
          <h2 style={{
            fontSize: "clamp(32px, 5vw, 44px)",
            fontWeight: 850,
            color: "#fff",
            letterSpacing: "-1.5px",
            lineHeight: 1.15,
            marginBottom: "16px"
          }}>
            Addictive design, <span className="text-gradient">turned inside out</span>
          </h2>
          <p style={{
            fontSize: "clamp(15px, 2vw, 17px)",
            color: "var(--text-muted)",
            maxWidth: "640px",
            margin: "0 auto",
            lineHeight: 1.6
          }}>
            ScrollTask intercepts your mindless scrolls on mobile and desktop, prompting you to earn focus minutes through physical or mental high-performance habits.
          </p>
        </div>

        {/* 3D Overlapping Phone Mockup Layout */}
        <div className="reveal-element" style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          width: "100%",
          maxWidth: "1000px",
          margin: "0 auto 40px auto",
          padding: "40px 0",
          perspective: "1000px",
        }}>
          
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
            width: "100%",
            alignItems: "center",
          }} className="showcase-grid">
            
            {/* PHONE 1: INTERCEPT SCREEN (LEFT) */}
            <div className="showcase-phone-wrapper left" style={{
              transform: "rotateY(12deg) rotateX(4deg) translateZ(-40px) scale(0.95)",
              transition: "var(--transition-smooth)",
              zIndex: 1,
            }}>
              <div className="phone-shell" style={phoneShellStyle}>
                <div className="phone-screen" style={{
                  ...phoneScreenStyle,
                  background: "linear-gradient(180deg, #090b1e 0%, #03040a 100%)",
                }}>
                  {/* Status Bar */}
                  <div style={statusBarStyle}>
                    <span>9:41</span>
                    <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
                      {cellIcon}
                      {wifiIcon}
                      {batteryIcon}
                    </div>
                  </div>

                  {/* App Notch */}
                  <div style={phoneNotchStyle} />

                  {/* Screen Content */}
                  <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-between",
                    height: "100%",
                    padding: "36px 20px 24px 20px",
                  }}>
                    <div style={{ width: "100%", textAlign: "center", marginTop: "30px" }}>
                      
                      {/* Intercept Icon / Instagram logo */}
                      <div style={{
                        position: "relative",
                        width: "68px",
                        height: "68px",
                        margin: "0 auto 24px auto",
                        borderRadius: "18px",
                        background: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 8px 24px rgba(214, 36, 159, 0.3)"
                      }}>
                        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>

                        {/* Lock Badge overlay */}
                        <div style={{
                          position: "absolute",
                          bottom: "-4px",
                          right: "-4px",
                          background: "#e74c3c",
                          width: "24px",
                          height: "24px",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          border: "2px solid #090b1e",
                          boxShadow: "0 2px 8px rgba(0,0,0,0.5)"
                        }}>
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                          </svg>
                        </div>
                      </div>

                      {/* Header */}
                      <h3 style={{
                        fontSize: "20px",
                        fontWeight: 800,
                        color: "#fff",
                        marginBottom: "12px",
                        letterSpacing: "-0.5px"
                      }}>
                        🔒 Instagram is<br />Blocked by ScrollTask
                      </h3>

                      <p style={{
                        fontSize: "12px",
                        color: "rgba(255, 255, 255, 0.5)",
                        lineHeight: 1.5,
                        padding: "0 10px"
                      }}>
                        You ran out of focus minutes on your scrolling budget. Complete a micro-task to unlock 20 more minutes.
                      </p>
                    </div>

                    {/* Action buttons */}
                    <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "10px" }}>
                      <button 
                        onClick={() => setDemoStep(2)}
                        className="shimmer-effect"
                        style={{
                          width: "100%",
                          padding: "13px",
                          borderRadius: "12px",
                          border: "none",
                          background: "#fff",
                          color: "#050508",
                          fontWeight: 700,
                          fontSize: "13.5px",
                          cursor: "pointer",
                          boxShadow: "0 4px 15px rgba(255,255,255,0.15)",
                          transition: "var(--transition-smooth)"
                        }}
                      >
                        Start Focus Task
                      </button>

                      <button 
                        style={{
                          width: "100%",
                          padding: "13px",
                          borderRadius: "12px",
                          border: "1px solid rgba(255, 255, 255, 0.08)",
                          background: "rgba(255,255,255,0.02)",
                          color: "rgba(255,255,255,0.6)",
                          fontWeight: 600,
                          fontSize: "13px",
                          cursor: "pointer",
                          transition: "var(--transition-smooth)"
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.background = "rgba(255,255,255,0.05)";
                          e.target.style.color = "#fff";
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.background = "rgba(255,255,255,0.02)";
                          e.target.style.color = "rgba(255,255,255,0.6)";
                        }}
                      >
                        Close App
                      </button>
                    </div>
                  </div>

                  {/* Home Indicator */}
                  <div style={homeIndicatorStyle} />
                </div>
              </div>
            </div>

            {/* PHONE 2: CAMERA AI POSE TRACKER (CENTER) */}
            <div className="showcase-phone-wrapper center" style={{
              transform: "translateZ(30px) scale(1.05)",
              transition: "var(--transition-smooth)",
              zIndex: 3,
            }}>
              <div className="phone-shell" style={{
                ...phoneShellStyle,
                border: "1px solid rgba(255, 255, 255, 0.15)",
                boxShadow: "0 30px 60px rgba(0, 0, 0, 0.7), 0 0 50px rgba(108, 99, 255, 0.15)"
              }}>
                <div className="phone-screen" style={{
                  ...phoneScreenStyle,
                  background: "#080913"
                }}>
                  {/* Status Bar */}
                  <div style={statusBarStyle}>
                    <span>9:41</span>
                    <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
                      {cellIcon}
                      {wifiIcon}
                      <span style={{ fontSize: "9px", background: "rgba(255,255,255,0.15)", padding: "2px 5px", borderRadius: "10px", fontWeight: 700, letterSpacing: "0.2px" }}>0:23</span>
                    </div>
                  </div>

                  {/* App Notch */}
                  <div style={phoneNotchStyle} />

                  {/* Camera tracking skeleton preview */}
                  <div style={{
                    position: "absolute",
                    top: "36px",
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: "url('https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=600&auto=format&fit=crop')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}>
                    {/* Shadow overlay to make text readable */}
                    <div style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to bottom, rgba(5,5,8,0.7) 0%, transparent 30%, transparent 70%, rgba(5,5,8,0.85) 100%)",
                      zIndex: 1
                    }} />

                    {/* AI Skeleton Overlay Lines (SVG overlay for pose detection) */}
                    <svg style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      zIndex: 2,
                      pointerEvents: "none"
                    }}>
                      {/* Dynamic simulated joints & skeletal nodes matching the Unsplash pushup guy */}
                      {/* Left Arm */}
                      <line x1="80" y1="180" x2="90" y2="220" stroke="#fff" strokeWidth="2.5" strokeDasharray="3 3" />
                      <line x1="90" y1="220" x2="60" y2="280" stroke="#fff" strokeWidth="2.5" />
                      
                      {/* Right Arm */}
                      <line x1="160" y1="180" x2="180" y2="220" stroke="#fff" strokeWidth="2.5" strokeDasharray="3 3" />
                      <line x1="180" y1="220" x2="210" y2="280" stroke="#fff" strokeWidth="2.5" />
                      
                      {/* Torso & Head */}
                      <line x1="120" y1="150" x2="120" y2="210" stroke="#48cfad" strokeWidth="3" />
                      <line x1="80" y1="180" x2="160" y2="180" stroke="#48cfad" strokeWidth="2.5" />
                      
                      {/* Spine / Legs */}
                      <line x1="120" y1="210" x2="135" y2="300" stroke="#6c63ff" strokeWidth="2.5" />
                      
                      {/* Keypoint Joint Dots */}
                      <circle cx="120" cy="142" r="5" fill="#48cfad" stroke="#fff" strokeWidth="1.5" /> {/* Nose/Head */}
                      <circle cx="108" cy="138" r="3.5" fill="#48cfad" /> {/* Eye L */}
                      <circle cx="132" cy="138" r="3.5" fill="#48cfad" /> {/* Eye R */}
                      
                      <circle cx="80" cy="180" r="6" fill="#6c63ff" stroke="#fff" strokeWidth="1.5" />  {/* Shoulder L */}
                      <circle cx="160" cy="180" r="6" fill="#6c63ff" stroke="#fff" strokeWidth="1.5" /> {/* Shoulder R */}
                      
                      <circle cx="90" cy="220" r="5" fill="#48cfad" stroke="#fff" strokeWidth="1.5" />  {/* Elbow L */}
                      <circle cx="180" cy="220" r="5" fill="#48cfad" stroke="#fff" strokeWidth="1.5" /> {/* Elbow R */}
                      
                      <circle cx="60" cy="280" r="6.5" fill="#ffcd38" stroke="#fff" strokeWidth="2" />  {/* Hand L */}
                      <circle cx="210" cy="280" r="6.5" fill="#ffcd38" stroke="#fff" strokeWidth="2" /> {/* Hand R */}
                      
                      <circle cx="120" cy="210" r="5.5" fill="#6c63ff" stroke="#fff" strokeWidth="1.5" /> {/* Hip */}
                      <circle cx="135" cy="300" r="5.5" fill="#6c63ff" stroke="#fff" strokeWidth="1.5" /> {/* Knee */}
                    </svg>

                    {/* Camera Top Bar */}
                    <div style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "16px",
                      position: "relative",
                      zIndex: 3
                    }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                        {/* Pose tracking activity indicator */}
                        <div style={{
                          width: "20px",
                          height: "10px",
                          display: "flex",
                          flexDirection: "column",
                          gap: "2px"
                        }}>
                          <div style={{ width: "100%", height: "2px", background: "#48cfad", borderRadius: "1px" }} />
                          <div style={{ width: "60%", height: "2px", background: "#48cfad", borderRadius: "1px" }} />
                          <div style={{ width: "80%", height: "2px", background: "#48cfad", borderRadius: "1px" }} />
                        </div>
                        <span style={{ fontSize: "11px", fontWeight: 800, color: "#fff", textTransform: "uppercase", letterSpacing: "0.5px" }}>Pushscroll AI</span>
                      </div>
                      
                      {/* Active Indicator dot */}
                      <div style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        background: "rgba(0,0,0,0.5)",
                        padding: "4px 8px",
                        borderRadius: "10px"
                      }}>
                        <span style={{ width: "6px", height: "6px", background: "#e74c3c", borderRadius: "50%", display: "inline-block", animation: "pulse-dot 1.5s infinite" }} />
                        <span style={{ fontSize: "10px", fontWeight: 700, color: "#fff" }}>LOCKED ON</span>
                      </div>
                    </div>

                    {/* Bottom overlay card */}
                    <div style={{
                      padding: "20px",
                      position: "relative",
                      zIndex: 3,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "16px",
                      width: "100%"
                    }}>
                      {/* Big Circle counter */}
                      <div style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "50%",
                        background: "linear-gradient(135deg, #0076ff, #00a5ff)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 8px 24px rgba(0, 118, 255, 0.4)",
                        border: "2px solid rgba(255, 255, 255, 0.25)",
                        animation: "float 4s ease-in-out infinite"
                      }}>
                        <span style={{ fontSize: "28px", fontWeight: 900, color: "#fff", fontVariantNumeric: "tabular-nums" }}>
                          {pushupCount}
                        </span>
                      </div>

                      {/* Add Minutes CTA Button */}
                      <button 
                        style={{
                          width: "100%",
                          padding: "14px",
                          borderRadius: "12px",
                          border: "none",
                          background: "linear-gradient(90deg, #0052d4, #4364f7, #6fb1fc)",
                          color: "#fff",
                          fontWeight: 800,
                          fontSize: "13px",
                          letterSpacing: "0.2px",
                          cursor: "pointer",
                          boxShadow: "0 6px 20px rgba(67, 100, 247, 0.4)",
                          transition: "var(--transition-smooth)"
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.transform = "scale(1.02)";
                          e.target.style.boxShadow = "0 8px 25px rgba(67, 100, 247, 0.6)";
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.transform = "scale(1)";
                          e.target.style.boxShadow = "0 6px 20px rgba(67, 100, 247, 0.4)";
                        }}
                      >
                        Add 20 Minutes
                      </button>
                    </div>
                  </div>

                  {/* Home Indicator */}
                  <div style={{ ...homeIndicatorStyle, background: "rgba(255,255,255,0.7)" }} />
                </div>
              </div>
            </div>

            {/* PHONE 3: HABIT CATALOG DASHBOARD (RIGHT) */}
            <div className="showcase-phone-wrapper right" style={{
              transform: "rotateY(-12deg) rotateX(4deg) translateZ(-40px) scale(0.95)",
              transition: "var(--transition-smooth)",
              zIndex: 1,
            }}>
              <div className="phone-shell" style={phoneShellStyle}>
                <div className="phone-screen" style={{
                  ...phoneScreenStyle,
                  background: "#05060d",
                }}>
                  {/* Status Bar */}
                  <div style={statusBarStyle}>
                    <span>9:41</span>
                    <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
                      {cellIcon}
                      {wifiIcon}
                      {batteryIcon}
                    </div>
                  </div>

                  {/* App Notch */}
                  <div style={phoneNotchStyle} />

                  {/* Catalog Header */}
                  <div style={{
                    padding: "48px 16px 12px 16px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}>
                    <div style={{
                      width: "24px",
                      height: "24px",
                      borderRadius: "6px",
                      background: "linear-gradient(135deg, #6c63ff, #48cfad)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}>
                      <svg width="24" height="24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M 50 12 A 38 38 0 1 1 17 69" stroke="#ffffff" strokeWidth="10" strokeLinecap="round" />
                        <path d="M 26 48 L 46 68 L 76 28" stroke="#ffffff" strokeWidth="11" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span style={{ fontSize: "17px", fontWeight: 800, color: "#fff", letterSpacing: "-0.3px" }}>Fitness</span>
                  </div>

                  {/* Interactive Scrollable Catalog Content */}
                  <div style={{
                    flex: 1,
                    overflowY: "auto",
                    padding: "0 16px 60px 16px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                    scrollbarWidth: "none"
                  }} className="mobile-catalog-scroll">
                    
                    {/* Catalog section: Quick Hits */}
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "8px" }}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#00d1ff" strokeWidth="2.5">
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                        <span style={{ fontSize: "10.5px", fontWeight: 850, color: "#00d1ff", textTransform: "uppercase", letterSpacing: "0.5px" }}>Quick Hits</span>
                      </div>

                      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        {/* Item 1 */}
                        <div style={catalogItemStyle} onMouseEnter={handleCatalogHover} onMouseLeave={handleCatalogLeave}>
                          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                            {/* Thumb */}
                            <div style={{
                              width: "36px",
                              height: "36px",
                              borderRadius: "8px",
                              backgroundImage: "url('https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=150')",
                              backgroundSize: "cover",
                              backgroundPosition: "center"
                            }} />
                            <div>
                              <p style={{ fontSize: "12px", fontWeight: 700, color: "#fff", margin: 0 }}>Cardio-Core Blend</p>
                              <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.4)" }}>⏱️ Easy • Lower body</span>
                            </div>
                          </div>
                          {chevronIcon}
                        </div>

                        {/* Item 2 */}
                        <div style={catalogItemStyle} onMouseEnter={handleCatalogHover} onMouseLeave={handleCatalogLeave}>
                          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                            <div style={{
                              width: "36px",
                              height: "36px",
                              borderRadius: "8px",
                              backgroundImage: "url('https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=150')",
                              backgroundSize: "cover",
                              backgroundPosition: "center"
                            }} />
                            <div>
                              <p style={{ fontSize: "12px", fontWeight: 700, color: "#fff", margin: 0 }}>Chest & Core Jam</p>
                              <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.4)" }}>⏱️ Full • 10 min</span>
                            </div>
                          </div>
                          {chevronIcon}
                        </div>
                      </div>
                    </div>

                    {/* Catalog section: Standard */}
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "8px" }}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#2ecc71" strokeWidth="2.5">
                          <polygon points="12 2 2 22 22 22" />
                        </svg>
                        <span style={{ fontSize: "10.5px", fontWeight: 850, color: "#2ecc71", textTransform: "uppercase", letterSpacing: "0.5px" }}>Standard</span>
                      </div>

                      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        {/* Item 1 */}
                        <div style={catalogItemStyle} onMouseEnter={handleCatalogHover} onMouseLeave={handleCatalogLeave}>
                          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                            <div style={{
                              width: "36px",
                              height: "36px",
                              borderRadius: "8px",
                              backgroundImage: "url('https://images.unsplash.com/photo-1544033527-b192daee1f5b?q=80&w=150')",
                              backgroundSize: "cover",
                              backgroundPosition: "center"
                            }} />
                            <div>
                              <p style={{ fontSize: "12px", fontWeight: 700, color: "#fff", margin: 0 }}>Baseline Burner</p>
                              <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.4)" }}>⏱️ Upper • 20 min</span>
                            </div>
                          </div>
                          {chevronIcon}
                        </div>

                        {/* Item 2 */}
                        <div style={catalogItemStyle} onMouseEnter={handleCatalogHover} onMouseLeave={handleCatalogLeave}>
                          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                            <div style={{
                              width: "36px",
                              height: "36px",
                              borderRadius: "8px",
                              backgroundImage: "url('https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=150')",
                              backgroundSize: "cover",
                              backgroundPosition: "center"
                            }} />
                            <div>
                              <p style={{ fontSize: "12px", fontWeight: 700, color: "#fff", margin: 0 }}>Boss Fight</p>
                              <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.4)" }}>⏱️ Lower • 30 min</span>
                            </div>
                          </div>
                          {chevronIcon}
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Dashboard Bottom Tab Bar */}
                  <div style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: "56px",
                    background: "rgba(5, 6, 13, 0.85)",
                    backdropFilter: "blur(12px)",
                    borderTop: "1px solid rgba(255, 255, 255, 0.06)",
                    display: "grid",
                    gridTemplateColumns: "repeat(5, 1fr)",
                    alignItems: "center",
                    justifyItems: "center",
                    zIndex: 10,
                  }}>
                    {/* Home icon */}
                    <div style={tabIconStyle(activeTab === "home")} onClick={() => setActiveTab("home")}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                        <polyline points="9 22 9 12 15 12 15 22" />
                      </svg>
                      <span style={{ fontSize: "8px", marginTop: "3px", fontWeight: 700 }}>Home</span>
                    </div>

                    {/* Journey icon */}
                    <div style={tabIconStyle(activeTab === "journey")} onClick={() => setActiveTab("journey")}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polygon points="12 2 2 7 12 12 22 7 12 2" />
                        <polyline points="2 17 12 22 22 17" />
                        <polyline points="2 12 12 17 22 12" />
                      </svg>
                      <span style={{ fontSize: "8px", marginTop: "3px", fontWeight: 700 }}>Journey</span>
                    </div>

                    {/* Center Plus icon */}
                    <div style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #0076ff, #00d1ff)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 0 10px rgba(0,118,255,0.4)",
                      cursor: "pointer",
                    }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3">
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </div>

                    {/* Fitness icon (Active) */}
                    <div style={tabIconStyle(activeTab === "fitness")} onClick={() => setActiveTab("fitness")}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
                        <path d="M2 8h16v8H2z" />
                        <line x1="6" y1="12" x2="14" y2="12" />
                      </svg>
                      <span style={{ fontSize: "8px", marginTop: "3px", fontWeight: 700 }}>Fitness</span>
                    </div>

                    {/* Settings icon */}
                    <div style={tabIconStyle(activeTab === "settings")} onClick={() => setActiveTab("settings")}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <circle cx="12" cy="12" r="3" />
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                      </svg>
                      <span style={{ fontSize: "8px", marginTop: "3px", fontWeight: 700 }}>Settings</span>
                    </div>
                  </div>

                  {/* Home Indicator */}
                  <div style={homeIndicatorStyle} />
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Styled JSX for Showcase specific responsiveness */}
      <style jsx>{`
        .phone-shell {
          position: relative;
          width: 275px;
          height: 560px;
          border-radius: 40px;
          background: #18191f;
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 8px;
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.6), inset 0 0 3px rgba(255,255,255,0.1);
          margin: 0 auto;
        }

        .phone-screen {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 32px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .mobile-catalog-scroll::-webkit-scrollbar {
          display: none;
        }

        @media (max-width: 991px) {
          .showcase-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .showcase-phone-wrapper {
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}

/* --- Inline CSS Object Styles for Components --- */

const phoneShellStyle = {
  position: "relative",
  width: "275px",
  height: "560px",
  borderRadius: "40px",
  background: "#18191f",
  border: "1px solid rgba(255, 255, 255, 0.08)",
  padding: "8px",
  boxShadow: "0 20px 45px rgba(0, 0, 0, 0.6), inset 0 0 3px rgba(255,255,255,0.1)",
  margin: "0 auto",
  userSelect: "none"
};

const phoneScreenStyle = {
  position: "relative",
  width: "100%",
  height: "100%",
  borderRadius: "32px",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
};

const phoneNotchStyle = {
  position: "absolute",
  top: "0",
  left: "50%",
  transform: "translateX(-50%)",
  width: "110px",
  height: "26px",
  background: "#18191f",
  borderBottomLeftRadius: "15px",
  borderBottomRightRadius: "15px",
  zIndex: 100,
};

const statusBarStyle = {
  position: "absolute",
  top: "0",
  left: "0",
  width: "100%",
  height: "36px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 24px 0 24px",
  color: "#fff",
  fontSize: "11px",
  fontWeight: "700",
  zIndex: 99,
};

const homeIndicatorStyle = {
  position: "absolute",
  bottom: "6px",
  left: "50%",
  transform: "translateX(-50%)",
  width: "100px",
  height: "4px",
  borderRadius: "2px",
  background: "rgba(255, 255, 255, 0.4)",
  zIndex: 100,
};

const catalogItemStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 12px",
  background: "rgba(255, 255, 255, 0.02)",
  border: "1px solid rgba(255, 255, 255, 0.04)",
  borderRadius: "14px",
  cursor: "pointer",
  transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)"
};

const handleCatalogHover = (e) => {
  e.currentTarget.style.transform = "translateX(2px)";
  e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
};

const handleCatalogLeave = (e) => {
  e.currentTarget.style.transform = "none";
  e.currentTarget.style.background = "rgba(255, 255, 255, 0.02)";
  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.04)";
};

const tabIconStyle = (active) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  color: active ? "#0076ff" : "rgba(255,255,255,0.4)",
  cursor: "pointer",
  transition: "color 0.2s"
});

/* --- Reusable SVG Icon Elements --- */

const cellIcon = (
  <svg width="13" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <rect x="2" y="16" width="3" height="5" fill="currentColor" stroke="none" />
    <rect x="7" y="12" width="3" height="9" fill="currentColor" stroke="none" />
    <rect x="12" y="8" width="3" height="13" fill="currentColor" stroke="none" />
    <rect x="17" y="3" width="3" height="18" fill="currentColor" stroke="none" />
  </svg>
);

const wifiIcon = (
  <svg width="13" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M5 12.55a11 11 0 0 1 14.08 0" />
    <path d="M1.42 9a16 16 0 0 1 21.16 0" />
    <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
    <circle cx="12" cy="20" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const batteryIcon = (
  <svg width="18" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ transform: "rotate(90deg)", margin: "0 -2px" }}>
    <rect x="1" y="6" width="18" height="12" rx="2" ry="2" />
    <line x1="23" y1="11" x2="23" y2="13" />
    <rect x="3" y="8" width="12" height="8" fill="currentColor" stroke="none" />
  </svg>
);

const chevronIcon = (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

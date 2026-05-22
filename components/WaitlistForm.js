"use client";

import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";

export default function WaitlistForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [spotNumber, setSpotNumber] = useState(412);
  const [errorMsg, setErrorMsg] = useState("");

  // Referral states for Robinhood waitlist gamification
  const [referralsCount, setReferralsCount] = useState(0);
  const [copiedLink, setCopiedLink] = useState(false);

  // Check if user already signed up previously on this browser
  useEffect(() => {
    try {
      const savedSubmission = localStorage.getItem("scrolltask_waitlist_registered");
      if (savedSubmission) {
        const data = JSON.parse(savedSubmission);
        setName(data.name);
        setEmail(data.email);
        setSpotNumber(data.spot || 412);
        setIsSubmitted(true);
      }
      
      const savedReferrals = localStorage.getItem("scrolltask_mock_referrals");
      if (savedReferrals) {
        setReferralsCount(parseInt(savedReferrals) || 0);
      }
    } catch (e) {
      console.warn("LocalStorage access not available:", e);
    }
  }, []);

  const handleJoin = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    const cleanName = name.trim();
    const cleanEmail = email.trim().toLowerCase();

    if (!cleanName) {
      setErrorMsg("Please enter your name.");
      return;
    }

    if (!cleanEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    setSubmitting(true);

    try {
      // 1. Check if email already exists in Supabase to prevent duplicate emails
      const { data: existing, error: checkError } = await supabase
        .from("Waitlist")
        .select("id")
        .eq("email", cleanEmail)
        .maybeSingle();

      if (checkError) {
        throw checkError;
      }

      if (existing) {
        setErrorMsg("You're already on the waitlist");
        setSubmitting(false);
        return;
      }

      // 2. Insert into Waitlist table
      const { error: insertError } = await supabase
        .from("Waitlist")
        .insert([{ name: cleanName, email: cleanEmail }]);

      if (insertError) {
        if (insertError.code === "23505") { // unique violation code
          setErrorMsg("You're already on the waitlist");
          setSubmitting(false);
          return;
        }
        throw insertError;
      }

      // 3. Get total waitlist count to show the real spot number
      const { count, error: countError } = await supabase
        .from("Waitlist")
        .select("*", { count: "exact", head: true });

      const nextSpot = 412 + (count || 0);

      const registrationData = {
        name: cleanName,
        email: cleanEmail,
        spot: nextSpot,
        timestamp: new Date().toISOString()
      };

      // 4. Store registration data in localStorage for persistency
      localStorage.setItem("scrolltask_waitlist_registered", JSON.stringify(registrationData));

      // Append to submissions array for list tracking
      try {
        const currentSubmissions = JSON.parse(localStorage.getItem("scrolltask_submissions") || "[]");
        const updatedSubmissions = [...currentSubmissions, registrationData];
        localStorage.setItem("scrolltask_submissions", JSON.stringify(updatedSubmissions));
      } catch (err) {
        console.warn("Could not save full submissions history:", err);
      }

      setSpotNumber(nextSpot);
      setIsSubmitted(true);
    } catch (err) {
      console.error("Supabase Error:", err);
      setErrorMsg("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleCopyLink = () => {
    const inviteUrl = `https://scrolltask.com/join?ref=${encodeURIComponent(email || "early")}`;
    navigator.clipboard.writeText(inviteUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);

    // Dynamic gamification: Increment mock referral list as copy triggers focus demo!
    setReferralsCount((prev) => {
      let nextRef = prev;
      if (prev === 0) nextRef = 5;
      else if (prev === 5) nextRef = 15;
      else if (prev === 15) nextRef = 30;
      else nextRef = 0; // wrap around for loop demo

      localStorage.setItem("scrolltask_mock_referrals", nextRef.toString());
      return nextRef;
    });
  };

  // Robinhood referral progression calculations
  const getProgressPercentage = () => {
    if (referralsCount <= 0) return 0;
    if (referralsCount <= 5) return (referralsCount / 5) * 33;
    if (referralsCount <= 15) return 33 + ((referralsCount - 5) / 10) * 33;
    if (referralsCount <= 30) return 66 + ((referralsCount - 15) / 15) * 34;
    return 100;
  };

  return (
    <section 
      id="waitlist" 
      className="section-padding"
      style={{
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Background radial glow */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "600px",
        height: "600px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(72, 207, 173, 0.08) 0%, transparent 70%)",
        filter: "blur(60px)",
        pointerEvents: "none",
        zIndex: 0
      }} />

      <div className="container" style={{ position: "relative", zIndex: 10, display: "flex", justifyContent: "center" }}>
        
        <div 
          className="card-glass waitlist-card reveal-element"
          style={{
            width: "100%",
            maxWidth: "640px",
            padding: "56px 40px",
            border: "1px solid transparent",
            borderImage: "linear-gradient(135deg, #6c63ff, #48cfad) 1",
            borderRadius: "24px",
            boxShadow: "0 25px 50px rgba(0, 0, 0, 0.5), 0 0 35px rgba(108, 99, 255, 0.08)",
            background: "rgba(8, 8, 16, 0.95)",
            textAlign: "center",
          }}
        >

          {!isSubmitted ? (
            <div>
              {/* Form Title */}
              <h2 style={{
                fontSize: "clamp(28px, 4.2vw, 38px)",
                fontWeight: 800,
                color: "#ffffff",
                marginBottom: "12px",
                letterSpacing: "-1.5px"
              }}>
                Get early access
              </h2>
              
              {/* Subtitle */}
              <p style={{
                fontSize: "15.5px",
                color: "var(--text-muted)",
                maxWidth: "420px",
                margin: "0 auto 36px auto",
                lineHeight: 1.6
              }}>
                Be among the first users to try ScrollTask and reclaim your goals from social algorithms.
              </p>

              {/* Form Element */}
              <form onSubmit={handleJoin} style={{ display: "flex", flexDirection: "column", gap: "20px", textAlign: "left" }}>
                
                {/* Name */}
                <div>
                  <label style={{
                    display: "block",
                    fontSize: "11px",
                    fontWeight: 700,
                    color: "var(--text-muted)",
                    marginBottom: "8px",
                    letterSpacing: "0.8px",
                    textTransform: "uppercase",
                  }}>Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{
                      width: "100%",
                      background: "var(--input-bg)",
                      border: "1px solid var(--input-border)",
                      borderRadius: "12px",
                      padding: "14px 16px",
                      color: "#fff",
                      fontSize: "14px",
                      outline: "none",
                      transition: "all 0.25s",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "var(--primary-purple)";
                      e.target.style.background = "var(--input-bg-focus)";
                      e.target.style.boxShadow = "0 0 12px rgba(108,99,255,0.15)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "var(--input-border)";
                      e.target.style.background = "var(--input-bg)";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </div>

                {/* Email */}
                <div>
                  <label style={{
                    display: "block",
                    fontSize: "11px",
                    fontWeight: 700,
                    color: "var(--text-muted)",
                    marginBottom: "8px",
                    letterSpacing: "0.8px",
                    textTransform: "uppercase",
                  }}>Email Address</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                      width: "100%",
                      background: "var(--input-bg)",
                      border: "1px solid var(--input-border)",
                      borderRadius: "12px",
                      padding: "14px 16px",
                      color: "#fff",
                      fontSize: "14px",
                      outline: "none",
                      transition: "all 0.25s",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "var(--primary-purple)";
                      e.target.style.background = "var(--input-bg-focus)";
                      e.target.style.boxShadow = "0 0 12px rgba(108,99,255,0.15)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "var(--input-border)";
                      e.target.style.background = "var(--input-bg)";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </div>

                {/* Error Banner */}
                {errorMsg && (
                  <div style={{
                    background: "rgba(255,107,107,0.1)",
                    border: "1px solid rgba(255,107,107,0.2)",
                    color: "#ff6b6b",
                    fontSize: "13px",
                    padding: "12px",
                    borderRadius: "10px",
                    textAlign: "center"
                  }}>
                    ⚠️ {errorMsg}
                  </div>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn btn-primary"
                  style={{
                    width: "100%",
                    padding: "16px",
                    fontSize: "15px",
                    marginTop: "12px",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px"
                  }}
                >
                  {submitting ? (
                    <>
                      <div style={{
                        width: "18px",
                        height: "18px",
                        border: "2.2px solid rgba(255,255,255,0.3)",
                        borderTopColor: "#fff",
                        borderRadius: "50%",
                        animation: "spin 0.8s linear infinite",
                      }} />
                      <span>Saving spot...</span>
                    </>
                  ) : (
                    <span>Join the Waitlist 🚀</span>
                  )}
                </button>
              </form>

              {/* Early access notice */}
              <p style={{
                fontSize: "12.5px",
                color: "var(--text-dim)",
                marginTop: "20px",
                fontWeight: 500
              }}>
                Early users get free lifetime access and core beta updates.
              </p>
            </div>
          ) : (
            /* ROBINHOOD GAMIFIED waitlist SUCCESS STATE SCREEN */
            <div style={{
              animation: "waitlistSuccessFade 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards",
              textAlign: "center"
            }}>
              
              <div style={{ fontSize: "56px", marginBottom: "16px" }}>🎉</div>
              
              {/* Dynamic Spot placement */}
              <h2 style={{
                fontSize: "clamp(24px, 3.8vw, 36px)",
                fontWeight: 850,
                color: "#ffffff",
                marginBottom: "6px",
                letterSpacing: "-1.5px"
              }}>
                You're #{spotNumber} on the waitlist
              </h2>
              
              <p style={{
                fontSize: "15px",
                color: "#48cfad",
                fontWeight: 700,
                marginBottom: "32px",
                letterSpacing: "0.5px",
                textTransform: "uppercase"
              }}>
                Invite friends and move ahead
              </p>

              {/* ROBINHOOD PROGRESS TIMELINE PANEL */}
              <div style={{
                background: "rgba(255, 255, 255, 0.02)",
                border: "1px solid rgba(255, 255, 255, 0.06)",
                borderRadius: "20px",
                padding: "32px 24px",
                marginBottom: "36px",
                position: "relative"
              }}>
                
                {/* Horizontal Progress bar track */}
                <div style={{
                  position: "relative",
                  width: "100%",
                  height: "8px",
                  background: "rgba(255, 255, 255, 0.06)",
                  borderRadius: "4px",
                  marginBottom: "40px"
                }}>
                  {/* Active growing bar */}
                  <div style={{
                    height: "100%",
                    borderRadius: "4px",
                    background: "linear-gradient(90deg, #6c63ff 0%, #48cfad 100%)",
                    width: `${getProgressPercentage()}%`,
                    transition: "width 1.2s cubic-bezier(0.16, 1, 0.3, 1)",
                    boxShadow: "0 0 15px rgba(72, 207, 173, 0.4)"
                  }} />

                  {/* Milestone Node 0 (0 referrals) */}
                  <div style={{
                    position: "absolute",
                    left: "0%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "16px",
                    height: "16px",
                    borderRadius: "50%",
                    background: referralsCount >= 0 ? "#6c63ff" : "rgba(255,255,255,0.2)",
                    border: "3px solid #080810",
                    transition: "background 0.3s"
                  }}>
                    <span style={{ position: "absolute", top: "20px", left: "50%", transform: "translateX(-50%)", fontSize: "10px", color: "var(--text-muted)", fontWeight: 700 }}>0 ref</span>
                  </div>

                  {/* Milestone Node 1 (5 referrals) */}
                  <div style={{
                    position: "absolute",
                    left: "33%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "16px",
                    height: "16px",
                    borderRadius: "50%",
                    background: referralsCount >= 5 ? "#6c63ff" : "#1a1a2e",
                    border: referralsCount >= 5 ? "3px solid #080810" : "2px solid rgba(255,255,255,0.2)",
                    transition: "all 0.3s"
                  }}>
                    <span style={{ position: "absolute", top: "20px", left: "50%", transform: "translateX(-50%)", fontSize: "10px", color: referralsCount >= 5 ? "#fff" : "var(--text-dim)", fontWeight: 700, whiteSpace: "nowrap" }}>5 ref</span>
                    <span style={{ position: "absolute", bottom: "20px", left: "50%", transform: "translateX(-50%)", fontSize: "9px", color: referralsCount >= 5 ? "#48cfad" : "var(--text-dim)", fontWeight: 800, textTransform: "uppercase", whiteSpace: "nowrap" }}>Early Access</span>
                  </div>

                  {/* Milestone Node 2 (15 referrals) */}
                  <div style={{
                    position: "absolute",
                    left: "66%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "16px",
                    height: "16px",
                    borderRadius: "50%",
                    background: referralsCount >= 15 ? "#48cfad" : "#1a1a2e",
                    border: referralsCount >= 15 ? "3px solid #080810" : "2px solid rgba(255,255,255,0.2)",
                    transition: "all 0.3s"
                  }}>
                    <span style={{ position: "absolute", top: "20px", left: "50%", transform: "translateX(-50%)", fontSize: "10px", color: referralsCount >= 15 ? "#fff" : "var(--text-dim)", fontWeight: 700, whiteSpace: "nowrap" }}>15 ref</span>
                    <span style={{ position: "absolute", bottom: "20px", left: "50%", transform: "translateX(-50%)", fontSize: "9px", color: referralsCount >= 15 ? "#48cfad" : "var(--text-dim)", fontWeight: 800, textTransform: "uppercase", whiteSpace: "nowrap" }}>Founding Badge</span>
                  </div>

                  {/* Milestone Node 3 (30 referrals) */}
                  <div style={{
                    position: "absolute",
                    left: "100%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "16px",
                    height: "16px",
                    borderRadius: "50%",
                    background: referralsCount >= 30 ? "#48cfad" : "#1a1a2e",
                    border: referralsCount >= 30 ? "3px solid #080810" : "2px solid rgba(255,255,255,0.2)",
                    transition: "all 0.3s"
                  }}>
                    <span style={{ position: "absolute", top: "20px", left: "50%", transform: "translateX(-50%)", fontSize: "10px", color: referralsCount >= 30 ? "#fff" : "var(--text-dim)", fontWeight: 700, whiteSpace: "nowrap" }}>30 ref</span>
                    <span style={{ position: "absolute", bottom: "20px", left: "50%", transform: "translateX(-50%)", fontSize: "9px", color: referralsCount >= 30 ? "#48cfad" : "var(--text-dim)", fontWeight: 800, textTransform: "uppercase", whiteSpace: "nowrap" }}>Lifetime Premium</span>
                  </div>
                </div>

                {/* Subtext describing current level */}
                <div style={{ fontSize: "13px", color: "var(--text-muted)", marginTop: "10px" }}>
                  {referralsCount === 0 && "🔗 Invite friends using your button below to bypass queue!"}
                  {referralsCount === 5 && "🎉 Milestone reached: You unlocked standard Early Access!"}
                  {referralsCount === 15 && "⭐️ Milestone reached: You unlocked the Founding Member Badge!"}
                  {referralsCount === 30 && "👑 Ultimate tier: You have free Lifetime Premium access!"}
                </div>
              </div>

              {/* Sharing button */}
              <button
                onClick={handleCopyLink}
                className="btn btn-primary"
                style={{
                  width: "100%",
                  maxWidth: "360px",
                  padding: "16px 28px",
                  fontSize: "14px",
                  fontWeight: 700,
                  borderRadius: "12px",
                  marginBottom: "20px",
                  boxShadow: "0 6px 20px rgba(108,99,255,0.2)"
                }}
              >
                {copiedLink ? "✓ Referral URL Copied! (+ Referral Simulated)" : "📣 Copy Referral Invite Link"}
              </button>

              <p style={{
                fontSize: "13px",
                color: "var(--text-muted)",
                maxWidth: "380px",
                margin: "0 auto",
                lineHeight: 1.6
              }}>
                We've sent a reservation receipt to <strong>{email}</strong>. Keep an eye out for downloads!
              </p>

              {/* Reset link for testing or sibling signup */}
              <span 
                onClick={() => {
                  localStorage.removeItem("scrolltask_waitlist_registered");
                  localStorage.removeItem("scrolltask_mock_referrals");
                  setName("");
                  setEmail("");
                  setReferralsCount(0);
                  setIsSubmitted(false);
                }} 
                style={{
                  display: "inline-block",
                  fontSize: "11px",
                  color: "var(--text-dim)",
                  marginTop: "36px",
                  cursor: "pointer",
                  textDecoration: "underline"
                }}
              >
                Sign up another email
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

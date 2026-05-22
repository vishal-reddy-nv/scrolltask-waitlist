"use client";

import { useState, useEffect, useRef } from "react";

const PRESETS = {
  french: {
    label: "🇫🇷 French",
    goal: "Learn French vocabulary and grammar basics",
    tasks: [
      "Learn 5 new verbs (être, avoir, faire, aller, dire)",
      "Read a short French paragraph aloud",
      "Translate 3 common daily phrases",
      "Listen to 2 minutes of a French podcast",
      "Write 3 sentences about your day in French"
    ]
  },
  fitness: {
    label: "💪 Fitness",
    goal: "Perform a savage home workout and full-body stretch",
    tasks: [
      "Do 20 controlled air squats",
      "Perform 15 standard or incline pushups",
      "Hold a solid plank for 45 seconds",
      "Execute 20 bicycle crunches",
      "Do a 3-minute full body cooldown stretch"
    ]
  },
  coding: {
    label: "💻 Coding",
    goal: "Write and optimize basic programming algorithms",
    tasks: [
      "Draw the logic flowchart for the algorithm",
      "Write the brute force code implementation",
      "Identify 2 edge cases (null value, empty list)",
      "Optimize the time complexity from O(N^2) to O(N)",
      "Refactor variables for perfect readability"
    ]
  }
};

const DEFAULT_TASKS = [
  "Write 3 sentences in your target language",
  "Review 5 flashcards or vocabulary items",
  "Read one short paragraph or educational snippet",
  "Answer 1 quiz question correctly",
  "Write down a key takeaway from today's session"
];

export default function ExtensionMockup() {
  // Simulator Mode: 'auto' | 'manual'
  const [mode, setMode] = useState("auto");
  
  // Auto loop state: 
  // 0: Instagram scroll
  // 1: Intercept popup appears (Formulating AI tasks...)
  // 2: Tasks loaded & Summarize Chapter 2 displayed
  // 3: Cursor hovers and completes task
  // 4: Confetti & reward screen
  // 5: Unlocked/Instagram scroll resumes
  const [autoStep, setAutoStep] = useState(0);
  const [confetti, setConfetti] = useState([]);
  
  // Interactive / Manual States
  const [screen, setScreen] = useState("setup");
  const [goal, setGoal] = useState("");
  const [preset, setPreset] = useState("");
  const [subtaskCount, setSubtaskCount] = useState("5");
  const [timerInterval, setTimerInterval] = useState("10");
  const [pdfFileName, setPdfFileName] = useState("");
  const [loading, setLoading] = useState(false);
  const [activeGoal, setActiveGoal] = useState("");
  const [tasks, setTasks] = useState([]);
  const [completedIndices, setCompletedIndices] = useState([]);

  // Auto-play steps sequencer
  useEffect(() => {
    if (mode !== "auto") return;

    let timer;
    if (autoStep === 0) {
      // Scrolling feed
      setConfetti([]);
      timer = setTimeout(() => setAutoStep(1), 3000);
    } else if (autoStep === 1) {
      // Intercept popup
      timer = setTimeout(() => setAutoStep(2), 2000);
    } else if (autoStep === 2) {
      // Task appears
      timer = setTimeout(() => setAutoStep(3), 2000);
    } else if (autoStep === 3) {
      // Complete click & Confetti trigger
      triggerConfetti();
      timer = setTimeout(() => setAutoStep(4), 1800);
    } else if (autoStep === 4) {
      // Reward dashboard
      timer = setTimeout(() => setAutoStep(5), 2500);
    } else if (autoStep === 5) {
      // Resume feed scrolling
      timer = setTimeout(() => setAutoStep(0), 3000);
    }

    return () => clearTimeout(timer);
  }, [autoStep, mode]);

  // Confetti generator (CSS based)
  const triggerConfetti = () => {
    const emojis = ["🎉", "✨", "⭐", "💪", "🧠", "🔥"];
    const particles = Array.from({ length: 24 }).map((_, i) => ({
      id: i,
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
      left: 20 + Math.random() * 60,
      delay: Math.random() * 0.4,
      scale: 0.6 + Math.random() * 0.8,
    }));
    setConfetti(particles);
  };

  // Preset selector
  const handlePresetChange = (e) => {
    const val = e.target.value;
    setPreset(val);
    if (val && PRESETS[val]) {
      setGoal(PRESETS[val].goal);
    }
  };

  // PDF Select
  const handlePdfMockSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPdfFileName(file.name);
      setGoal(`PDF Study: ${file.name.replace(".pdf", "")}`);
    }
  };

  const handleRemovePdf = (e) => {
    e.stopPropagation();
    setPdfFileName("");
    setGoal("");
  };

  // Launch Active Cycle (Manual Mode)
  const handleLaunch = () => {
    if (!goal.trim() && !pdfFileName) {
      alert("Please enter a goal or select a preset!");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setActiveGoal(goal || "My Objective");
      
      let generatedTasks = [];
      if (preset && PRESETS[preset]) {
        generatedTasks = [...PRESETS[preset].tasks];
      } else {
        generatedTasks = [...DEFAULT_TASKS];
      }

      const count = parseInt(subtaskCount) || 5;
      if (count === 10) {
        generatedTasks = [
          ...generatedTasks,
          "Explain the core concept in your own words",
          "Complete 1 active recall practice exercise",
          "Solve 1 micro-problem matching this goal",
          "Review your previous mistakes for 1 minute",
          "Take a quick 30-second breathing pause"
        ];
      }
      
      setTasks(generatedTasks);
      setCompletedIndices([]);
      setScreen("active");
    }, 1000);
  };

  // Check off tasks
  const handleToggleTask = (index) => {
    if (completedIndices.includes(index)) {
      setCompletedIndices(completedIndices.filter(i => i !== index));
    } else {
      const newIndices = [...completedIndices, index];
      setCompletedIndices(newIndices);
      
      if (newIndices.length === tasks.length) {
        triggerConfetti();
        setTimeout(() => {
          setScreen("success");
        }, 600);
      }
    }
  };

  const handleReset = () => {
    setScreen("setup");
    setGoal("");
    setPreset("");
    setPdfFileName("");
    setCompletedIndices([]);
  };

  const progressPercent = tasks.length > 0 ? Math.round((completedIndices.length / tasks.length) * 100) : 0;

  return (
    <div style={{
      width: "100%",
      maxWidth: "360px",
      height: "580px",
      background: "radial-gradient(circle at top left, #0e0e22, #050508)",
      color: "#f5f5f7",
      borderRadius: "28px",
      border: "1px solid rgba(255, 255, 255, 0.08)",
      boxShadow: "0 24px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(108, 99, 255, 0.15)",
      padding: "20px 16px 20px 16px",
      display: "flex",
      flexDirection: "column",
      position: "relative",
      fontFamily: "var(--font-plus-jakarta-sans), system-ui, sans-serif",
      overflow: "hidden"
    }}>
      
      {/* Mode Switch Tab */}
      <div style={{
        display: "flex",
        background: "rgba(255, 255, 255, 0.03)",
        border: "1px solid rgba(255, 255, 255, 0.06)",
        borderRadius: "20px",
        padding: "3px",
        marginBottom: "16px",
        zIndex: 50
      }}>
        <button 
          onClick={() => { setMode("auto"); setAutoStep(0); }}
          style={{
            flex: 1,
            background: mode === "auto" ? "linear-gradient(135deg, #6c63ff, #48cfad)" : "transparent",
            color: "#fff",
            border: "none",
            borderRadius: "16px",
            padding: "8px",
            fontSize: "11px",
            fontWeight: 700,
            cursor: "pointer",
            transition: "all 0.2s"
          }}
        >
          ✨ Interactive Demo
        </button>
        <button 
          onClick={() => { setMode("manual"); handleReset(); }}
          style={{
            flex: 1,
            background: mode === "manual" ? "linear-gradient(135deg, #6c63ff, #48cfad)" : "transparent",
            color: mode === "manual" ? "#fff" : "rgba(255,255,255,0.45)",
            border: "none",
            borderRadius: "16px",
            padding: "8px",
            fontSize: "11px",
            fontWeight: 700,
            cursor: "pointer",
            transition: "all 0.2s"
          }}
        >
          ⚙️ Try Simulator
        </button>
      </div>

      {/* AUTO MODE */}
      {mode === "auto" && (
        <div style={{ position: "relative", flex: 1, display: "flex", flexDirection: "column" }}>
          
          {/* Step Progress Indicator Dashboard */}
          <div style={{
            marginBottom: "12px",
            display: "flex",
            flexDirection: "column",
            gap: "6px",
            padding: "0 4px",
            zIndex: 10
          }}>
            {/* Segmented Progress bar */}
            <div style={{
              display: "flex",
              gap: "4px",
              width: "100%"
            }}>
              {[0, 1, 2, 3, 4, 5].map((stepIdx) => (
                <div 
                  key={stepIdx} 
                  style={{
                    flex: 1,
                    height: "3px",
                    borderRadius: "2px",
                    background: stepIdx === autoStep 
                      ? "linear-gradient(90deg, #6c63ff, #48cfad)" 
                      : stepIdx < autoStep 
                        ? "#48cfad" 
                        : "rgba(255, 255, 255, 0.15)",
                    boxShadow: stepIdx === autoStep ? "0 0 8px rgba(108, 99, 255, 0.6)" : "none",
                    transition: "all 0.3s ease"
                  }}
                />
              ))}
            </div>
            {/* Caption */}
            <div style={{
              fontSize: "10.5px",
              fontWeight: 700,
              color: "#a0aec0",
              textAlign: "center",
              minHeight: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
              {autoStep === 0 && <span style={{ color: "#ff6b6b" }}>📱 Browsing Instagram feed...</span>}
              {autoStep === 1 && <span style={{ color: "#ffd166" }}>⚡ ScrollTask intercepts scroll</span>}
              {autoStep === 2 && <span style={{ color: "#4cc9f0" }}>🧠 AI generates study tasks</span>}
              {autoStep === 3 && <span style={{ color: "#48cfad" }}>🖱️ Auto-completing task...</span>}
              {autoStep === 4 && <span style={{ color: "#06d6a0" }}>🎉 Reward dashboard loaded!</span>}
              {autoStep === 5 && <span style={{ color: "#48cfad" }}>🔓 Scrolling resumes guilt-free!</span>}
            </div>
          </div>

          {/* Simulated Mobile Instagram Feed */}
          <div style={{
            flex: 1,
            background: "#000",
            borderRadius: "16px",
            border: "1px solid rgba(255, 255, 255, 0.05)",
            position: "relative",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column"
          }}>
            
            {/* Instagram Header */}
            <div style={{
              height: "44px",
              borderBottom: "1px solid #1c1c1e",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 12px",
              background: "#000",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "-0.5px"
            }}>
              <span style={{ color: "#fff", fontFamily: "serif", fontSize: "16px", fontStyle: "italic" }}>Instagram</span>
              <span style={{ fontSize: "14px" }}>💬</span>
            </div>

            {/* Instagram Feed scroll wrapper */}
            <div style={{
              flex: 1,
              position: "relative",
              overflow: "hidden"
            }}>
              {/* Instagram Feed animation */}
              <div style={{
                position: "absolute",
                width: "100%",
                top: 0,
                left: 0,
                display: "flex",
                flexDirection: "column",
                padding: "8px",
                animation: "infiniteScroll 18s linear infinite",
                animationPlayState: (autoStep >= 1 && autoStep <= 4) ? "paused" : "running"
              }}>
                {[1, 2, 3, 1, 2, 3].map((postIdx, idx) => (
                  <div key={idx} style={{ 
                    background: "#121212", 
                    borderRadius: "12px", 
                    overflow: "hidden", 
                    border: "1px solid #1c1c1e", 
                    paddingBottom: "8px",
                    flexShrink: 0,
                    marginBottom: "16px"
                  }}>
                    {/* User profile row */}
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "8px" }}>
                      <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "linear-gradient(45deg, #f99f1b, #d91a7f)", display: "flex", padding: "1px" }}>
                        <div style={{ flex: 1, borderRadius: "50%", background: "#000" }} />
                      </div>
                      <span style={{ fontSize: "11px", fontWeight: 700 }}>doom_scroller_{postIdx}</span>
                    </div>
                    {/* Post image box */}
                    <div style={{ height: "120px", background: "linear-gradient(135deg, #1c1c2e, #2e1c3e)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span style={{ fontSize: "28px" }}>📸</span>
                    </div>
                    {/* Instagram actions bar */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "6px 8px 4px 8px", fontSize: "11px" }}>
                      <div style={{ display: "flex", gap: "10px" }}>
                        <span style={{ cursor: "pointer" }}>❤️</span>
                        <span style={{ cursor: "pointer" }}>💬</span>
                        <span style={{ cursor: "pointer" }}>✈️</span>
                      </div>
                      <span style={{ cursor: "pointer" }}>🔖</span>
                    </div>
                    {/* Likes & description */}
                    <div style={{ padding: "0 8px 8px 8px", fontSize: "10px", color: "#8e8e93" }}>
                      <div style={{ fontWeight: 700, color: "#fff", marginBottom: "4px" }}>♥ 1,428 likes</div>
                      <div><strong style={{ color: "#fff" }}>doom_scroller</strong> Mindless content loop... #doomscroll</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* INTERCEPT OVERLAY POPUP */}
            {(autoStep >= 1 && autoStep <= 4) && (
              <div style={{
                position: "absolute",
                top: 0, left: 0, right: 0, bottom: 0,
                background: "rgba(0, 0, 0, 0.7)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "16px",
                zIndex: 20,
                animation: "fadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards"
              }}>
                <div style={{
                  width: "100%",
                  border: "1.5px solid transparent",
                  background: "linear-gradient(to bottom, #0e0e28, #05050b) padding-box, linear-gradient(135deg, #6c63ff, #48cfad) border-box",
                  borderRadius: "20px",
                  boxShadow: "0 12px 40px rgba(0,0,0,0.7), 0 0 25px rgba(108, 99, 255, 0.25)",
                  padding: "20px 16px",
                  textAlign: "center",
                  animation: "scaleIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards",
                  position: "relative"
                }}>
                  {/* Floating elements inside popup */}
                  {confetti.map((p) => (
                    <div
                      key={p.id}
                      style={{
                        position: "absolute",
                        left: `${p.left}%`,
                        top: "10%",
                        fontSize: "20px",
                        transform: `scale(${p.scale})`,
                        animation: `confettiFloat 1.6s cubic-bezier(0.1, 0.8, 0.3, 1) forwards`,
                        animationDelay: `${p.delay}s`,
                        pointerEvents: "none",
                        zIndex: 100
                      }}
                    >
                      {p.emoji}
                    </div>
                  ))}

                  {/* STEP 1: Intercept notification */}
                  {autoStep === 1 && (
                    <div style={{ padding: "12px 0" }}>
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
                      <p style={{ fontSize: "11px", color: "var(--text-muted)", marginBottom: "16px" }}>You have scrolled for 10 minutes.</p>
                      
                      {/* Loading Ring simulator */}
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", fontSize: "11px", color: "#48cfad" }}>
                        <div style={{
                          width: "12px",
                          height: "12px",
                          border: "1.8px solid rgba(72,207,173,0.2)",
                          borderTopColor: "#48cfad",
                          borderRadius: "50%",
                          animation: "spin 0.6s linear infinite"
                        }} />
                        <span>AI Generating Study Tasks...</span>
                      </div>
                    </div>
                  )}

                  {/* STEP 2 & 3: Task Checklist screen */}
                  {(autoStep === 2 || autoStep === 3) && (
                    <div>
                      <span style={{
                        background: "rgba(72, 207, 173, 0.1)",
                        color: "#48cfad",
                        fontSize: "9px",
                        fontWeight: 800,
                        padding: "4px 8px",
                        borderRadius: "20px",
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                        display: "inline-block",
                        marginBottom: "8px"
                      }}>ACTIVE GOAL: STUDY</span>
                      <h4 style={{ fontSize: "13px", fontWeight: 700, color: "#fff", marginBottom: "12px", lineHeight: "1.4" }}>
                        Summarize one concept from Chapter 2
                      </h4>

                      {/* Progress strip */}
                      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "10px", color: "rgba(255,255,255,0.45)", marginBottom: "4px", fontWeight: 600 }}>
                        <span>Progress</span>
                        <span>{autoStep === 3 ? "100%" : "0%"}</span>
                      </div>
                      <div style={{ width: "100%", height: "6px", background: "rgba(255,255,255,0.06)", borderRadius: "3px", marginBottom: "16px", overflow: "hidden" }}>
                        <div style={{ height: "100%", background: "linear-gradient(90deg, #6c63ff, #48cfad)", width: autoStep === 3 ? "100%" : "0%", transition: "width 1s cubic-bezier(0.16, 1, 0.3, 1)" }} />
                      </div>

                      {/* Mock task nodes */}
                      <div style={{ display: "flex", flexDirection: "column", gap: "6px", textAlign: "left" }}>
                        <div style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          background: autoStep === 3 ? "transparent" : "rgba(255,255,255,0.02)",
                          border: "1px solid rgba(255,255,255,0.04)",
                          padding: "8px 10px",
                          borderRadius: "8px",
                          fontSize: "11px",
                          transition: "all 0.3s",
                          opacity: autoStep === 3 ? 0.4 : 1,
                          textDecoration: autoStep === 3 ? "line-through" : "none"
                        }}>
                          <span style={{ fontSize: "12px" }}>{autoStep === 3 ? "✅" : "⬜"}</span>
                          <span style={{ color: "#fff" }}>Identify core theme on page 42</span>
                        </div>
                      </div>

                      {/* Simulated Virtual Cursor to trigger the click */}
                      {autoStep === 2 && (
                        <div style={{
                          position: "absolute",
                          bottom: "12px",
                          right: "24px",
                          fontSize: "18px",
                          pointerEvents: "none",
                          animation: "mouseMoveClick 1.8s ease-in-out forwards",
                          zIndex: 100
                        }}>
                          🖱️
                        </div>
                      )}
                    </div>
                  )}

                  {/* STEP 4: Success / Streak Reward screen */}
                  {autoStep === 4 && (
                    <div style={{ padding: "10px 0" }}>
                      <div style={{ fontSize: "40px", marginBottom: "8px", filter: "drop-shadow(0 0 10px rgba(72,207,173,0.3))" }}>🏆</div>
                      <h4 style={{ fontSize: "14px", fontWeight: 800, color: "#48cfad", marginBottom: "4px" }}>Task Completed!</h4>
                      <p style={{ fontSize: "11px", color: "#fff", marginBottom: "8px" }}>+10 XP Reclaimed!</p>
                      <div style={{
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(255,255,255,0.06)",
                        padding: "8px 12px",
                        borderRadius: "10px",
                        display: "inline-block",
                        fontSize: "10.5px",
                        color: "var(--text-muted)"
                      }}>
                        🔥 <strong>5-Day Focus Streak</strong> maintained!
                      </div>
                      <p style={{ fontSize: "10px", color: "rgba(255,255,255,0.35)", marginTop: "12px" }}>Unlocking scroll feed...</p>
                    </div>
                  )}

                </div>
              </div>
            )}

            {/* Bottom tab bar for simulated mobile */}
            <div style={{
              height: "40px",
              borderTop: "1px solid #1c1c1e",
              background: "#000",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              fontSize: "12px",
              opacity: 0.8
            }}>
              <span>🏠</span>
              <span>🔍</span>
              <span>➕</span>
              <span>♥</span>
              <span>👤</span>
            </div>

          </div>
          
        </div>
      )}

      {/* MANUAL/TRY SIMULATOR MODE */}
      {mode === "manual" && (
        <div style={{ display: "flex", flexDirection: "column", flex: 1, zIndex: 10 }}>
          
          {/* SETUP SCREEN */}
          {screen === "setup" && (
            <div style={{ display: "flex", flexDirection: "column", flex: 1, gap: "10px" }}>
              <div style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "14px",
                padding: "12px 14px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}>
                <div>
                  <label style={{
                    display: "block",
                    fontSize: "9px",
                    fontWeight: 700,
                    color: "rgba(255,255,255,0.4)",
                    marginBottom: "4px",
                    letterSpacing: "0.5px",
                    textTransform: "uppercase",
                  }}>Goal / Objective</label>
                  <input
                    type="text"
                    placeholder="e.g. Learn Spanish basics"
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                    style={{
                      width: "100%",
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.06)",
                      borderRadius: "8px",
                      padding: "10px 12px",
                      color: "#fff",
                      fontSize: "12px",
                      outline: "none",
                    }}
                  />
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "9px", fontWeight: 700, color: "rgba(255,255,255,0.4)", marginBottom: "4px", textTransform: "uppercase" }}>Preset</label>
                    <select value={preset} onChange={handlePresetChange} style={{ width: "100%", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "8px", padding: "8px", color: "#fff", fontSize: "12px" }}>
                      <option value="" style={{ background: "#0c0c16" }}>Autofill...</option>
                      <option value="french" style={{ background: "#0c0c16" }}>🇫🇷 French</option>
                      <option value="fitness" style={{ background: "#0c0c16" }}>💪 Fitness</option>
                      <option value="coding" style={{ background: "#0c0c16" }}>💻 Coding</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "9px", fontWeight: 700, color: "rgba(255,255,255,0.4)", marginBottom: "4px", textTransform: "uppercase" }}>Tasks</label>
                    <select value={subtaskCount} onChange={(e) => setSubtaskCount(e.target.value)} style={{ width: "100%", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "8px", padding: "8px", color: "#fff", fontSize: "12px" }}>
                      <option value="5" style={{ background: "#0c0c16" }}>5 tasks</option>
                      <option value="10" style={{ background: "#0c0c16" }}>10 tasks</option>
                    </select>
                  </div>
                </div>

                <div 
                  onClick={() => document.getElementById("mock-pdf-manual").click()}
                  style={{
                    border: "1.5px dashed rgba(108, 99, 255, 0.3)",
                    background: "rgba(108, 99, 255, 0.03)",
                    borderRadius: "10px",
                    padding: "10px",
                    textAlign: "center",
                    cursor: "pointer",
                    fontSize: "10px",
                    color: "rgba(255,255,255,0.4)"
                  }}
                >
                  <input type="file" id="mock-pdf-manual" accept=".pdf" style={{ display: "none" }} onChange={handlePdfMockSelect} />
                  {pdfFileName ? `📄 ${pdfFileName.slice(0, 14)}...` : "📄 Or upload study PDF"}
                </div>
              </div>

              <button
                onClick={handleLaunch}
                disabled={loading}
                className="btn btn-primary"
                style={{
                  width: "100%",
                  padding: "12px",
                  fontSize: "13px",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px"
                }}
              >
                {loading ? "Creating tasks..." : "Activate ScrollTask 🚀"}
              </button>
            </div>
          )}

          {/* ACTIVE SCREEN */}
          {screen === "active" && (
            <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
              <div style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "14px",
                padding: "14px",
                display: "flex",
                flexDirection: "column",
                flex: 1,
              }}>
                <span style={{ fontSize: "9px", color: "var(--text-muted)", textTransform: "uppercase" }}>MY OBJECTIVE</span>
                <div style={{ fontSize: "14px", fontWeight: 700, color: "#fff", marginBottom: "12px", minHeight: "36px" }}>{activeGoal}</div>

                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "10px", color: "rgba(255,255,255,0.45)", marginBottom: "4px" }}>
                  <span>{completedIndices.length} of {tasks.length} done</span>
                  <span>{progressPercent}%</span>
                </div>
                <div style={{ width: "100%", height: "6px", background: "rgba(255,255,255,0.06)", borderRadius: "3px", marginBottom: "14px", overflow: "hidden" }}>
                  <div style={{ height: "100%", background: "linear-gradient(90deg, #6c63ff, #48cfad)", width: `${progressPercent}%`, transition: "width 0.3s" }} />
                </div>

                <div style={{ flex: 1, overflowY: "auto", maxHeight: "160px", marginBottom: "14px" }}>
                  {tasks.map((task, idx) => {
                    const isDone = completedIndices.includes(idx);
                    return (
                      <div
                        key={idx}
                        onClick={() => handleToggleTask(idx)}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "8px",
                          padding: "8px 10px",
                          background: isDone ? "transparent" : "rgba(255,255,255,0.02)",
                          border: "1px solid rgba(255,255,255,0.04)",
                          borderRadius: "8px",
                          marginBottom: "4px",
                          fontSize: "11px",
                          cursor: "pointer",
                          opacity: isDone ? 0.35 : 1,
                          textDecoration: isDone ? "line-through" : "none"
                        }}
                      >
                        <span>{isDone ? "✅" : "⬜"}</span>
                        <span>{task}</span>
                      </div>
                    );
                  })}
                </div>

                <button onClick={handleReset} style={{ background: "rgba(255,107,107,0.06)", border: "1px solid rgba(255,107,107,0.2)", color: "#ff6b6b", width: "100%", padding: "8px", borderRadius: "8px", fontSize: "11px", cursor: "pointer" }}>
                  Reset & Restart
                </button>
              </div>
            </div>
          )}

          {/* SUCCESS SCREEN */}
          {screen === "success" && (
            <div style={{ display: "flex", flexDirection: "column", flex: 1, justifyItems: "center", justifyContent: "center" }}>
              <div style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "14px",
                padding: "20px",
                textAlign: "center"
              }}>
                <div style={{ fontSize: "36px", marginBottom: "8px" }}>🏆</div>
                <h4 style={{ fontSize: "14px", fontWeight: 800, color: "#48cfad", marginBottom: "4px" }}>Goal Achieved!</h4>
                <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.7)", marginBottom: "16px" }}>Amazing discipline! You avoided distractions and finished all tasks.</p>
                <button onClick={handleReset} className="btn btn-primary" style={{ width: "100%", padding: "10px", fontSize: "12px", borderRadius: "8px" }}>
                  Start New Goal 🚀
                </button>
              </div>
            </div>
          )}

        </div>
      )}

      {/* Floating Confetti style animations */}
      <style jsx global>{`
        @keyframes mouseMoveClick {
          0% { transform: translate(0, 0); opacity: 1; }
          45% { transform: translate(-222px, -22px); opacity: 1; }
          65% { transform: translate(-222px, -22px) scale(0.85); opacity: 1; }
          80% { transform: translate(-222px, -22px) scale(1); opacity: 1; }
          100% { transform: translate(-222px, -22px); opacity: 0; }
        }
        @keyframes pulseGlow {
          0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(108, 99, 255, 0.4); }
          70% { transform: scale(1.05); box-shadow: 0 0 0 10px rgba(108, 99, 255, 0); }
          100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(108, 99, 255, 0); }
        }
        @keyframes confettiFloat {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-160px) rotate(360deg); opacity: 0; }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { transform: scale(0.9) translateY(10px); opacity: 0; }
          to { transform: scale(1) translateY(0); opacity: 1; }
        }
        @keyframes infiniteScroll {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
      `}</style>
      
    </div>
  );
}

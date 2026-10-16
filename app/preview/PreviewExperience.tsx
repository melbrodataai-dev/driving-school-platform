"use client";

import { useState } from "react";
import Quiz from "@/components/Quiz";
import { miniTestQuestions, mockExamQuestions } from "@/lib/questions";
import DemoLogin from "@/components/DemoLogin";
import LogoutButton from "@/components/LogoutButton";
import "./style.css";

const lessons = [
  "Road signs",
  "Giving way",
  "Roundabouts",
  "Road markings",
  "General rules",
  "Hazard awareness",
  "Test preparation",
  "Practical essentials",
];

const questions = [
  ["Can beginners join?", "Yes. Tell the school about your experience so lessons can start at a comfortable level."],
  ["Can I practise on my phone?", "The demonstration quiz and student preview are designed to work on mobile."],
  ["How do I enrol?", "Contact the school to discuss lessons and fees. Student access will be arranged by the school."],
];

type PreviewProps = { initialView?: string; signedIn?: boolean };
type Student = { name: string; active: boolean };

export default function Preview({ initialView = "home", signedIn = false }: PreviewProps) {
  const [view, setView] = useState(initialView);
  const [lesson, setLesson] = useState("");
  const [done, setDone] = useState<string[]>([]);
  const [notice, setNotice] = useState("");
  const [students, setStudents] = useState<Student[]>([
    { name: "Tariro (sample)", active: true },
  ]);

  function go(next: string) {
    setView(next);
    setNotice("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <main className="site-shell">
      <div className="demo-bar">
        <span className="status-dot" />
        WEBSITE DEMONSTRATION <span className="demo-location">HARARE, ZIMBABWE</span>
      </div>

      <header className="site-header">
        <button className="brand" onClick={() => go("home")} aria-label="School home">
          <span className="brand-mark" aria-hidden="true">R</span>
          <span className="brand-copy"><strong>RONALD&apos;S</strong><small>DRIVING SCHOOL</small></span>
        </button>
        <nav className="main-nav" aria-label="Main navigation">
          <button onClick={() => go("home")}>The school</button>
          <button onClick={() => go("contact")}>Lessons</button>
          <button onClick={() => go("test")}>Theory practice</button>
        </nav>
        {signedIn ? <LogoutButton /> : <button className="button button-dark button-small" onClick={() => go("login")}>Student sign in</button>}
      </header>

      {view === "home" ? (
        <>
          <section className="hero-section">
            <div className="hero-copy">
              <div className="eyebrow"><span /> LEARN WITH CONFIDENCE</div>
              <h1>Ready for the<br />road <span>ahead.</span></h1>
              <p className="hero-lede">Clear theory preparation and patient driving lessons to help you take your next step with confidence.</p>
              <div className="hero-actions">
                <button className="button button-orange" onClick={() => go("contact")}>Ask about lessons <span aria-hidden="true">→</span></button>
                <button className="button button-text" onClick={() => go("test")}>Try the free theory test</button>
              </div>
              <div className="hero-meta"><span>VID provisional licence preparation</span><span>Harare, Zimbabwe</span></div>
            </div>
            <div className="hero-visual" aria-label="Road graphic representing the journey to confident driving">
              <div className="visual-grid" />
              <div className="visual-caption"><span>YOUR JOURNEY</span><strong>Starts here.</strong></div>
              <svg className="road-art" viewBox="0 0 620 470" role="img" aria-label="A road winding toward the horizon">
                <path d="M0 210 142 114l118 34 108-93 252 39v376H0Z" fill="#d4d7c7" />
                <path d="m0 297 160-88 95 37 122-117 243 39v302H0Z" fill="#aeb8a5" />
                <path d="M-50 490C90 400 202 401 275 356s-8-82 65-120 163-34 310-71" fill="none" stroke="#f6f3eb" strokeWidth="145" />
                <path d="M-50 490C90 400 202 401 275 356s-8-82 65-120 163-34 310-71" fill="none" stroke="#373b37" strokeWidth="116" />
                <path d="M-50 490C90 400 202 401 275 356s-8-82 65-120 163-34 310-71" fill="none" stroke="#f4a16d" strokeWidth="4" strokeDasharray="18 18" />
                <circle cx="497" cy="106" r="37" fill="#e47743" />
                <path d="m425 175 54-48 38 43" fill="none" stroke="#f6f3eb" strokeWidth="3" />
              </svg>
              <div className="visual-footer"><span>01 / 03</span><span>THEORY · PRACTICE · PROGRESS</span></div>
            </div>
          </section>

          <div className="trust-row">
            <span>Structured theory practice</span><i />
            <span>Patient, practical instruction</span><i />
            <span>Learn at your own pace</span>
          </div>

          <section className="section-block learning-section">
            <div className="section-heading">
              <div><div className="eyebrow">A CLEARER WAY TO LEARN</div><h2>Build the knowledge.<br /><span>Grow the confidence.</span></h2></div>
              <p>Preparation for your provisional licence, with support for the steps that come after the test.</p>
            </div>
            <div className="service-grid">
              <article className="service-card"><span className="service-number">01</span><div className="service-icon icon-book" aria-hidden="true"><span /></div><h3>Theory, made clearer</h3><p>Practise road rules, signs and giving way with useful explanations after each answer.</p><button onClick={() => go("test")}>Explore theory practice <span>→</span></button></article>
              <article className="service-card"><span className="service-number">02</span><div className="service-icon icon-route" aria-hidden="true"><span /></div><h3>Practice with purpose</h3><p>Work through sample questions and focus on the topics you want to understand better.</p><button onClick={() => go("test")}>Try a sample test <span>→</span></button></article>
              <article className="service-card"><span className="service-number">03</span><div className="service-icon icon-wheel" aria-hidden="true"><span /></div><h3>Lessons for your next step</h3><p>Talk with the school about your experience, goals and practical lesson options.</p><button onClick={() => go("contact")}>Ask about lessons <span>→</span></button></article>
            </div>
          </section>

          <section className="practice-banner">
            <div><div className="eyebrow">OPEN PRACTICE · NO SIGN IN</div><h2>Put your road knowledge<br />to the test.</h2><p>Try a short sample quiz and see which topics to revisit.</p><button className="button button-orange" onClick={() => go("test")}>Start the free test <span aria-hidden="true">→</span></button></div>
            <div className="quiz-preview" aria-hidden="true"><div className="quiz-preview-top"><span>VID THEORY PRACTICE</span><span>01 / 10</span></div><div className="quiz-preview-road"><div className="lane-line" /><div className="mini-car">L</div></div><div className="quiz-preview-bottom"><span>Giving way</span><span className="preview-check">A</span><span className="preview-option" /></div></div>
          </section>

          <section className="section-block school-section">
            <div className="school-copy"><div className="eyebrow">PERSONAL INSTRUCTION</div><h2>Every learner starts<br /><span>somewhere.</span></h2><p>Whether you are learning for the first time or returning to try again, the school can help you plan a practical next step.</p><button className="button button-outline" onClick={() => go("contact")}>Talk to the school <span aria-hidden="true">→</span></button></div>
            <div className="school-panel"><span className="panel-index">SCHOOL / 001</span><div className="panel-lines"><span /><span /><span /></div><strong>Learn at<br />your pace.</strong><span className="panel-note">THE ROAD AHEAD IS YOURS.</span></div>
          </section>

          <section className="faq-section"><div className="eyebrow">GOOD TO KNOW</div><h2>Before your first lesson.</h2><div className="faq-list">{questions.map(([q, a]) => <details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></section>
          <section className="closing-section"><div className="eyebrow">YOUR NEXT STEP STARTS WITH A CONVERSATION</div><h2>Let&apos;s get you<br /><span>road ready.</span></h2><button className="button button-light" onClick={() => go("contact")}>Ask about lessons <span aria-hidden="true">→</span></button></section>
        </>
      ) : (
        <section className="workspace">
          <button className="back-link" onClick={() => go("home")}>← Back to the school</button>
          {view === "test" || view === "exam" ? <div className="workspace-content"><div className="eyebrow">THEORY PRACTICE · DEMONSTRATION</div><h1 className="page-title">{view === "test" ? "Free theory test" : "Mock practice"}</h1><p className="page-intro">Sample questions for demonstration. The school must review and approve all question content before student use.</p><Quiz key={view} title={view === "test" ? "Free theory test" : "Mock practice"} questions={view === "test" ? miniTestQuestions : mockExamQuestions} /><button className="button button-orange" onClick={() => go("contact")}>Ask about lessons <span aria-hidden="true">→</span></button></div> : null}
          {view === "login" ? <div className="workspace-content login-panel"><div className="eyebrow">STUDENT AREA · DEMONSTRATION</div><h1 className="page-title">Student sign in</h1><p className="page-intro">Use the sample account to explore the demonstration. Real student accounts are not connected.</p><DemoLogin /><button className="button button-text" onClick={() => go("student")}>Explore the student preview →</button></div> : null}
          {view === "student" ? <div className="workspace-content"><div className="eyebrow">STUDENT AREA · DEMONSTRATION</div><h1 className="page-title">Learning hub</h1><p className="page-intro">Sample lessons and practice. Your progress is temporary and will reset when you leave.</p><div className="progress-card"><div><span>LESSONS COMPLETED</span><strong>{done.length} <small>/ 8</small></strong></div><div className="progress-track"><span style={{ width: `${done.length / 8 * 100}%` }} /></div><div className="progress-caption">DEMONSTRATION PROGRESS · NOT SAVED</div></div><div className="hub-actions"><button className="button button-orange" onClick={() => go("exam")}>Start mock practice <span aria-hidden="true">→</span></button><button className="button button-outline" onClick={() => go("signs")}>Browse road signs</button></div><h2 className="list-heading">Your lessons <span>8 TOPICS</span></h2><div className="lesson-list">{lessons.map((title, i) => <button className="lesson-row" key={title} onClick={() => setLesson(title)}><span className="lesson-index">{String(i + 1).padStart(2, "0")}</span><span className="lesson-name">{title}<small>Sample lesson · preview only</small></span><span className={done.includes(title) ? "lesson-state is-done" : "lesson-state"}>{done.includes(title) ? "COMPLETE" : "OPEN →"}</span></button>)}</div>{lesson ? <div className="lesson-player"><button className="back-link" onClick={() => setLesson("")}>← Close lesson</button><div className="eyebrow">SAMPLE FOOTAGE · NOT A SCHOOL LESSON</div><h2>{lesson}</h2><video controls src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" /><button className="button button-dark" onClick={() => { setDone((current) => current.includes(lesson) ? current : [...current, lesson]); setLesson(""); }}>Mark as complete</button></div> : null}<div className="placeholder-note"><strong>Class leaderboard</strong><p>Rankings and score history will be available if the school chooses to add them.</p></div></div> : null}
          {view === "signs" ? <div className="workspace-content"><div className="eyebrow">STUDY REFERENCE · DEMONSTRATION</div><h1 className="page-title">Road signs</h1><p className="page-intro">Sample sign categories. Approved Zimbabwe VID learning content is still required.</p><div className="sign-grid">{[["01", "NO ENTRY", "Regulatory"], ["02", "STOP", "Regulatory"], ["03", "TURN LEFT", "Direction"]].map(([number, title, type]) => <article className="sign-card" key={number}><span>{number} / {type}</span><div className="sign-shape"><strong>{title}</strong></div><h3>{title.toLowerCase()}</h3></article>)}</div></div> : null}
          {view === "contact" ? <div className="workspace-content"><div className="eyebrow">LESSON ENQUIRY · PREVIEW ONLY</div><h1 className="page-title">Talk with the school.</h1><p className="page-intro">School contact details and fees are awaiting confirmation. This preview form does not send or store your details.</p><form className="enquiry-form" onSubmit={(event) => { event.preventDefault(); setNotice("Preview only: your enquiry was not sent or saved."); }}><label>Your name<input required name="name" autoComplete="name" /></label><label>What would you like help with?<select><option>Learning to drive</option><option>VID theory preparation</option><option>Practical lessons</option><option>Retaking my test</option></select></label><label>Your message<textarea rows={4} /></label><button className="button button-orange">Prepare enquiry <span aria-hidden="true">→</span></button>{notice ? <p role="status" className="status-message">{notice}</p> : null}</form></div> : null}
          {view === "admin" ? <div className="workspace-content"><div className="eyebrow">ADMINISTRATION · DEMONSTRATION</div><h1 className="page-title">Student overview</h1><p className="page-intro">This local preview has no real accounts or permissions. Changes below are temporary.</p><form className="admin-form" onSubmit={(event) => { event.preventDefault(); const form = event.currentTarget; const name = String(new FormData(form).get("name")).trim(); if (name) { setStudents((current) => [...current, { name, active: true }]); form.reset(); } }}><label>Add a sample student<input required name="name" placeholder="Student name" /></label><button className="button button-dark">Add student</button></form><div className="student-table">{students.map((student, i) => <article key={`${student.name}-${i}`}><strong>{student.name}</strong><span>{student.active ? "ACTIVE · SAMPLE" : "PAUSED · SAMPLE"}</span><button onClick={() => setStudents((current) => current.map((item, index) => index === i ? { ...item, active: !item.active } : item))}>{student.active ? "Pause" : "Restore"}</button><button onClick={() => setNotice("Preview only: no password was changed.")}>Reset password</button></article>)}</div><label className="file-label">Choose a sample video<input type="file" accept="video/*" onChange={(event) => setNotice(event.target.files?.[0] ? "Preview only: the selected file was not uploaded." : "No file selected.")} /></label>{notice ? <p role="status" className="status-message">{notice}</p> : null}</div> : null}
        </section>
      )}

      <footer className="site-footer"><button className="brand brand-footer" onClick={() => go("home")}><span className="brand-mark">R</span><span className="brand-copy"><strong>RONALD&apos;S</strong><small>DRIVING SCHOOL</small></span></button><p>Driving school website demonstration<br /><span>School identity and contact details pending confirmation.</span></p><button className="footer-link" onClick={() => go("admin")}>Admin preview →</button></footer>
    </main>
  );
}

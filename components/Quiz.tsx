"use client";

import { useState } from "react";
import type { Question } from "@/lib/questions";

type Props = { questions: Question[]; title: string };

export default function Quiz({ questions, title }: Props) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const current = questions[index];

  function next() {
    if (index === questions.length - 1) setFinished(true);
    else { setIndex((value) => value + 1); setSelected(null); }
  }

  function restart() {
    setIndex(0); setSelected(null); setScore(0); setFinished(false);
  }

  if (!current) return <section className="quiz-card"><p>No questions are available in this demonstration.</p></section>;

  if (finished) {
    const percent = Math.round((score / questions.length) * 100);
    return <section className="quiz-card quiz-result" aria-live="polite"><div className="eyebrow">PRACTICE COMPLETE</div><h2>{title} result</h2><p>You scored <strong>{score} out of {questions.length}</strong> ({percent}%).</p><p className="quiz-disclaimer">Sample result only. This question set has not yet been approved by the school.</p><button className="button button-dark" onClick={restart}>Try again</button></section>;
  }

  return (
    <section className="quiz-card" aria-labelledby="quiz-question">
      <div className="quiz-heading"><span>{title}</span><span>QUESTION {String(index + 1).padStart(2, "0")} <i /> {String(questions.length).padStart(2, "0")}</span></div>
      <div className="quiz-progress" aria-label={`Question ${index + 1} of ${questions.length}`}><span style={{ width: `${((index + 1) / questions.length) * 100}%` }} /></div>
      {current.isDiagram ? <div className="diagram-frame"><RoundaboutDiagram /></div> : null}
      <h2 id="quiz-question">{current.prompt}</h2>
      <div className="quiz-options">{current.choices.map((choice, choiceIndex) => {
        const correct = selected !== null && choiceIndex === current.correctIndex;
        const incorrect = selected === choiceIndex && selected !== current.correctIndex;
        return <button key={choice} className={`quiz-option${correct ? " correct" : ""}${incorrect ? " incorrect" : ""}`} onClick={() => { if (selected !== null) return; setSelected(choiceIndex); if (choiceIndex === current.correctIndex) setScore((value) => value + 1); }} disabled={selected !== null}><span>{String.fromCharCode(65 + choiceIndex)}</span>{choice}<i>{correct ? "CORRECT" : incorrect ? "YOUR ANSWER" : ""}</i></button>;
      })}</div>
      {selected !== null ? <><div className="quiz-explanation"><strong>{selected === current.correctIndex ? "Correct." : "Review this answer."}</strong><p>{current.explanation}</p></div><button className="button button-orange" onClick={next}>{index === questions.length - 1 ? "View results" : "Next question"}<span aria-hidden="true">→</span></button></> : <p className="quiz-hint">Select an answer to continue.</p>}
    </section>
  );
}

function RoundaboutDiagram() {
  return <svg width="250" height="190" viewBox="0 0 250 190" role="img" aria-label="Sample roundabout diagram with two vehicles"><rect width="250" height="190" fill="#e6e7de"/><circle cx="125" cy="95" r="44" fill="none" stroke="#393c37" strokeWidth="32"/><circle cx="125" cy="95" r="22" fill="#d1d5c9"/><path d="M125 0v44M125 146v44M0 95h59M191 95h59" stroke="#393c37" strokeWidth="32"/><path d="M125 12v27M125 153v26M11 95h35M203 95h35" stroke="#f6f3eb" strokeWidth="2" strokeDasharray="8 6"/><g transform="translate(111 151)"><rect width="28" height="15" fill="#df7140"/><text x="14" y="11" textAnchor="middle" fontSize="9" fill="#222">A</text></g><g transform="translate(178 87)"><rect width="28" height="15" fill="#f5f1e8"/><text x="14" y="11" textAnchor="middle" fontSize="9" fill="#222">B</text></g><text x="13" y="20" fontSize="8" fill="#555">SAMPLE DIAGRAM</text></svg>;
}

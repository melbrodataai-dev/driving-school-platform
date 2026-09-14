"use client";

import { useState } from "react";
import type { Question } from "@/lib/questions";

type Props = {
  questions: Question[];
  title: string;
};

export default function Quiz({ questions, title }: Props) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const current = questions[index];
  const isLast = index === questions.length - 1;

  function choose(choiceIndex: number) {
    if (selected !== null) return; // already answered this one
    setSelected(choiceIndex);
    if (choiceIndex === current.correctIndex) {
      setScore((s) => s + 1);
    }
  }

  function next() {
    if (isLast) {
      setFinished(true);
      return;
    }
    setIndex((i) => i + 1);
    setSelected(null);
  }

  function restart() {
    setIndex(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
  }

  if (finished) {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-neutral-900">{title} — result</h3>
        <p className="mt-2 text-neutral-700">
          You scored <span className="font-bold">{score}</span> out of {questions.length} (
          {pct}%).
        </p>
        <button
          onClick={restart}
          className="mt-4 rounded-lg bg-blue-700 px-4 py-2 text-white hover:bg-blue-800"
        >
          Try again
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
      <div className="mb-3 flex items-center justify-between text-sm text-neutral-500">
        <span>{title}</span>
        <span>
          Question {index + 1} of {questions.length}
        </span>
      </div>

      {current.isDiagram && (
        <div className="mb-4 flex justify-center rounded-lg bg-neutral-50 p-4">
          <RoundaboutDiagram />
        </div>
      )}

      <p className="text-lg font-medium text-neutral-900">{current.prompt}</p>

      <div className="mt-4 flex flex-col gap-2">
        {current.choices.map((choice, i) => {
          const isCorrect = i === current.correctIndex;
          const isChosen = i === selected;
          let style = "border-neutral-200 hover:border-blue-400";
          if (selected !== null) {
            if (isCorrect) style = "border-green-500 bg-green-50";
            else if (isChosen) style = "border-red-500 bg-red-50";
          }
          return (
            <button
              key={i}
              onClick={() => choose(i)}
              disabled={selected !== null}
              className={`rounded-lg border px-4 py-3 text-left text-neutral-800 transition ${style}`}
            >
              {choice}
            </button>
          );
        })}
      </div>

      {selected !== null && (
        <div className="mt-4 rounded-lg bg-blue-50 p-4 text-sm text-blue-900">
          <strong>Explanation: </strong>
          {current.explanation}
        </div>
      )}

      {selected !== null && (
        <button
          onClick={next}
          className="mt-4 rounded-lg bg-blue-700 px-4 py-2 text-white hover:bg-blue-800"
        >
          {isLast ? "See result" : "Next question"}
        </button>
      )}
    </div>
  );
}

// Placeholder inline diagram — a simple roundabout sketch, not real artwork.
function RoundaboutDiagram() {
  return (
    <svg width="220" height="220" viewBox="0 0 220 220" role="img" aria-label="Roundabout diagram">
      <circle cx="110" cy="110" r="50" fill="#e5e7eb" stroke="#9ca3af" strokeWidth="2" />
      <rect x="95" y="0" width="30" height="70" fill="#d1d5db" />
      <rect x="95" y="150" width="30" height="70" fill="#d1d5db" />
      <rect x="0" y="95" width="70" height="30" fill="#d1d5db" />
      <rect x="150" y="95" width="70" height="30" fill="#d1d5db" />
      {/* Car A, waiting */}
      <g transform="translate(95,175)">
        <rect width="30" height="16" rx="3" fill="#1d4ed8" />
        <text x="15" y="12" textAnchor="middle" fontSize="10" fill="white">
          A
        </text>
      </g>
      {/* Car B, on roundabout to A's right */}
      <g transform="translate(150,100)">
        <rect width="30" height="16" rx="3" fill="#b91c1c" />
        <text x="15" y="12" textAnchor="middle" fontSize="10" fill="white">
          B
        </text>
      </g>
    </svg>
  );
}

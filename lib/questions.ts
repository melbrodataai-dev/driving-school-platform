// Placeholder question bank for the demo only.
// NOT Ronald's real content — replace with his actual VID question bank
// (see ../documents/NOTE.md) before this ever goes near a real student.

export type Question = {
  id: string;
  prompt: string;
  choices: string[];
  correctIndex: number;
  explanation: string;
  isDiagram?: boolean;
};

// Shown on the homepage, no login required — the "free sample" that turns
// strangers into leads.
export const miniTestQuestions: Question[] = [
  {
    id: "mini-1",
    prompt: "What does a solid white line down the centre of the road mean?",
    choices: [
      "Overtaking is allowed if the road is clear",
      "You must not cross it to overtake",
      "It marks a pedestrian crossing",
      "It has no legal meaning",
    ],
    correctIndex: 1,
    explanation:
      "A solid centre line means overtaking is prohibited — visibility ahead is considered unsafe.",
  },
  {
    id: "mini-2",
    prompt: "At an unmarked intersection with no signs or lights, who has right of way?",
    choices: [
      "The faster vehicle",
      "The vehicle already in the intersection",
      "Traffic approaching from the right",
      "Whoever arrives first",
    ],
    correctIndex: 2,
    explanation:
      "In the absence of signs or signals, traffic approaching from the right generally has priority.",
  },
  {
    id: "mini-3",
    prompt: "A red triangular sign with an exclamation mark means:",
    choices: ["Stop immediately", "General danger warning ahead", "No entry", "Parking permitted"],
    correctIndex: 1,
    explanation: "Triangular signs are warning signs. The exclamation mark is a general hazard warning.",
  },
  {
    id: "mini-4",
    prompt: "What is the safe following distance in good conditions, in seconds?",
    choices: ["Half a second", "1 second", "At least 2–3 seconds", "It doesn't matter below 60 km/h"],
    correctIndex: 2,
    explanation: "The 2–3 second rule gives enough reaction time if the vehicle ahead brakes suddenly.",
  },
  {
    id: "mini-5",
    prompt: "When approaching a roundabout, you should give way to:",
    choices: [
      "Traffic already on the roundabout, coming from your right",
      "Traffic waiting to enter from the left",
      "No one — roundabouts have no right of way rule",
      "Only buses and trucks",
    ],
    correctIndex: 0,
    explanation: "Vehicles already circulating on the roundabout (approaching from your right) have priority.",
  },
  {
    id: "mini-6",
    prompt: "Your headlights should be used from:",
    choices: [
      "Sunset to sunrise only",
      "Sunset to sunrise, and any time visibility is poor (fog, heavy rain)",
      "Only when it's raining",
      "Only on highways",
    ],
    correctIndex: 1,
    explanation: "Lights are required at night and whenever poor visibility makes it unsafe not to use them.",
  },
  {
    id: "mini-7",
    prompt: "What does a flashing amber traffic light mean?",
    choices: [
      "Stop and wait for green",
      "Proceed with caution, giving way as appropriate",
      "The light is broken, ignore it",
      "Only pedestrians may cross",
    ],
    correctIndex: 1,
    explanation: "Flashing amber means proceed with caution — treat it like a give-way, not a stop.",
  },
  {
    id: "mini-8",
    prompt: "The legal minimum tread depth for tyres is generally:",
    choices: ["Any depth, as long as it holds air", "1.0 mm", "1.6 mm", "3.0 mm"],
    correctIndex: 2,
    explanation: "1.6 mm is the widely used minimum legal tread depth for safe grip.",
  },
  {
    id: "mini-9",
    prompt: "Before pulling away from a parked position, you must:",
    choices: [
      "Just check the mirror",
      "Signal, check mirrors, and check blind spots",
      "Sound the horn",
      "Nothing, other traffic must avoid you",
    ],
    correctIndex: 1,
    explanation: "Mirrors alone don't cover blind spots — always do a physical check before pulling out.",
  },
  {
    id: "mini-10",
    prompt: "A yellow box junction marking means:",
    choices: [
      "Free parking zone",
      "Do not enter unless your exit is clear",
      "Bus lane only",
      "Pedestrian priority zone",
    ],
    correctIndex: 1,
    explanation: "You must not enter a yellow box unless your exit road is clear, to avoid blocking the junction.",
  },
];

// Shown after login — the first "full mock exam" slice. Includes one
// diagram-based question (rendered as an inline SVG in the exam page).
export const mockExamQuestions: Question[] = [
  {
    id: "exam-1",
    prompt: "You're approaching a roundabout and want to take the third exit (turn right). Which lane should you normally use on approach?",
    choices: ["The left lane, signal left", "The right lane, signal right", "Either lane, no signal needed", "Straddle both lanes"],
    correctIndex: 1,
    explanation:
      "For a right turn at a roundabout (3rd exit or further round), position in the right-hand lane on approach and signal right.",
  },
  {
    id: "exam-2",
    isDiagram: true,
    prompt:
      "Diagram question: You are car A, stopped at the give-way line shown below, facing the roundabout. Car B is already circulating on the roundabout, approaching from your right. Who goes first?",
    choices: ["Car A — first to the junction", "Car B — already on the roundabout", "Whoever signals first", "They should go at the same time"],
    correctIndex: 1,
    explanation:
      "Car B is already on the roundabout and approaching from A's right — B has priority. A must wait for a safe gap.",
  },
  {
    id: "exam-3",
    prompt: "What should you do if your vehicle starts to skid on a wet road?",
    choices: [
      "Brake hard immediately",
      "Steer into the skid and ease off the accelerator",
      "Accelerate to regain control",
      "Turn the wheel sharply away from the skid",
    ],
    correctIndex: 1,
    explanation:
      "Ease off the accelerator and steer gently in the direction the back of the car is sliding (into the skid) to regain control.",
  },
  {
    id: "exam-4",
    prompt: "A school zone sign with a reduced speed limit applies:",
    choices: [
      "All day, every day",
      "Only during posted school times/days",
      "Only if children are visibly present",
      "Only on weekends",
    ],
    correctIndex: 1,
    explanation: "School zone limits apply during the times/days posted on the sign, not just when children are visible.",
  },
  {
    id: "exam-5",
    prompt: "When being overtaken, you should:",
    choices: [
      "Speed up so it's over quickly",
      "Maintain your speed and position, allow room",
      "Move onto the shoulder immediately",
      "Flash your lights at the overtaking car",
    ],
    correctIndex: 1,
    explanation: "Hold your speed and lane position, giving the overtaking vehicle room to complete the manoeuvre safely.",
  },
];

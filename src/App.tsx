import React, { useEffect, useMemo, useState } from "react";

type Difficulty = 1 | 2 | 3 | 4 | 5;
type Testament = "OT" | "NT" | "ALL";
type Question = {
  id: string;
  text: string;
  answers: string[];
  correctIndex: number;
  reference?: string;
  testament: Testament;
  difficulty: Difficulty;
};

export default function App() {
  const [seedQuestions, setSeedQuestions] = useState<Question[]>([]);

  useEffect(() => {
    fetch("/questions.json")
      .then(res => res.json())
      .then((data: Question[]) => setSeedQuestions(data))
      .catch(() => setSeedQuestions([]));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">📖 Bible Quiz</h1>
      <ul>
        {seedQuestions.map(q => (
          <li key={q.id}>{q.text}</li>
        ))}
      </ul>
    </div>
  );
}
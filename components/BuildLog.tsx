"use client";

import { useEffect, useState } from "react";

const steps = [
  { text: "installing css", note: "(reluctantly)" },
  { text: "centering div", note: "(attempt 4)" },
  { text: "picking a font", note: "(took 45 min)" },
  { text: "definetly not built by claude btw" },
];

type Props = { onDone: () => void };

export default function BuildLog({ onDone }: Props) {
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (shown < steps.length) {
      const timer = setTimeout(() => setShown(shown + 1), 350);
      return () => clearTimeout(timer);
    }
    const timer = setTimeout(onDone, 600);
    return () => clearTimeout(timer);
  }, [shown, onDone]);

  const progress = (shown / steps.length) * 100;

  return (
    <div className="font-mono text-lg leading-loose">
      <p className="text-muted">$ npm run build:frontend</p>

      {steps.slice(0, shown).map((step) => (
        <p key={step.text}>
          <span className="text-green-700">✓</span> {step.text}{" "}
          {step.note && <span className="text-muted">{step.note}</span>}
        </p>
      ))}

      {shown === steps.length && (
        <p>
          <span className="text-accent ">●</span> rendering frontend…
        </p>
      )}

      <div className="mt-7 h-1.5 w-[420px] max-w-full overflow-hidden rounded bg-stone-200">
        <div
          className="h-full bg-accent transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="mt-2 text-2xl animate-pulse">▍</p>
    </div>
  );
}
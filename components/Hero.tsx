"use client";

import { useState } from "react";
import BackendView from "./BackendView";
import FrontendView from "./FrontendView";
import BuildLog from "./BuildLog";

type View = "backend" | "compiling" | "frontend";

export default function Hero() {
  const [view, setView] = useState<View>("backend");

  return (
    <div className="p-8 min-h-[70vh]">
      {view === "backend" && <BackendView />}
      {view === "compiling" && <BuildLog onDone={() => setView("frontend")} />}
      {view === "frontend" && <FrontendView />}

{view !== "compiling" && (
  <div className="mt-8 flex flex-wrap items-center gap-4">
    <button
      onClick={() => setView(view === "backend" ? "compiling" : "backend")}
      className="font-mono text-sm border border-foreground/20 px-4 py-2 rounded hover:border-accent hover:text-accent transition-colors"
    >
      {view === "backend" ? "[ render frontend ]" : "[ view backend ]"}
    </button>

    {view === "backend" && (
      <span className="font-mono text-sm text-muted">
        ← go on. I spent a whole afternoon on it.
      </span>
    )}
  </div>
)}
    </div>
  );
}
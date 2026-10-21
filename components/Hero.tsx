"use client";

import { useState } from "react";
import BackendView from "./BackendView";
import FrontendView from "./FrontendView";

export default function Hero() {
  const [styled, setStyled] = useState(false);

  return (
    <div className="p-8">
      {styled ? <FrontendView /> : <BackendView />}

      <button
        onClick={() => setStyled(!styled)}
        className="mt-6 font-mono border px-4 py-2 rounded hover:bg-gray-100"
      >
        {styled ? "[ view backend ]" : "[ render frontend ]"}
      </button>
    </div>
  );
}
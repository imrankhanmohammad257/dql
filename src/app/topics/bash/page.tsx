// dql/src/app/topics/bash/page.tsx
"use client";

import { useState } from "react";
import QAList from "@/components/QAList";
import bashData from "@/data/bash.json";
import BashScripts from "@/components/BashScripts";

export default function BashPage() {
  const [tab, setTab] = useState<"qa" | "scripts">("qa");

  return (
    <main className="max-w-3xl mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-8 text-pink-600">
        Bash Interview Q&A
      </h1>

      {/* Tabs */}
      <div className="flex justify-center space-x-4 mb-6">
        <button
          className={`px-4 py-2 rounded ${tab === "qa" ? "bg-pink-600 text-white" : "bg-gray-200"}`}
          onClick={() => setTab("qa")}
        >
          Q&A
        </button>
        <button
          className={`px-4 py-2 rounded ${tab === "scripts" ? "bg-pink-600 text-white" : "bg-gray-200"}`}
          onClick={() => setTab("scripts")}
        >
          Scripts
        </button>
      </div>

      {/* Content */}
      {tab === "qa" && <QAList data={bashData} />}
      {tab === "scripts" && <BashScripts />}
    </main>
  );
}

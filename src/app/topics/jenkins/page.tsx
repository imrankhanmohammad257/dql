// dql/src/app/topics/jenkins/page.tsx
"use client";

import { useState } from "react";
import QAList from "@/components/QAList";
import jenkinsData from "@/data/jenkins.json";
import JenkinsScripts from "@/components/JenkinsScripts";

export default function JenkinsPage() {
  const [tab, setTab] = useState<"qa" | "scripts">("qa");

  return (
    <main className="max-w-3xl mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-8 text-yellow-600">
        Jenkins Interview Q&A
      </h1>

      {/* Tabs */}
      <div className="flex justify-center space-x-4 mb-6">
        <button
          className={`px-4 py-2 rounded ${tab === "qa" ? "bg-yellow-600 text-white" : "bg-gray-200"}`}
          onClick={() => setTab("qa")}
        >
          Q&A
        </button>
        <button
          className={`px-4 py-2 rounded ${tab === "scripts" ? "bg-yellow-600 text-white" : "bg-gray-200"}`}
          onClick={() => setTab("scripts")}
        >
          Scripts
        </button>
      </div>

      {/* Content */}
      {tab === "qa" && <QAList data={jenkinsData} />}
      {tab === "scripts" && <JenkinsScripts />}
    </main>
  );
}

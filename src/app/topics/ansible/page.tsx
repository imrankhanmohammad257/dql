// dql/src/app/topics/ansible/page.tsx
"use client";

import { useState } from "react";
import QAList from "@/components/QAList";
import ansibleData from "@/data/ansible.json";
import ScriptsTab from "@/components/ScriptsTab";

export default function AnsiblePage() {
  const [tab, setTab] = useState<"qa" | "scripts">("qa");

  return (
    <main className="max-w-3xl mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-8 text-green-600">
        Ansible Interview Q&A
      </h1>

      {/* Tabs */}
      <div className="flex justify-center space-x-4 mb-6">
        <button
          className={`px-4 py-2 rounded ${tab === "qa" ? "bg-green-600 text-white" : "bg-gray-200"}`}
          onClick={() => setTab("qa")}
        >
          Q&A
        </button>
        <button
          className={`px-4 py-2 rounded ${tab === "scripts" ? "bg-green-600 text-white" : "bg-gray-200"}`}
          onClick={() => setTab("scripts")}
        >
          Scripts
        </button>
      </div>

      {/* Content */}
      {tab === "qa" && <QAList data={ansibleData} />}
      {tab === "scripts" && <ScriptsTab />}
    </main>
  );
}

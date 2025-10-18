// dql/src/app/topics/kubernetes/page.tsx
"use client";

import { useState } from "react";
import QAList from "@/components/QAList";
import k8sData from "@/data/kubernetes.json";
import K8sScripts from "@/components/K8sScripts";

export default function KubernetesPage() {
  const [tab, setTab] = useState<"qa" | "scripts">("qa");

  return (
    <main className="max-w-3xl mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-8 text-indigo-600">
        Kubernetes Interview Q&A
      </h1>

      {/* Tabs */}
      <div className="flex justify-center space-x-4 mb-6">
        <button
          className={`px-4 py-2 rounded ${tab === "qa" ? "bg-indigo-600 text-white" : "bg-gray-200"}`}
          onClick={() => setTab("qa")}
        >
          Q&A
        </button>
        <button
          className={`px-4 py-2 rounded ${tab === "scripts" ? "bg-indigo-600 text-white" : "bg-gray-200"}`}
          onClick={() => setTab("scripts")}
        >
          Scripts
        </button>
      </div>

      {/* Content */}
      {tab === "qa" && <QAList data={k8sData} />}
      {tab === "scripts" && <K8sScripts />}
    </main>
  );
}

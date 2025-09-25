// dql/src/app/topics/terraform/page.tsx
"use client";

import { useState } from "react";
import QAList from "@/components/QAList";
import terraformData from "@/data/terraform.json";
import TerraformScripts from "@/components/TerraformScripts";

export default function TerraformPage() {
  const [tab, setTab] = useState<"qa" | "scripts">("qa");

  return (
    <main className="max-w-3xl mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-8 text-purple-600">
        Terraform Interview Q&A
      </h1>

      {/* Tabs */}
      <div className="flex justify-center space-x-4 mb-6">
        <button
          className={`px-4 py-2 rounded ${
            tab === "qa" ? "bg-purple-600 text-white" : "bg-gray-200"
          }`}
          onClick={() => setTab("qa")}
        >
          Q&A
        </button>
        <button
          className={`px-4 py-2 rounded ${
            tab === "scripts" ? "bg-purple-600 text-white" : "bg-gray-200"
          }`}
          onClick={() => setTab("scripts")}
        >
          Scripts
        </button>
      </div>

      {/* Content */}
      {tab === "qa" && <QAList data={terraformData} />}
      {tab === "scripts" && <TerraformScripts />}
    </main>
  );
}

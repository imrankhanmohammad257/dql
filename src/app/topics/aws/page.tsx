"use client";

import { useState } from "react";
import QAList from "@/components/QAList";
import awsData from "@/data/aws.json";

export default function AWSPage() {
  const categories = Object.keys(awsData);
  const [activeTab, setActiveTab] = useState(categories[0]);

  return (
    <main className="max-w-4xl mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-8 text-green-600">
        AWS Interview Q&A
      </h1>

      {/* Tabs */}
      <div className="flex space-x-4 mb-6 justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`px-4 py-2 rounded ${
              activeTab === cat
                ? "bg-green-600 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Q&A for active category */}
      <QAList data={awsData[activeTab]} />
    </main>
  );
}

"use client";

import { useState } from "react";
import QAList from "@/components/QAList";
import awsData from "@/data/aws.json";

// Define the type for individual Q&A
type QAItem = {
  question: string;
  answer: string;
};

// Define the type for AWS data
type AWSData = {
  Compute: QAItem[];
  Networking: QAItem[];
  Storage: QAItem[];
  "Monitoring & Security": QAItem[];
};

// Cast imported JSON to the typed structure
const awsTypedData = awsData as AWSData;

export default function AWSPage() {
  // Categories typed as keys of AWSData
  const categories = Object.keys(awsTypedData) as (keyof AWSData)[];
  const [activeTab, setActiveTab] = useState<keyof AWSData>(categories[0]);

  return (
    <main className="max-w-4xl mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-8 text-green-600">
        AWS Interview Q&A
      </h1>

      {/* Tabs */}
      <div className="flex space-x-4 mb-6 justify-center flex-wrap">
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
      <QAList data={awsTypedData[activeTab]} />
    </main>
  );
}

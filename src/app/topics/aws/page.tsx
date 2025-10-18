"use client";

import { useState } from "react";
import QAList from "@/components/QAList";
import awsData from "@/data/aws.json";
import { FaServer, FaNetworkWired, FaDatabase, FaShieldAlt } from "react-icons/fa";

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
  const categories: (keyof AWSData)[] = [
    "Compute",
    "Networking",
    "Storage",
    "Monitoring & Security",
  ];
  const [activeTab, setActiveTab] = useState<keyof AWSData>(categories[0]);

  // Icons mapping
  const icons: Record<keyof AWSData, React.ReactNode> = {
    Compute: <FaServer className="inline mr-2" />,
    Networking: <FaNetworkWired className="inline mr-2" />,
    Storage: <FaDatabase className="inline mr-2" />,
    "Monitoring & Security": <FaShieldAlt className="inline mr-2" />,
  };

  return (
    <main className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-8 text-green-600">
        AWS Interview Q&A
      </h1>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`flex items-center px-4 py-3 rounded-lg font-medium transition-all ${
              activeTab === cat
                ? "bg-green-600 text-white shadow-lg"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            {icons[cat]} {cat}
          </button>
        ))}
      </div>

      {/* Q&A for active category */}
      <QAList data={awsTypedData[activeTab]} />
    </main>
  );
}

"use client";

import React from "react";
import Link from "next/link";
import topics from "./data/topics.json";
import { FaCogs, FaAws, FaDocker, FaLinux, FaQuestionCircle } from "react-icons/fa";
import { SiJenkins, SiTerraform, SiAnsible, SiKubernetes, SiGnubash } from "react-icons/si";

// Map topic icons
const iconMap: Record<string, React.ReactNode> = {
  FaCogs: <FaCogs size={24} />,
  FaAws: <FaAws size={24} />,
  SiJenkins: <SiJenkins size={24} />,
  SiTerraform: <SiTerraform size={24} />,
  FaDocker: <FaDocker size={24} />,
  SiAnsible: <SiAnsible size={24} />,
  SiKubernetes: <SiKubernetes size={24} />,
  FaLinux: <FaLinux size={24} />,
  SiGnubash: <SiGnubash size={24} />,
  FaQuestionCircle: <FaQuestionCircle size={24} />,
};

export default function Home() {
  return (
    <div className="relative text-center min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      {/* Header */}
      <header className="py-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-green-600 dark:text-green-400">
          DevOps & AWS Interview Q&A
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg md:text-xl">
          Select a topic below to explore interview questions and answers
        </p>
      </header>

      {/* Topics Grid */}
      <main className="px-4 pb-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {topics.map((topic) => (
            <Link key={topic.slug} href={`/topics/${topic.slug}`}>
              <div
                className={`flex flex-col items-center justify-center gap-2 p-4 ${topic.color} text-white rounded-xl shadow hover:scale-105 transition-transform`}
              >
                {iconMap[topic.icon]}
                <span className="font-medium text-sm md:text-base">{topic.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </main>

      {/* 🆕 Updates Box */}
      <section className="max-w-2xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 mb-16 border border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-semibold text-green-600 dark:text-green-400 mb-4 flex items-center justify-center gap-2">
          🆕 Latest Updates
        </h2>
        <ul className="text-left text-gray-700 dark:text-gray-300 space-y-2">         
          <li>🌙 <strong>Dark Mode</strong> feature added for better viewing experience</li>
          <li>🚀 Performance optimization for faster page loads</li>
        </ul>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 text-right">
          Last updated: <strong>November 2025</strong>
        </p>
      </section>

      {/* Floating Feedback Button (unchanged) */}
      <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdEsePAiegP8ZUhT7WJPDxHizY9uulD5Wcbm4CVAwBfqsdrAQ/viewform?embedded=true">
        <div className="fixed bottom-5 right-5 bg-green-600 text-white px-5 py-3 rounded-full shadow-lg hover:bg-green-700 z-50 flex items-center gap-2">
          <FaQuestionCircle size={20} />
          Feedback
        </div>
      </Link>
    </div>
  );
}

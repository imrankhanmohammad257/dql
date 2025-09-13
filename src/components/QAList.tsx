"use client";

import React from "react";

type QA = {
  question: string;
  answer: string;
};

export default function QAList({ data }: { data: QA[] }) {
  return (
    <div className="space-y-6 w-full max-w-4xl mx-auto">
      {data.map((item, idx) => (
        <div key={idx} className="p-4 border rounded-lg shadow-sm hover:shadow-md transition w-full">
          <h2 className="font-semibold text-lg text-blue-600">{item.question}</h2>
          <p className="mt-2 text-gray-700">{item.answer}</p>
        </div>
      ))}
    </div>
  );
}

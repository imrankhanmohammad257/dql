interface QACardProps {
  question: string;
  answer: string;
}

export default function QACard({ question, answer }: QACardProps) {
  return (
    <div className="p-4 border rounded-lg shadow mb-4 bg-white">
      <h2 className="font-bold text-lg">{question}</h2>
      <p className="text-gray-700 mt-2">{answer}</p>
    </div>
  );
}

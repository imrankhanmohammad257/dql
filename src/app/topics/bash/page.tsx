import QAList from "@/components/QAList";
import bashData from "@/data/bash.json";

export default function BashPage() {
  return (
    <main className="max-w-3xl mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-8 text-pink-600">Bash Interview Q&A</h1>
      <QAList data={bashData} />
    </main>
  );
}

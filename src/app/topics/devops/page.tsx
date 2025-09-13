import QACard from "../../../components/QACard";
import devopsData from "../../../data/devops.json";

interface QA {
  question: string;
  answer: string;
}

export default function DevOpsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">DevOps Interview Questions</h1>
      {(devopsData as QA[]).map((item, index) => (
        <QACard key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
}

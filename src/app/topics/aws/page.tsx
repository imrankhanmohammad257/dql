import QAList from "@/components/QAList";
import awsData from "@/data/aws.json";

export default function AWSPage() {
  return (
    <main className="max-w-3xl mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-8 text-green-600">AWS Interview Q&A</h1>
      <QAList data={awsData} />
    </main>
  );
}

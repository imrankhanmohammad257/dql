import QAList from "@/components/QAList";
import jenkinsData from "@/data/jenkins.json";

export default function JenkinsPage() {
  return (
    <main className="max-w-3xl mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-8 text-yellow-600">Jenkins Interview Q&A</h1>
      <QAList data={jenkinsData} />
    </main>
  );
}

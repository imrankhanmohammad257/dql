import QAList from "@/components/QAList";
import dockerData from "@/data/docker.json";

export default function DockerPage() {
  return (
    <main className="max-w-3xl mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-500">Docker Interview Q&A</h1>
      <QAList data={dockerData} />
    </main>
  );
}

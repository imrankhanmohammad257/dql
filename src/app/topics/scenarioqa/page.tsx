import QAList from "@/components/QAList";
import scenarioData from "@/data/scenarioqa.json";

export default function ScenarioQAPage() {
  return (
    <main className="max-w-3xl mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-8 text-red-600">Scenario-Based Interview Q&A</h1>
      <QAList data={scenarioData} />
    </main>
  );
}

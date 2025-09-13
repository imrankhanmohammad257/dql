import QAList from "@/components/QAList";
import k8sData from "@/data/kubernetes.json";

export default function KubernetesPage() {
  return (
    <main className="max-w-3xl mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-8 text-indigo-600">Kubernetes Interview Q&A</h1>
      <QAList data={k8sData} />
    </main>
  );
}

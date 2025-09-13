import QAList from "@/components/QAList";
import ansibleData from "@/data/ansible.json";

export default function AnsiblePage() {
  return (
    <main className="max-w-3xl mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-8 text-green-600">Ansible Interview Q&A</h1>
      <QAList data={ansibleData} />
    </main>
  );
}

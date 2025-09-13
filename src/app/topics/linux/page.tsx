import QAList from "@/components/QAList";
import linuxData from "@/data/linux.json";

export default function LinuxPage() {
  return (
    <main className="max-w-3xl mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-700">Linux Interview Q&A</h1>
      <QAList data={linuxData} />
    </main>
  );
}

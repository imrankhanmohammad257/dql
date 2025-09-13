import QAList from "@/components/QAList";
import terraformData from "@/data/terraform.json";

export default function TerraformPage() {
  return (
    <main className="max-w-3xl mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-8 text-purple-600">Terraform Interview Q&A</h1>
      <QAList data={terraformData} />
    </main>
  );
}

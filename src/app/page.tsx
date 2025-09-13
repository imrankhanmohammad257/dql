import Link from "next/link";
import topics from "./data/topics.json";
import { FaCogs, FaAws, FaDocker, FaLinux, FaQuestionCircle } from "react-icons/fa";
import { SiJenkins, SiTerraform, SiAnsible, SiKubernetes, SiGnubash } from "react-icons/si";

const iconMap: Record<string, JSX.Element> = {
  FaCogs: <FaCogs size={20} />,
  FaAws: <FaAws size={20} />,
  SiJenkins: <SiJenkins size={20} />,
  SiTerraform: <SiTerraform size={20} />,
  FaDocker: <FaDocker size={20} />,
  SiAnsible: <SiAnsible size={20} />,
  SiKubernetes: <SiKubernetes size={20} />,
  FaLinux: <FaLinux size={20} />,
  SiGnubash: <SiGnubash size={20} />,
  FaQuestionCircle: <FaQuestionCircle size={20} />
};

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">DevOps & AWS Interview Q&A</h1>
      <p className="mb-6">Select a topic below to explore interview questions and answers:</p>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {topics.map((topic) => (
          <Link
            key={topic.slug}
            href={`/topics/${topic.slug}`}
            className={`flex items-center justify-center gap-2 p-4 ${topic.color} text-white rounded-xl shadow`}
          >
            {iconMap[topic.icon]}
            <span>{topic.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

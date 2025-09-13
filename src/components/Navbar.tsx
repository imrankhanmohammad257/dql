import Link from "next/link";
import topics from "../app/data/topics.json";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex flex-wrap gap-6">
      <Link href="/">Home</Link>
      {topics.map((topic) => (
        <Link key={topic.slug} href={`/topics/${topic.slug}`}>
          {topic.name}
        </Link>
      ))}
    </nav>
  );
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center p-4 mt-auto">
      <p>
        © {new Date().getFullYear()} <span className="font-bold">DevOps Interview Q&A</span> | Built with Next.js + Vercel
      </p>
      <p>By Imran Khan</p>
    </footer>
  );
}

import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DevOps & AWS Interview Q&A",
  description: "Interview questions and answers for DevOps, AWS, Jenkins, and Terraform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900 flex flex-col min-h-screen">
        <Navbar />
        {/* This pushes footer down */}
        <main className="flex-grow p-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

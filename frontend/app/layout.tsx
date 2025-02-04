import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Noted",
  description: "A simple todo app built with Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  

  return (
    <html lang="en">
      <body className="bg-primaryLight dark:bg-primaryDark text-gray-900 dark:text-white transition-all">
        <Navbar />
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
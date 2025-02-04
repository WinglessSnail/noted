import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="p-4 bg-blue-500 text-white flex justify-between">
      <Link href="/" className="text-lg font-bold">
        Home
      </Link>
      <Link href="/todo" className="text-lg">
        Todo
      </Link>
    </nav>
  );
}

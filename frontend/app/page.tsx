import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto text-center mt-20">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Welcome to Noted</h1>
      <Link
        href="/todo"
        className="px-6 py-3 bg-blue-500 text-white rounded-md"
      >
        Go to Todo List
      </Link>
    </div>
  );
}

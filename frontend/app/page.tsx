import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto text-center mt-20 p-6">
      <h1 className="text-3xl font-bold mb-6 text-primaryDark dark:text-primaryLight">
        Welcome to Noted
      </h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
        A simple and elegant way to manage your tasks efficiently.
      </p>
      <Link
        href="/todo"
        className="px-6 py-3 bg-primaryDark dark:bg-primaryLight text-white dark:text-gray-900 rounded-md shadow-md hover:bg-opacity-90 transition"
      >
        Go to Todo List
      </Link>
    </div>
  );
}

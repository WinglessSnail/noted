import TodoList from "@/components/TodoList";

export default function TodoPage() {
  return (
    <div className="max-w-md mx-auto p-6 bg-white dark:bg-secondaryDark rounded-lg shadow-md mt-10">
      <h1 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">
        Your Todo List
      </h1>
      <TodoList />
    </div>
  );
}

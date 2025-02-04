import TodoList from "@/components/TodoList";

export default function TodoPage() {
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <h1 className="text-xl font-bold mb-4">Your Todo List</h1>
      <TodoList />
    </div>
  );
}  
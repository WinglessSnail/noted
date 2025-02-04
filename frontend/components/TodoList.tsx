"use client";

import { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Buy groceries", completed: false },
    { id: 2, title: "Complete project", completed: true },
  ]);

  return (
    <ul className="space-y-3">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="p-4 rounded-lg shadow-md bg-secondaryLight dark:bg-[#4A6688] border border-gray-300 dark:border-[#3B526E] flex justify-between items-center transition"
        >
          <span
            className={`text-lg ${
              todo.completed
                ? "line-through text-gray-500 dark:text-gray-400"
                : "text-gray-800 dark:text-gray-100"
            }`}
          >
            {todo.title}
          </span>
        </li>
      ))}
    </ul>
  );
}

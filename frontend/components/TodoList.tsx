"use client";

import { useState } from "react";


export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Buy groceries", completed: false },
    { id: 2, title: "Complete project", completed: true },
  ]);

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} className="p-2 border-b flex justify-between">
          <span className={todo.completed ? "line-through text-gray-500" : ""}>
            {todo.title}
          </span>
        </li>
      ))}
    </ul>
  );
}

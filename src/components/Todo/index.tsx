import { KeyboardEvent, useState } from "react";
import { TodoType } from "./types";
import Item from "./Item";
import { Outlet } from "react-router-dom";

export default function Todo() {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");

  const addTodo = () => {
    if (newTodo) {
      setTodos((prevTodos) =>
        prevTodos.concat({ title: newTodo, checked: false })
      );
      setNewTodo("");
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") addTodo();
  };

  const updateTodo = (title: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.title === title ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  const deleteTodo = (title: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.title !== title));
  };

  return (
    <div className="lg:w-[45%] w-11/12 mx-auto h-screen bg-white pb-10 pt-20">
      <h1 className="text-zinc-200 text-8xl font-semibold text-center mb-10">
        todos
      </h1>
      <div className="rounded-lg mx-auto relative">
        <input
          type="text"
          className="w-full py-3 pl-6 pr-10 rounded-full shadow-lg text-lg"
          placeholder="Add todo..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <img
          src="/plus.svg"
          alt="New"
          className="absolute top-[20%] right-4 w-6 cursor-pointer"
          onClick={addTodo}
        />
      </div>
      <div className="mt-5">
        {todos.map((todo) => (
          <Item
            {...todo}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
            key={todo.title}
          />
        ))}
      </div>
      <Outlet />
    </div>
  );
}

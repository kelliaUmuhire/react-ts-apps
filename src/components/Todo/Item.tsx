import { useId } from "react";
import { TodoType } from "./types";
import { Link } from "react-router-dom";

export default function Item({
  title,
  checked,
  updateTodo,
  deleteTodo,
}: TodoType) {
  const id = useId();
  return (
    <div
      key={title}
      className="py-3 border-b border-b-gray-200 flex justify-between items-center gap-3"
    >
      <Link to={title}>
        <input
          type="checkbox"
          name=""
          id={id}
          onChange={() => updateTodo!(title)}
        />
        <label
          htmlFor={id}
          className={`ml-2 text-gray-600 text-lg ${
            checked ? "line-through" : ""
          }`}
        >
          {title}
        </label>
      </Link>
      <button
        className="bg-zinc-100 rounded-full p-4"
        onClick={() => deleteTodo!(title)}
      >
        <img src="/trash.svg" alt="Delete" className="w-3 min-w-3" />
      </button>
    </div>
  );
}

import { useState } from "react";
import Calculator from "./components/Calculator";
import Todo from "./components/Todo";

export default function App() {
  const [display, setDisplay] = useState("0");
  return (
    <div>
      <div className="flex justify-center items-center gap-5 mt-10">
        <button
          className={`py-2 px-4 rounded-full ${
            display == "0" ? "bg-gray-200" : "bg-gray-100"
          }`}
          onClick={() => setDisplay("0")}
        >
          Calculator
        </button>
        <button
          className={`py-2 px-4 rounded-full ${
            display == "1" ? "bg-gray-200" : "bg-gray-100"
          }`}
          onClick={() => setDisplay("1")}
        >
          Todo
        </button>
      </div>
      {display == "0" ? <Calculator /> : <Todo />}
    </div>
  );
}

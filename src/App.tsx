import { useState } from "react";
import Calculator from "./components/Calculator";
import Todo from "./components/Todo";
import { Link, Route, Routes } from "react-router-dom";
import Picture from "./components/Todo/Picture";

export default function App() {
  const [display, setDisplay] = useState("0");
  return (
    <>
      <div className="flex justify-center items-center gap-5 mt-10">
        <Link
          to="/"
          className={`py-2 px-4 rounded-full ${
            display == "0" ? "bg-gray-200" : "bg-gray-100"
          }`}
          onClick={() => setDisplay("0")}
        >
          Calculator
        </Link>
        <Link
          to="/todo"
          className={`py-2 px-4 rounded-full ${
            display == "1" ? "bg-gray-200" : "bg-gray-100"
          }`}
          onClick={() => setDisplay("1")}
        >
          Todo
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<Calculator />} />
        <Route path="/todo" element={<Todo />}>
          <Route path=":tag" element={<Picture />} />
        </Route>
      </Routes>
    </>
  );
}

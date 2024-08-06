import Calculator from "./components/Calculator";
import Todo from "./components/Todo";
import { Link, Route, Routes } from "react-router-dom";
import Picture from "./components/Todo/Picture";

export default function App() {
  return (
    <>
      <div className="flex justify-center items-center gap-5 mt-10">
        <Link
          to="/"
          className={`py-2 px-4 rounded-full`}
        >
          Calculator
        </Link>
        <Link
          to="/todo"
          className={`py-2 px-4 rounded-full`}
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

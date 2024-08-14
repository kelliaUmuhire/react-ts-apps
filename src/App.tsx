import { NavLink, Route, Routes } from "react-router-dom";
import Calculator from "./components/Calculator";
import Todo from "./components/Todo";
import Picture from "./components/Todo/Picture";

export default function App() {
  return (
    <>
      <div className="flex justify-center items-center gap-5 mt-10">
        <NavLink
          to="/"
          className={nav => (nav.isActive ? "link bg-gray-200" : "link")} 
        >
          Calculator
        </NavLink>
        <NavLink
          to="/todo"
          className={nav => (nav.isActive ? "link bg-gray-200" : "link")} 
        >
          Todo
        </NavLink>
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

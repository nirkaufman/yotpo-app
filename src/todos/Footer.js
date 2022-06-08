import { TodolistContext } from "../providers/todolist";
import { useContext } from "react";

function Footer() {
  const { items } = useContext(TodolistContext);

  return (
    <footer className="footer">
      <span className="todo-count"><strong>{items.length}</strong> items left</span>
      <button className="clear-completed">Clear completed
      </button>
    </footer>
  );
}

export default Footer;


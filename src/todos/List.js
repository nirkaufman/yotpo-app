import { useContext } from "react";
import { TodolistContext } from "../providers/todolist";

function List() {
  const { items, removeItem } = useContext(TodolistContext);

  return (
    <ul className="todo-list">
      { items.map((item) => (
        <li key={item.id}>
          <div className="view">
            <input className="toggle"
                   type="checkbox"/>
            <label>{item.title}</label>
            <button onClick={() => removeItem(item.id)}
                    className="destroy"/>
          </div>
          <input className="edit"/>
        </li>)
      )}
    </ul>
  );
}

export default List;

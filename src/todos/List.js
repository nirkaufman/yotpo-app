import { useContext, useEffect } from "react";
import { TodolistContext } from "../providers/todolist";

function Item({ item }) {
  const { removeItem } = useContext(TodolistContext);

  useEffect(() => {
    console.log('will run on init');
    return () => console.log('will run on destroy')
  }, []);

  return (
    <li key={item.id}>
      <div className="view">
        <input className="toggle"
               type="checkbox"/>
        <label>{item.title}</label>
        <button onClick={() => removeItem(item.id)}
                className="destroy"/>
      </div>
      <input className="edit"/>
    </li>
  );
}

function List() {
  const { items } = useContext(TodolistContext);

  return (
    <ul className="todo-list">
      { items.map((item) => <Item item={item}/> )}
    </ul>
  );
}

export default List;

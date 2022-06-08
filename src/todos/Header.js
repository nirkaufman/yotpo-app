import React, { useContext, useRef } from "react";
import { TodolistContext } from "../providers/todolist";

function Header() {
  const { addItem } = useContext(TodolistContext);
  const inputRef = useRef(null);

  const createItem = (event) => {
    if(event.key === 'Enter') {
      addItem({
        title: event.target.value,
        completed: false
      })
      inputRef.current.value = '';
    }
  }

  return (
    <header className="header">
      <h1>todos</h1>
      <input className="new-todo"
             ref={inputRef}
             onKeyUp={createItem}
             placeholder="What needs to be done?"
             autoFocus/>
    </header>
  );
}

export default React.memo(Header);

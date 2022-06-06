import { useRef } from "react";


function Header({ onNewItem }) {
  const inputRef = useRef(null);

  const createItem = (event) => {
    if(event.key === 'Enter') {
      onNewItem({
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

export default Header;

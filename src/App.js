import TodoApp from "./todos/TodoApp";
import { useState, useEffect } from "react";

function Counter() {
  console.log('Counter render');
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log('useEffect run');

    fetch('https://jsonplaceholder.typicode.com/users')
      .then( res => res.json())
      .then( items => {setItems(items)})
  }, []);

  useEffect(() => {
    console.log('your count is', count);
  }, [count]);

  return (
    <>
      <h2>{count}</h2>
      { console.log('counter element ') }
      { items.map( item => <li>{item.name}</li> ) }
      <button onClick={() => setCount(count + 1)}>INC</button>
    </>
  )
}


function App() {
  return (
    <>
      <TodoApp />
    </>
  );
}


export default App;

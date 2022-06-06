import './todos.css';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import {useState, useRef} from 'react';

function TodoApp() {
  const [items, setItems] = useState([
    { id: 1, title: 'task #1', completed: false },
    { id: 2, title: 'task #1', completed: false },
    { id: 3, title: 'task #1', completed: false },
  ]);

  const counter = useRef(0);

  const addITem = () => {
    counter.current += 1;
    if(counter.current === 5) {
      return alert('cant add more then 6');
    }
    setItems([ ...items, {id: 4, title: 'new item'} ]);
  }

  return (
    <>
      <button onClick={addITem}>ADD</button>
      <section className="todoapp">
        <Header/>
        <Main items={items}/>
        <Footer/>
      </section>
    </>
  );
}

export default TodoApp;

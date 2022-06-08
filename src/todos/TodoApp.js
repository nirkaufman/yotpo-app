import './todos.css';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { useList } from "../hooks/useList";
import {TodolistContext} from '../providers/todolist';

function TodoApp() {
  const todolistList = useList('todos');

  return (
    <>
      <TodolistContext.Provider value={ todolistList }>
        <section className="todoapp">
          <Header/>
          <Main/>
          <Footer/>
        </section>
      </TodolistContext.Provider>
    </>
  );
}

export default TodoApp;

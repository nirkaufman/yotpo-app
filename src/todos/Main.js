import List from "./List";

function Main({ items }) {
  console.log('Main function executed');

  return (
    <section className="main">
      <input className="toggle-all"
             type="checkbox"/>
      <List items={items} />
    </section>
  );
}

export default Main;

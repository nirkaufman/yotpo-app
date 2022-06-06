function List({ items }) {
  console.log('List function executed');


  return (
    <ul className="todo-list">
      { items.map(item => (
        <li>
          <div className="view">
            <input className="toggle"
                   type="checkbox"/>
            <label>{item.title}</label>
            <button className="destroy"/>
          </div>
          <input className="edit"/>
        </li>)
      )}
    </ul>
  );
}

export default List;

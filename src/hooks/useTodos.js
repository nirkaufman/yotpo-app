import { useCallback, useEffect, useState } from "react";

export function useTodos () {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then( res => res.json() )
      .then( items => setItems(items))
  }, []);

  /**  My logic **/
  const addItem = useCallback((newItem) => {
    setItems( (currenItems) => [...currenItems, newItem]);
  }, [])

  const removeItem = (itemId) => {
    setItems(items.filter( item => item.id !== itemId ))
  }

  return {
    addItem, removeItem, items
  }
}

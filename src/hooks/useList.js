import { useCallback, useEffect, useMemo, useState } from "react";

export function useList(url) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${url}`)
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

  return {items, addItem, removeItem}
}

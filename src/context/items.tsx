import { createContext, useState, type ReactNode } from "react";

import * as DataItem from "@/data/items"
import type { Item } from "@/data/items";
import { nextId } from "@/lib/numbers";

type ItemProviderProps = {
  children:ReactNode
}

type ItemContextProvider = {
  data: Item[],
  add: (item: Item) => void,
  update: (item: Item) => void,
  remove: (id: string) => void,
}

export const ItemContext = createContext<ItemContextProvider | null>(null)

export function ItemProviders({ children }: ItemProviderProps) {
  const [items, setItems] = useState(DataItem.items)

  function add(item: Item) {
    let lastId = items.sort((a, b) => (parseInt(a.id.split("_")[1]) - parseInt(b.id.split("_")[1])))[items.length - 1].id;

    setItems([...items, { ...item, id: nextId(lastId)}])
  }

  function update(item: Item) {
    setItems([...items.filter(i => i.id !== item.id), item])
  }

  function remove(id: string) {
    setItems(items.filter(i => i.id !== id))
  }
  
  return (
    <ItemContext.Provider value={{ data: items, add, update, remove }}>
      {children}
    </ItemContext.Provider>
  )
}

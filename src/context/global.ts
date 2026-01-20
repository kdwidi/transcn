import { items, type Item } from "@/data/items"
import { transactions, type Transaction } from "@/data/transactions"
import { users, type User } from "@/data/users"
import { createContext } from "react"

export type GlobalContextType = {
  user: User | null,
  items: Item[],
  transactions: Transaction[],
  users: User[],
}

export const GlobalContext = createContext<GlobalContextType>({
  user: null,
  items: items,
  transactions: transactions,
  users: users,
})

import { createContext, useState, type ReactNode } from "react"
import * as DataTransaction from "@/data/transactions"
import type { Transaction } from "@/data/transactions"

type TransactionProviderProps = {
  children: ReactNode,
}

type TransactionContextType = {
  data: Transaction[],
}

export const TransactionContext = createContext<TransactionContextType | null>(null)

export function TransactionProviders({ children }: TransactionProviderProps) {
  const [transactions, _] = useState(DataTransaction.transactions)

  return (
    <TransactionContext.Provider value={{ data: transactions }}>
      {children}
    </TransactionContext.Provider>
  )
}

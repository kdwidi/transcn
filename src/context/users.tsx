import { createContext, useState, type ReactNode } from "react";

import * as DataUser from "@/data/users"
import type { User } from "@/data/users";
import { nextId } from "@/lib/numbers";

type UserProviderProps = {
  children: ReactNode
}

type UserContextProvider = {
  data: User[],
  add: (user: User) => void,
  update: (user: User) => void,
  remove: (id: string) => void,
}

export const UserContext = createContext<UserContextProvider | null>(null)

export function UserProviders({ children }: UserProviderProps) {
  const [users, setUsers] = useState(DataUser.users)

  function add(user: User) {
    user.created_at = new Date().toISOString();
    // user id format => `usr_[number]`
    let lastId = users.sort((a, b) => (parseInt(a.id.split("_")[1]) - parseInt(b.id.split("_")[1])))[users.length - 1].id;

    setUsers([...users, { ...user, id: nextId(lastId) }])
  }

  function update(user: User) {
    setUsers([...users.filter(i => i.id !== user.id), user])
  }

  function remove(id: string) {
    setUsers(users.filter(u => u.id !== id))
  }

  return (
    <UserContext.Provider value={{ data: users, add, update, remove }}>
      {children}
    </UserContext.Provider>
  )
}

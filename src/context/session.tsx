import type { User } from "@/data/users"
import * as React from "react"
import { useNavigate } from "react-router"
import { UserContext } from "./users";
import { toast } from "sonner";

const SESSION_KEY = "user_id";

type SessionProviderProps = {
  children: React.ReactNode,
}

type SessionContextType = {
  current: User | null,
  create: (user: User) => void,
  destroy: () => void,
}

export const SessionContext = React.createContext<SessionContextType | null>(null)

export function SessionProviders({ children }: SessionProviderProps) {
  const navigate = useNavigate()

  const users = React.useContext(UserContext);

  const [current, setCurrent] = React.useState<User | null>(null);

  function create(user: User) {
    localStorage.setItem(SESSION_KEY, user.id);
    setCurrent(user);
    toast.success("Berhasil login.")
  }

  function destroy() {
    localStorage.removeItem(SESSION_KEY);
    setCurrent(null);
    toast.success("Berhasil logout.")
  }

  React.useEffect(() => {
    let userId = localStorage.getItem(SESSION_KEY);

    let foundUser = users?.data.find(u => u.id === userId);

    if (!foundUser && location.pathname !== "/login") {
      navigate("/login");
      return;
    }

    setCurrent(foundUser!);
    if (location.pathname === "/login") navigate("/dashboard");

  }, [current])

  return (
    <SessionContext.Provider value={{ current, create, destroy }}>
      {children}
    </SessionContext.Provider>
  )
}

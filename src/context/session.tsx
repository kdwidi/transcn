import type { User } from "@/data/users";
import * as React from "react"
import { useNavigate } from "react-router"
import { toast } from "sonner";

const SESSION_KEY = "SESSION";

type SessionProviderProps = {
  children: React.ReactNode,
}

type SessionData = {
  user: User,
  key: string,
}

type SessionContextType = {
  data: SessionData | null,
  create: (user: User, key: string) => void,
  destroy: () => void,
}

export const SessionContext = React.createContext<SessionContextType | null>(null)

export function SessionProviders({ children }: SessionProviderProps) {
  const navigate = useNavigate()

  const [data, setData] = React.useState<SessionData | null>(null);

  function create(user: User, key: string) {
    let dt = { user, key };
    setData(dt);
    localStorage.setItem(SESSION_KEY, JSON.stringify(dt));
    toast.success("Berhasil login.")
  }

  function destroy() {
    localStorage.removeItem(SESSION_KEY);
    setData(null)
    toast.success("Berhasil logout.")
  }

  React.useEffect(() => {
    let dtString = localStorage.getItem(SESSION_KEY);

    if (!dtString) {
      if (location.pathname !== "/login") navigate("login");
      return;
    }

    if (location.pathname === "/login") navigate("/dashboard");

  }, [data])

  return (
    <SessionContext.Provider value={{ data, create, destroy }}>
      {children}
    </SessionContext.Provider>
  )
}

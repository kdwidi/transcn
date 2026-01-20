import { SessionProviders } from "@/context/session";
import { UserProviders } from "@/context/users";
import * as React from "react";
import { SidebarProvider } from "./ui/sidebar";

type LayoutProps = {
  children: React.ReactNode,
}

export default function Providers({ children }: LayoutProps) {
  return (
    <UserProviders>
      <SessionProviders>
        <SidebarProvider>
          {children}
        </SidebarProvider>
      </SessionProviders>
    </UserProviders>
  )
}

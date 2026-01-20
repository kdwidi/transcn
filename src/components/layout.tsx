import * as React from "react"

import { AppSidebar } from "./app-sidebar"
import { SidebarInset, SidebarTrigger } from "./ui/sidebar"
import { Separator } from "./ui/separator"
import { Breadcrumb, BreadcrumbList } from "./ui/breadcrumb"

type LayoutProps = {
  children: React.ReactNode
  breadcrumbItems: React.ReactNode,
}

export default function Layout({ children, breadcrumbItems }: LayoutProps) {

  return (
    <>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b">
          <div className="flex items-center gap-2 px-3">
            <SidebarTrigger />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                {breadcrumbItems}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div>
          {children}
        </div>
      </SidebarInset>
    </>
  )
}

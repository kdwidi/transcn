import React from "react";
import type { ColumnDef } from "@tanstack/react-table"

import type { User } from "@/data/users";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { UserContext } from "@/context/users";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import EditDialog from "./edit-dialog";


export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Nama",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "role",
    header: () => (<div className="text-center">Role</div>),
    cell: ({ row }) => {
      let role: string = row.getValue("role");
      return (
        <div className="flex flex-col items-center">
          <Badge variant={role === "admin" ? "default" : "secondary"}>
            {role.split("").map((c, i) => i == 0 ? c.toUpperCase() : c)}
          </Badge>
        </div>
      )
    }
  },
  {
    accessorKey: "status",
    header: () => (<div className="text-center">Status</div>),
    cell: ({ row }) => {
      let status: string = row.getValue("status");
      return (
        <div className="flex flex-col items-center">
          <Badge variant={status === "active" ? "default" : "secondary"}>
            {status.split("").map((c, i) => i == 0 ? c.toUpperCase() : c)}
          </Badge>
        </div>
      )
    },
  },
  {
    accessorKey: "created_at",
    header: () => (<div className="text-end">Created At</div>),
    cell: ({ row }) => {
      let createdAt: string = row.getValue("created_at");
      let date = new Date(createdAt)
      return (
        <div className="text-end">
          {date.toLocaleDateString()}
        </div>
      )
    }
  },
  {
    id: "action",
    header: () => (<div className="text-center">Action</div>),
    cell: ({ row }) => {
      const users = React.useContext(UserContext)
      const [openDeactivateDialog, setOpenDeactivateDialog] = React.useState(false)
      const [openEditDialog, setOpenEditDialog] = React.useState(false)

      let user = row.original;
      return (
        <>
          <DropdownMenu>
            <DropdownMenuTrigger asChild><Button variant="ghost" className="size-8 cursor-pointer"><MoreHorizontal /></Button></DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem className="cursor-pointer" onClick={() => setOpenEditDialog(true)}>Edit</DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer" onClick={() => setOpenDeactivateDialog(true)}>Hapus</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <EditDialog open={openEditDialog} onOpenChange={setOpenEditDialog} user={row.original} onConfirm={(edited) => users?.update(edited)} />

          <AlertDialog open={openDeactivateDialog} onOpenChange={setOpenDeactivateDialog}>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Hapus {user.name}?</AlertDialogTitle>
                <AlertDialogDescription>
                  Aksi ini tidak dapat dibatalkan! {user.name} akan dihapus secara permanent.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Tidak</AlertDialogCancel>
                <AlertDialogAction asChild>
                  <Button
                    variant="destructive"
                    className="w-full sm:w-fit"
                    onClick={() => users?.remove(user.id)}
                  >
                    Hapus
                  </Button>
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </>
      )
    }
  }
]

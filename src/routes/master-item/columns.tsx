import React from "react";
import type { ColumnDef } from "@tanstack/react-table"

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import type { Item } from "@/data/items";
import { ItemContext } from "@/context/items";
import EditDialog from "./edit-dialog";



export const columns: ColumnDef<Item>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "code",
    header: "Kode",
  },
  {
    accessorKey: "name",
    header: "Nama",
  },
  {
    accessorKey: "price",
    header: "Harga",
    cell: ({ row }) => {
      let item = row.original;
      const formatter = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 0,
      });
      return formatter.format(item.price);
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
    id: "action",
    header: "Action",
    cell: ({ row }) => {
      const items = React.useContext(ItemContext)
      const [openDeactivateDialog, setOpenDeactivateDialog] = React.useState(false)
      const [openEditDialog, setOpenEditDialog] = React.useState(false)

      let item = row.original;
      return (
        <>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="size-8 cursor-pointer">
                <MoreHorizontal />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem className="cursor-pointer" onClick={() => setOpenEditDialog(true)}>Edit</DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer" onClick={() => setOpenDeactivateDialog(true)}>Hapus</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <EditDialog open={openEditDialog} onOpenChange={setOpenEditDialog} item={row.original} onConfirm={(edited) => items?.update(edited)} />

          <AlertDialog open={openDeactivateDialog} onOpenChange={setOpenDeactivateDialog}>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Hapus {item.name}?</AlertDialogTitle>
                <AlertDialogDescription>
                  Aksi ini tidak dapat dibatalkan! {item.name} dengan kode #{item.code} akan dihapus secara permanent.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Tidak</AlertDialogCancel>
                <AlertDialogAction asChild>
                  <Button
                    className="w-full sm:w-fit"
                    variant="destructive"
                    onClick={() => items?.remove(item.id)}
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

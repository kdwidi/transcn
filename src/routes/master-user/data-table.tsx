import React from "react"
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table"
import type {
  ColumnFiltersState,
  Row,
} from "@tanstack/react-table"

import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { type User } from "@/data/users"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Check, Plus } from "lucide-react"
import { cn } from "@/lib/utils"
import AddDialog from "./add-dialog"
import { UserContext } from "@/context/users"
import { columns } from "./columns"
import { Label } from "@/components/ui/label"

export function DataTable() {
  const users = React.useContext(UserContext)

  const [roleFilter, setRoleFilter] = React.useState<ColumnFiltersState>([]);
  const [nameEmailFilter, setNameEmailFilters] = React.useState<any>([])
  const [openAddUserDialog, setOpenAddUserDialog] = React.useState(false)

  function customNameEmailFilter(rows: Row<User>, _columnId: string, filterValue: string): boolean {
    let data = rows.original;
    return data.name.toLowerCase().includes(filterValue) || data.email.toLowerCase().includes(filterValue)
  }

  const table = useReactTable({
    data: users!.data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    globalFilterFn: customNameEmailFilter,
    onColumnFiltersChange: setRoleFilter,
    onGlobalFilterChange: setNameEmailFilters,
    state: {
      columnFilters: roleFilter,
      globalFilter: nameEmailFilter,
    }
  })

  function roleFilterItemClick(role: string) {
    if ((table.getColumn("role")?.getFilterValue() as string) === role) role = "";
    table.getColumn("role")?.setFilterValue(role);
  }

  return (
    <div>
      <div className="flex flex-col sm:flex-row items-end sm:items-end justify-between gap-4 py-4">
        <div className="w-full sm:w-fit flex items-end gap-4">
          <div className="w-full sm:w-md grid gap-3">
            <Label htmlFor="name">Filter nama atau email</Label>
            <Input
              placeholder="Filter nama atau email"
              onChange={(event) =>
                table.setGlobalFilter(event.target.value)
              }
              className="w-full"
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="name">Filter role</Label>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="cursor-pointer">
                  Role
                  {(() => {
                    let role = table.getColumn("role")?.getFilterValue() as string;
                    if (!role) return ": Semua";
                    return ": " + (table.getColumn("role")?.getFilterValue() as string)
                      .split("")
                      .map((c, i) => {
                        if (i == 0) return c.toUpperCase();
                        else return c;
                      }).join("")
                  })()}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Role</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => roleFilterItemClick("admin")}>
                  <Check className={cn(table.getColumn("role")?.getFilterValue() === "admin" ? "visible" : "invisible", "size-4")} />
                  Admin
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => roleFilterItemClick("staff")}>
                  <Check className={cn(table.getColumn("role")?.getFilterValue() === "staff" ? "visible" : "invisible", "size-4")} />
                  Staff
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="w-fit">
          <Button className="cursor-pointer" onClick={() => setOpenAddUserDialog(true)}><Plus className="size-4" />User</Button>
          <AddDialog open={openAddUserDialog} onOpenChange={setOpenAddUserDialog} onConfirm={(newUser) => users?.add(newUser)} />
        </div>
      </div>
      <div className="overflow-hidden rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  Data tidak ditemukan.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

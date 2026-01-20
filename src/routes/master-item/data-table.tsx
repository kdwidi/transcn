import React from "react"
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table"
import type {
  ColumnFiltersState,
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
import { ItemContext } from "@/context/items"
import { columns } from "./columns"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import AddDialog from "./add-dialog"
import { Label } from "@/components/ui/label"

export function DataTable() {
  const items = React.useContext(ItemContext)

  const [nameFilters, setNameFilters] = React.useState<ColumnFiltersState>([])
  const [openAddItemDialog, setOpenAddItemDialog] = React.useState(false);

  const table = useReactTable({
    data: items!.data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnFiltersChange: setNameFilters,
    state: {
      columnFilters: nameFilters,
    }
  })

  return (
    <div>
      <div className="flex justify-between items-end gap-4 py-4">

        <div className="grid gap-3">
          <Label htmlFor="name">Filter nama</Label>
          <Input
            placeholder="Filter nama"
            onChange={(event) =>
              table.setGlobalFilter(event.target.value)
            }
            className="sm:min-w-md"
          />
        </div>
        <Button onClick={() => setOpenAddItemDialog(true)}><Plus className="size-4" />Item</Button>
        <AddDialog open={openAddItemDialog} onOpenChange={setOpenAddItemDialog} onConfirm={(newItem) => items?.add(newItem)} />
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

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
import { columns } from "./columns"
import { TransactionContext } from "@/context/transactions"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Transaction } from "@/data/transactions"
import { DetailDialog } from "./detail-dialog"
import { Label } from "@/components/ui/label"

export function DataTable() {
  const transactions = React.useContext(TransactionContext)

  const [globalFilter, setGlobalFilter] = React.useState<any>([])
  const [statusFilters, setStatusFilters] = React.useState<ColumnFiltersState>([])

  const [openDetailDialog, setOpenDetailDialog] = React.useState(false)
  const [selectedTransaction, setSelectedTransaction] = React.useState<Transaction | null>(null)

  function customGlobalFilter(rows: Row<Transaction>, _columnId: string, filterValue: string): boolean {
    if (filterValue === "") return true;
    let data = rows.original;
    return data.trx_no.toLowerCase().includes(filterValue)
      || data.customer.name.toLowerCase().includes(filterValue)
  }

  const table = useReactTable({
    data: transactions!.data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnFiltersChange: setStatusFilters,
    globalFilterFn: customGlobalFilter,
    onGlobalFilterChange: setGlobalFilter,
    state: {
      columnFilters: statusFilters,
      globalFilter,
    }
  })

  function getStatusFilterValue() {
    return table.getColumn("status")?.getFilterValue() as string
  }

  function statusFilterClick(status: string) {
    if (getStatusFilterValue() === status) status = "";
    table.getColumn("status")?.setFilterValue(status);
  }

  console.log(statusFilters)

  return (
    <div>
      <div className="flex justify-between items-end gap-4 py-4">
        <div className="grid gap-3 w-full">
          <Label>Nomor transaksi atau pelanggan</Label>
          <Input
            placeholder="Nomor transaksi atau pelanggan"
            onChange={(event) =>
              table.setGlobalFilter(event.target.value)
            }
            className="max-w-md"
          />
        </div>
        <div className="grid gap-3">
          <Label>Status</Label>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="min-w-[100px] cursor-pointer">
                {(() => {
                  let status = getStatusFilterValue();
                  if (!status) return "Semua";
                  return getStatusFilterValue()
                    .split("")
                    .map((c, i) => {
                      if (i == 0) return c.toUpperCase();
                      else return c;
                    }).join("")
                })()}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Status</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => statusFilterClick("paid")}>
                <Check className={cn(getStatusFilterValue() === "paid" ? "visible" : "invisible", "size-4")} />
                Paid
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => statusFilterClick("unpaid")}>
                <Check className={cn(getStatusFilterValue() === "unpaid" ? "visible" : "invisible", "size-4")} />
                Unpaid
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => statusFilterClick("cancel")}>
                <Check className={cn(getStatusFilterValue() === "cancel" ? "visible" : "invisible", "size-4")} />
                Cancel
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
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
                  onClick={() => {
                    setSelectedTransaction(row.original);
                    setOpenDetailDialog(true);
                  }}
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
      <DetailDialog open={openDetailDialog} onOpenChange={setOpenDetailDialog} transaction={selectedTransaction!} />
    </div>
  )
}

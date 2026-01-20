
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
import DateRangePicker from "@/components/date-range-picker"
import type { DateRange } from "react-day-picker"
import { Label } from "@/components/ui/label"

export function DataTable() {
  const transactions = React.useContext(TransactionContext)

  const [globalFilter, setGlobalFilter] = React.useState<any>([])
  const [statusFilters, setStatusFilters] = React.useState<ColumnFiltersState>([])

  const from = new Date();
  const to = new Date();
  from.setMonth(to.getMonth() - 1);
  const [dateRange, setDateRange] = React.useState<DateRange | undefined>({
    from,
    to,
  })

  function customGlobalFilter(row: Row<Transaction>, _columnId: string, filterValue: DateRange | undefined): boolean {
    let data = row.original;
    if (!filterValue) return true;
    if (!filterValue.from) return true;
    if (!filterValue.to) return true;
    let dataDate = new Date(data.date);
    console.log(dataDate)
    console.log(filterValue.from, filterValue.from >= dataDate)
    console.log(filterValue.to, filterValue.to <= dataDate)
    return dataDate >= filterValue.from && dataDate <= filterValue.to
  }

  const table = useReactTable({
    data: transactions!.data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnFiltersChange: setStatusFilters,
    globalFilterFn: customGlobalFilter,
    onGlobalFilterChange: setDateRange,
    state: {
      columnFilters: statusFilters,
      globalFilter: dateRange,
    }
  })

  function getStatusFilterValue() {
    return table.getColumn("status")?.getFilterValue() as string
  }

  function statusFilterClick(status: string) {
    if (getStatusFilterValue() === status) status = "";
    table.getColumn("status")?.setFilterValue(status);
  }

  return (
    <div>
      <div className="flex justify-between items-end gap-4 py-4">
        <div className="grid gap-3">
          <Label htmlFor="date">Tanggal</Label>
          <DateRangePicker
            range={dateRange}
            setRange={setDateRange}
          />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="status">Status</Label>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="min-w-[100px] cursor-pointer justify-start">
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
            <DropdownMenuContent className="min-w-[100px]" align="end">
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

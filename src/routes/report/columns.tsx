import type { ColumnDef, Row } from "@tanstack/react-table"

import { Badge } from "@/components/ui/badge";
import type { Transaction } from "@/data/transactions";

export const columns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "trx_no",
    header: "Kode Transaksi",
  },
  {
    accessorKey: "date",
    header: "Tanggal",
    cell: ({ row }) => {
      return new Date(row.original.date).toLocaleDateString()
    }
  },
  {
    accessorKey: "customer",
    header: "Pelanggan",
    cell: ({ row }) => {
      let customer = row.original.customer;
      return (
        <div>{customer.name}</div>
      )
    }
  },
  {
    accessorKey: "status",
    header: () => (<div className="text-center">Status</div>),
    cell: ({ row }) => {
      let status: string = row.original.status;
      let variant: "default" | "secondary" | "destructive" | "outline" | null | undefined = "default";
      switch (status) {
        case "unpaid":
          variant = "secondary";
          break;
        case "cancel":
          variant = "destructive";
          break;
      }
      return (
        <div className="flex flex-col items-center">
          <Badge variant={variant}>
            {status.split("").map((c, i) => i == 0 ? c.toUpperCase() : c)}
          </Badge>
        </div>
      )
    },
    filterFn: (row: Row<Transaction>, _columnId: string, filterValue: string) => {
      return row.original.status === filterValue
    },
  },
]

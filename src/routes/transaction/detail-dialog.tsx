import CustomDialog from "@/components/custom-dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import type { Transaction } from "@/data/transactions"
import type React from "react"

type DetailDialogProps = {
  open: boolean,
  onOpenChange: (value: boolean) => void,
  transaction: Transaction,
}

export function DetailDialog({ open, onOpenChange, transaction }: DetailDialogProps) {

  if (!transaction) return;

  return (
    <CustomDialog
      title="Detail transaksi"
      open={open}
      onOpenChange={onOpenChange}
      onConfirm={() => { }}
    >
      <div className="space-y-8 my-4">
        <table>
          <tr>
            <td className="min-w-[125px] py-1 font-semibold">ID</td>
            <td className="">:</td>
            <td className="pl-2">{transaction.id}</td>
          </tr>
          <tr>
            <td className="min-w-[125px] py-1 font-semibold">Nomor</td>
            <td className="">:</td>
            <td className="pl-2">{transaction.trx_no}</td>
          </tr>
          <tr>
            <td className="min-w-[125px] py-1 font-semibold">Tanggal</td>
            <td className="">:</td>
            <td className="pl-2">{transaction.date}</td>
          </tr>
        </table>
      </div>
    </CustomDialog>
  )
}

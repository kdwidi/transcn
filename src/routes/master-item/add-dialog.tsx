import React from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { Item } from "@/data/items";
import CustomDialog from "@/components/custom-dialog";

type NewItemDialogType = {
  open: boolean,
  onOpenChange: (value: boolean) => void,
  onConfirm: (item: Item) => void,
}

export default function AddDialog({ open, onOpenChange, onConfirm }: NewItemDialogType) {
  const defaultItem: Item = { id: "", code: "", name: "", price: 0, status: "active" };
  const [newItem, setNewItem] = React.useState<Item>({ ...defaultItem })

  return (
    <CustomDialog
      title="Tambah item baru"
      open={open}
      onOpenChange={onOpenChange}
      onConfirm={() => {
        onConfirm(newItem);
        setNewItem({...defaultItem});
      }}
    >
      <div className="grid gap-4 my-4">
        <div className="grid gap-3">
          <Label htmlFor="code">Kode</Label>
          <Input id="code" value={newItem.code} placeholder="Kode" onChange={e => setNewItem({ ...newItem, code: e.target.value, })} />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="name">Nama</Label>
          <Input id="name" value={newItem.name} placeholder="Nama" onChange={e => setNewItem({ ...newItem, name: e.target.value, })} />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="price">Harga</Label>
          <Input id="price" type="number" placeholder="Harga" onChange={e => setNewItem({ ...newItem, price: parseInt(e.target.value), })} />
        </div>
      </div>
    </CustomDialog >
  )
}

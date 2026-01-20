import React from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import type { Item } from "@/data/items";
import type { UserStatus } from "@/data/users";
import CustomDialog from "@/components/custom-dialog";

type EditDialogProps = {
  open: boolean,
  onOpenChange: (value: boolean) => void,
  onConfirm: (edited: Item) => void,
  item: Item,
}

export default function EditDialog({ open, onOpenChange, onConfirm, item }: EditDialogProps) {
  const [editedItem, setEditedItem] = React.useState({ ...item })

  return (
    <CustomDialog
      title={`Edit item ${item.code}`}
      open={open}
      onOpenChange={onOpenChange}
      onConfirm={() => (onConfirm(editedItem))}
    >
      <div className="grid gap-4 my-4">
        <div className="grid gap-3">
          <Label htmlFor="code">Kode</Label>
          <Input id="code" defaultValue={item.code} onChange={e => setEditedItem({ ...editedItem, code: e.target.value, })} />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="name">Nama</Label>
          <Input id="name" value={editedItem.name} onChange={e => setEditedItem({ ...editedItem, name: e.target.value, })} />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="price">Harga</Label>
          <Input id="price" type="number" value={editedItem.price} onChange={e => setEditedItem({ ...editedItem, price: Number.parseInt(e.target.value), })} />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="status">Status</Label>
          <Select defaultValue={item.status} onValueChange={value => setEditedItem({ ...editedItem, status: value as UserStatus })}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Status</SelectLabel>
                <SelectItem value="active">Aktif</SelectItem>
                <SelectItem value="inactive">Nonaktif</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </CustomDialog>
  );
}

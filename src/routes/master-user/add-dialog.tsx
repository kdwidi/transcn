import React from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import type { User, UserRole } from "@/data/users";
import CustomDialog from "@/components/custom-dialog";

type NewUserDialogType = {
  open: boolean,
  onOpenChange: (value: boolean) => void,
  onConfirm: (user: User) => void,
}

export default function AddDialog({ open, onOpenChange, onConfirm }: NewUserDialogType) {
  const defaultUser: User = { id: "", name: "", email: "", role: "staff", status: "active", created_at: "" };
  const [newUser, setNewUser] = React.useState<User>({...defaultUser})

  return (
    <CustomDialog
      title="Tambah user baru"
      open={open}
      onOpenChange={onOpenChange}
      onConfirm={() => {
        onConfirm(newUser)
        setNewUser({...defaultUser})
      }}
    >
      <div className="grid gap-4 my-4">
        <div className="grid gap-3">
          <Label htmlFor="name">Nama</Label>
          <Input id="name" value={newUser.name} placeholder="Nama" onChange={e => setNewUser({ ...newUser, name: e.target.value, })} />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="Email" onChange={e => setNewUser({ ...newUser, email: e.target.value, })} />
        </div>
        <div className="w-full grid gap-3">
          <Label htmlFor="role">Role</Label>
          <Select defaultValue="staff" onValueChange={value => setNewUser({ ...newUser, role: value as UserRole })}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Role" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Role</SelectLabel>
                <SelectItem value="admin">Admin</SelectItem>
                <SelectItem value="staff">Staff</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </CustomDialog>
  )
}

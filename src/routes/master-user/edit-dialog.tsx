import CustomDialog from "@/components/custom-dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import type { User, UserRole, UserStatus } from "@/data/users";
import React from "react";

type EditDialogProps = {
  open: boolean,
  onOpenChange: (value: boolean) => void,
  user: User,
  onConfirm: (edited: User) => void,
}

export default function EditDialog({ open, onOpenChange, user, onConfirm }: EditDialogProps) {
  const [editedUser, setEditedUser] = React.useState({ ...user })

  return (

    <CustomDialog
      title={`Edit item ${user.name}`}
      open={open}
      onOpenChange={onOpenChange}
      onConfirm={() => (onConfirm(editedUser))}
    >
      <div className="grid gap-4 my-4">
        <div className="grid gap-3">
          <Label htmlFor="name">Nama</Label>
          <Input id="name" value={editedUser.name} onChange={e => setEditedUser({ ...editedUser, name: e.target.value, })} />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" defaultValue={user.email} onChange={e => setEditedUser({ ...editedUser, email: e.target.value, })} />
        </div>
        <div className="flex gap-3">
          <div className="w-full grid gap-3">
            <Label htmlFor="role">Role</Label>
            <Select defaultValue={user.role} onValueChange={value => setEditedUser({ ...editedUser, role: value as UserRole })}>
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
          <div className="w-full grid gap-3">
            <Label htmlFor="status">Status</Label>
            <Select defaultValue={user.status} onValueChange={value => setEditedUser({ ...editedUser, status: value as UserStatus })}>
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
      </div>
    </CustomDialog>
  )
}

import React from "react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useSidebar } from "@/components/ui/sidebar";
import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle } from "@/components/ui/drawer";

type CustomDialogProps = {
  children: React.ReactNode,
  open: boolean,
  onOpenChange: (value: boolean) => void,
  onConfirm: () => void,
  title: string,
}

export default function CustomDialog({ children, open, onOpenChange, onConfirm, title }: CustomDialogProps) {

  const { isMobile } = useSidebar();

  if (isMobile) return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{title}</DrawerTitle>
        </DrawerHeader>
        <div className="px-4">
          {children}
        </div>
        <DrawerFooter>
          <Button
            onClick={() => {
              onConfirm();
              onOpenChange(false);
            }}
          >Simpan</Button>
          <DrawerClose asChild>
            <Button variant="outline">Batal</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:min-w-[540px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        {children}
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Batal</Button>
          </DialogClose>
          <Button
            onClick={() => {
              onConfirm();
              onOpenChange(false);
            }}
          >Simpan</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>

  )
}

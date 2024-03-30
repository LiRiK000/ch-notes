"use client";

import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";

import { TrashBox } from "@/app/(main)/_components/TrashBox";
import { useTrash } from "@/hooks/useTrash";

export const TrashModal = () => {
  const trash = useTrash();

  return (
    <Dialog open={trash.isOpen} onOpenChange={trash.onClose}>
      <DialogContent>
        <DialogHeader className="border-b pb-3">
          <h2 className="text-lg font-medium"></h2>
        </DialogHeader>
        <TrashBox />
      </DialogContent>
    </Dialog>
  );
};

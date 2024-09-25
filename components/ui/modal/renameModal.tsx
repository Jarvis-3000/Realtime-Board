"use client";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogHeader,
  DialogClose,
  DialogFooter,
} from "@/components/ui/dialog";
import { useRenameModal } from "@/store/useRenameModal";
import { Input } from "../input";
import { Button } from "../button";
import { FormEventHandler, useEffect, useState } from "react";
import { useApiMutation } from "@/hooks/useApiMutation";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";

export const RenameModal = () => {
  const { mutate, pending } = useApiMutation(api.board.updateById);
  const { isOpen, onClose, initialValues } = useRenameModal();
  const [title, setTitle] = useState(initialValues.title);

  useEffect(() => {
    setTitle(initialValues.title);
  }, [initialValues.title]);

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    mutate({ id: initialValues.id, title })
      .then(() => {
        toast.success("Board renamed");
        onClose();
      })
      .catch(() => {
        toast.error("Failed to rename board");
      });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white dark:bg-gray-500 max-w-[90%] text-black dark:text-white rounded-lg">
        <DialogHeader>
          <DialogTitle>
            Edit board title
          </DialogTitle>
        </DialogHeader>
        <DialogDescription className="text-black dark:text-white">
          Enter a new title for this board
        </DialogDescription>
        <form onSubmit={onSubmit}>
          <Input
            required
            disabled={pending}
            maxLength={60}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Board Title"
            className="bg-white text-black border-1 focus-visible:ring-2 focus-visible:ring-blue-500"
          />
          <DialogFooter className="mt-6">
            <DialogClose asChild>
              <Button type="button" className="bg-white dark:bg-gray-100">
                <span className="text-black">Cancel</span>
              </Button>
            </DialogClose>
            <Button type="submit" disabled={pending} className="bg-gray-800">
              Save
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

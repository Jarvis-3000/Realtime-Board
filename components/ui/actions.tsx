"use client";

import { DropdownMenuContentProps } from "@radix-ui/react-dropdown-menu";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdownMenu";
import { Link2, Pencil, Trash2 } from "lucide-react";
import { toast } from "sonner";

import { useApiMutation } from "@/hooks/useApiMutation";
import { api } from "@/convex/_generated/api";
import { ConfirmModal } from "./confirm-modal";
import { Button } from "./button";
import { useRenameModal } from "@/store/useRenameModal";

interface ActionsProps {
  id: string;
  title: string;
  children: React.ReactNode;
  side?: DropdownMenuContentProps["side"];
  sideOffset?: DropdownMenuContentProps["sideOffset"];
}

export const Actions = ({
  id,
  title,
  children,
  side,
  sideOffset,
}: ActionsProps) => {
  const { mutate, pending } = useApiMutation(api.board.deleteById);
  const { onOpen } = useRenameModal();

  const onCopyLink = () => {
    navigator.clipboard
      .writeText(`${window.location.origin}/board/${id}`)
      .then(() => {
        toast.success("Link Copied");
      })
      .catch(() => {
        toast.error("Failed to copy link");
      });
  };

  const onDelete = () => {
    mutate({ id })
      .then(() => {
        toast.success("Board deleted");
      })
      .catch(() => {
        toast.error("Failed to delete board");
      });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild title={title}>
        {children}
      </DropdownMenuTrigger>
      <DropdownMenuContent
        side={side}
        sideOffset={sideOffset}
        className="w-60 dark:bg-gray-500 border-none"
        onClick={(e) => e.stopPropagation()}
      >
        <DropdownMenuItem onClick={onCopyLink}>
          <Link2 className="h-4 w-4 mr-2" />
          Copy Board Link
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onOpen(id, title)}>
          <Pencil className="h-4 w-4 mr-2" />
          Rename Title
        </DropdownMenuItem>
        <ConfirmModal
          header="Delete board?"
          description="This will delete the board and its content"
          disabled={pending}
          onConfirm={onDelete}
        >
          <Button
            variant="ghost"
            className="w-full p-3 cursor-pointer text-sm justify-start font-normal"
          >
            <Trash2 className="h-4 w-4 mr-2" />
            Delete
          </Button>
        </ConfirmModal>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

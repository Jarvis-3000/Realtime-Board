"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { api } from "@/convex/_generated/api";
import { useOrganization } from "@clerk/nextjs";
import { useApiMutation } from "@/hooks/useApiMutation";
import { LoaderCircle } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const EmptyBoard = () => {
  const router = useRouter();
  const { pending, mutate } = useApiMutation(api.board.createBoard);
  const { organization } = useOrganization();

  const handleCreate = () => {
    if (!organization) {
      return false;
    }

    mutate({
      title: "untitled",
      orgId: organization?.id,
    })
      .then((id) => {
        toast.success("Board created");
        router.push(`/board/${id}`);
      })
      .catch(() => {
        toast.error("Failed to create board");
      });
  };

  return (
    <div className="h-full w-full bg-white dark:bg-gray-400 flex flex-col items-center justify-center">
      <Image src="/note.svg" height={140} width={140} alt="empty board" />
      <h2 className="text-2xl text-black dark:text-white font-semibold mt-6">Create your first board!</h2>
      <p className="text-sm text-black dark:text-white text-muted-foreground mt-2">
        Start by creating a board for your organization
      </p>
      <div className="mt-6">
        <Button onClick={handleCreate} disabled={pending} size="lg">
          {pending && <LoaderCircle className="animate-spin mr-3" />}
          Create board
        </Button>
      </div>
    </div>
  );
};

export default EmptyBoard;

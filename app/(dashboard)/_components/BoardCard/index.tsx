"use client";

import Image from "next/image";
import Link from "next/link";
import { Overlay } from "./Overlay";

import { formatDistanceToNow } from "date-fns";
import { useAuth } from "@clerk/nextjs";
import { Footer } from "./Footer";
import { Skeleton } from "@/components/ui/skeleton";
import { Actions } from "@/components/ui/actions";
import { MoreHorizontal } from "lucide-react";
import { useApiMutation } from "@/hooks/useApiMutation";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";

interface BoardCardProps {
  id: string;
  title: string;
  imageUrl: string;
  authorId: string;
  authorName: string;
  createdAt: number;
  orgId: string;
  isFavorite: boolean;
}

const BoardCard = ({
  id,
  title,
  imageUrl,
  authorId,
  authorName,
  createdAt,
  orgId,
  isFavorite,
}: BoardCardProps) => {
  const { userId } = useAuth();
  const authorLabel = userId === authorId ? "You" : authorName;
  const createdLabel = formatDistanceToNow(createdAt, { addSuffix: true });

  const { mutate: onFavorite, pending: pendingFavorite } = useApiMutation(
    api.board.favorite
  );
  const { mutate: onUnfavorite, pending: pendingUnfavorite } = useApiMutation(
    api.board.unfavorite
  );

  const toggleFavorite = () => {
    if (isFavorite) {
      onUnfavorite({ id }).catch(() => {
        toast.error("Failed to unfavorite");
      });
    } else {
      onFavorite({ id, orgId }).catch(() => {
        toast.error("Failed to favorite");
      });
    }
  };

  return (
    <Link href={`/board/${id}`}>
      <div className="group aspect-[100/120] border-none shadow-lg rounded-lg flex flex-col justify-between overflow-hidden">
        <div className="relative bg-amber-50 flex-1">
          <Image
            src={imageUrl}
            fill
            alt={title}
            className="object-fit"
            sizes="100vw"
          />
          <Overlay />
          <Actions id={id} title={title} side="right">
            <button className="absolute z-50 top-1 right-2 ">
              <MoreHorizontal className="text-black group-hover:text-white" />
            </button>
          </Actions>
        </div>
        <Footer
          isFavorite={isFavorite}
          title={title}
          authorLabel={authorLabel}
          createdLabel={createdLabel}
          onClick={toggleFavorite}
          disabled={pendingFavorite || pendingUnfavorite}
        />
      </div>
    </Link>
  );
};

BoardCard.Skeleton = function BoardCardSkeleton() {
  return (
    <div className="group aspect-[100/120] rounded-lg overflow-hidden">
      <Skeleton className="w-full h-full bg-gray-300" />
    </div>
  );
};

export default BoardCard;

"use client";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { useQuery } from "convex/react";

import { Skeleton } from "@/components/ui/skeleton";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Hint from "@/components/ui/hint";
import { useRenameModal } from "@/store/useRenameModal";
import { Actions } from "@/components/ui/actions";
import { Menu } from "lucide-react";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
});

interface InfoProps {
  boardId: string;
}

const TabSeparator = () => {
  return <div className="text-gray-300 px-1 text-2xl">|</div>;
};

export const Info = ({ boardId }: InfoProps) => {
  const { onOpen } = useRenameModal();
  const data = useQuery(api.board.get, { id: boardId as Id<"boards"> });

  if (!data) {
    return <InfoSkeleton />;
  }

  return (
    <div className="absolute top-2 left-2 flex items-center py-2 px-2 bg-white dark:bg-gray-500 rounded-lg shadow-md">
      <Hint
        label="Go to boards"
        side="bottom"
        sideOffset={15}
        tooltipArrow={false}
      >
        <Button asChild className="px-2 " variant="board">
          <Link href="/">
            <Image src="/logo.svg" alt="board logo" width={40} height={40} />
            <span
              className={cn(
                "font-semibold text-xl ml-2",
                font.className
              )}
            >
              Board
            </span>
          </Link>
        </Button>
      </Hint>
      <TabSeparator />
      <Hint
        label="Click to rename"
        side="bottom"
        sideOffset={15}
        tooltipArrow={false}
        deleyDuration={300}
      >
        <Button
          variant="board"
          className="text-base font-medium px-2"
          onClick={() => onOpen(data._id, data.title)}
        >
          {data.title}
        </Button>
      </Hint>
      <TabSeparator />
      <Actions id={data._id} title={data.title} side="bottom" sideOffset={15}>
        <div>
          <Hint
            label="Main menu"
            side="bottom"
            sideOffset={15}
            tooltipArrow={false}
          >
            <Button size="icon" variant="board">
              <Menu />
            </Button>
          </Hint>
        </div>
      </Actions>
    </div>
  );
};

export const InfoSkeleton = () => {
  return (
    <Skeleton className="absolute top-2 bg-white dark:bg-gray-500 rounded-lg shadow-md left-2 w-[300px] h-[50px]"></Skeleton>
  );
};

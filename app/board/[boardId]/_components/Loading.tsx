import { Loader } from "lucide-react";
import { InfoSkeleton } from "./Info";
import { ParticipantsSkeleton } from "./Participants";
import { ToolbarSkeleton } from "./Toolbar";

export const Loading = () => {
  return (
    <div className="w-full h-full relative bg-neutral-100 dark:bg-neutral-400 touch-none flex items-center justify-center">
      <Loader className="h-8 w-8 dark:text-white text-muted-foreground animate-spin" />
      <InfoSkeleton />
      <ParticipantsSkeleton />
      <ToolbarSkeleton />
    </div>
  );
};

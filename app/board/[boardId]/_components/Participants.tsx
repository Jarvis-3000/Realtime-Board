"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { UserAvatar } from "./UserAvatar";

import { useOthers, useSelf } from "@liveblocks/react/suspense";
import { connectionIdToColor } from "@/lib/utils";

const MAX_SHOWN_OTHER_USERS = 1;

export const Participants = () => {
  const otherUsers = useOthers();
  const currentUser = useSelf();
  const hasMoreUsers = otherUsers.length > MAX_SHOWN_OTHER_USERS;

  return (
    <div className="absolute top-2 right-2 bg-white dark:bg-gray-500 rounded-lg py-2 px-4 shadow-md">
      <div className="flex flex-col sm:flex-row gap-2 items-center">
        {otherUsers
          .slice(0, MAX_SHOWN_OTHER_USERS)
          .map(({ connectionId, info }) => {
            return (
              <UserAvatar
                key={connectionId}
                src={info?.picture}
                name={info?.name}
                fallback={info?.name?.[0] || "T"}
                borderColor={connectionIdToColor(connectionId)}
              />
            );
          })}
        {currentUser && (
          <UserAvatar
            src={currentUser.info?.picture}
            name={`${currentUser.info?.name} (You)`}
            fallback={currentUser.info?.name?.[0]}
            borderColor={connectionIdToColor(currentUser.connectionId)}
          />
        )}
        {hasMoreUsers && (
          <UserAvatar
            name={`+${otherUsers.length - MAX_SHOWN_OTHER_USERS} more`}
            fallback={`+${otherUsers.length - MAX_SHOWN_OTHER_USERS}`}
          />
        )}
      </div>
    </div>
  );
};

export const ParticipantsSkeleton = () => {
  return (
    <Skeleton className="absolute top-2 right-2 bg-white dark:bg-gray-500 rounded-lg w-[50px] md:w-[100px] h-[100px] md:h-[50px] shadow-md" />
  );
};

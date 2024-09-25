"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

import EmptyBoard from "./EmptyBoard";
import { EmptyFavorites } from "./EmptyFavorites";
import EmptySearch from "./EmptySearch";
import BoardCard from "./BoardCard";
import { AddBoardCard } from "./BoardCard/AddBoardCard";

interface BoardListProps {
  orgId: string;
  query: {
    search?: string;
    favorites?: string;
  };
}

export const BoardList = ({ orgId, query }: BoardListProps) => {
  const data = useQuery(api.boards.getAllByOrgId, {
    orgId,
    ...query,
  });

  if (data === undefined) {
    return (
      <div className="h-full bg-white dark:bg-gray-400 overflow-y-auto px-5 py-5">
        <h2 className="text-3xl text-black dark:text-white">
          {query.favorites ? "Favorite boards" : "Team boards"}
        </h2>
        {/*  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-10 pb-10">
          <AddBoardCard orgId={orgId} disabled={true} />
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
        </div>
      </div>
    );
  }
  if (!data?.length && query.search) {
    return <EmptySearch />;
  }
  if (!data?.length && query.favorites) {
    return <EmptyFavorites />;
  }
  if (!data?.length) {
    return <EmptyBoard />;
  }

  return (
    <div className="h-full bg-white dark:bg-gray-400 overflow-y-auto px-5 py-5">
      <h2 className="text-3xl text-black dark:text-white">
        {query.favorites ? "Favorite boards" : "Team boards"}
      </h2>
      {/*  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-10 pb-10">
        <AddBoardCard orgId={orgId} disabled={false} />
        {data?.map((board) => {
          return (
            <BoardCard
              key={board._id}
              id={board._id}
              title={board.title}
              imageUrl={board.imageUrl}
              authorId={board.authorId}
              authorName={board.authorName}
              createdAt={board._creationTime}
              orgId={board.orgId}
              isFavorite={board.isFavorite}
            />
          );
        })}
      </div>
    </div>
  );
};

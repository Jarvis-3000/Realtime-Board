import Image from "next/image";

export const EmptyFavorites = () => {
  return (
    <div className="h-full w-full bg-white dark:bg-gray-400 flex flex-col items-center justify-center">
      <Image
        src="/empty-favorites.svg"
        height={140}
        width={140}
        alt="Empty favorites"
      />
      <h2 className="text-2xl text-black dark:text-white font-semibold mt-6">No favorites found!</h2>
      <p className="text-sm text-black dark:text-white text-muted-foreground mt-2">
        Try favoriting boards
      </p>
    </div>
  );
};

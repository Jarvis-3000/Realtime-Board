import { Canvas } from "./_components/Canvas";
import { Room } from "@/components/Room";
import { Loading } from "./_components/Loading";

interface BoardIdPageProps {
  params: {
    boardId: string;
  };
}

const BoardIdPage = ({ params }: BoardIdPageProps) => {
  return (
    <div className="relative h-full w-full">
      <Room roomId={params.boardId} fallback={<Loading />}>
        <Canvas boardId={params.boardId} />
      </Room>
    </div>
  );
};

export default BoardIdPage;

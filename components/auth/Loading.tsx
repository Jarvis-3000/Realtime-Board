import Image from "next/image";

const Loading = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Image
        src="/logo.svg"
        width={200}
        height={120}
        alt="logo"
        className="animate-pulse duration-700"
      />
    </div>
  );
};

export default Loading;

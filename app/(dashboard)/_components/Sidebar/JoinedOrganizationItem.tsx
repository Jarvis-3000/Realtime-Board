import Hint from "@/components/ui/hint";
import { cn } from "@/lib/utils";
import { useOrganizationList, useOrganization } from "@clerk/nextjs";
import Image from "next/image";

interface JoinedOrganizationItemProps {
  id: string;
  name: string;
  imageUrl: string;
}

export const JoinedOrganizationItem: React.FC<JoinedOrganizationItemProps> = ({
  id,
  name,
  imageUrl,
}) => {
  const { organization } = useOrganization();
  const { setActive } = useOrganizationList();

  const isActive = organization?.id === id;

  const handleClick = () => {
    if (!setActive) {
      return false;
    }

    setActive({ organization: id });
  };

  return (
    <div className="aspect-square relative">
      <Hint label={name}>
        <Image
          src={imageUrl}
          fill
          alt={name}
          onClick={handleClick}
          className={cn(
            "rounded-md cursor-pointer opacity-75 hover:opacity-100 transition",
            isActive && "hover:opacity-100"
          )}
        />
      </Hint>
    </div>
  );
};

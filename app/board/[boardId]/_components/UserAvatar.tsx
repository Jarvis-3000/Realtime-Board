import Hint from "@/components/ui/hint";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface UserAvatarProps {
  src?: string;
  name?: string;
  fallback?: string;
  borderColor?: string;
}

export const UserAvatar = ({
  src,
  name,
  fallback,
  borderColor,
}: UserAvatarProps) => {
  return (
    <Hint
      label={name || "Anoymous"}
      side="bottom"
      sideOffset={15}
      tooltipArrow={false}
    >
      <Avatar className="h-8 w-8 border-2" style={{ borderColor: borderColor }}>
        <AvatarImage src={src} />
        <AvatarFallback className="text-xs font-semibold bg-gray-100 text-black">
          {fallback}
        </AvatarFallback>
      </Avatar>
    </Hint>
  );
};

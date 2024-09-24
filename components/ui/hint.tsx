import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";

interface HintProps {
  label: string;
  children: React.ReactNode;
  side?: "top" | "right" | "bottom" | "left";
  align?: "start" | "center" | "end";
  sideOffset?: number;
  alignOffset?: number;
  tooltipArrow?: boolean;
  deleyDuration?: number;
}

const Hint = ({
  label,
  children,
  side = "right",
  align = "center",
  sideOffset = 5,
  alignOffset,
  tooltipArrow = true,
  deleyDuration = 100,
}: HintProps) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={deleyDuration}>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent
          side={side}
          sideOffset={sideOffset}
          align={align}
          alignOffset={alignOffset}
          className="text-white bg-gray-800 border-gray-800"
        >
          {label}
          {tooltipArrow && <TooltipArrow className="fill-gray-800" />}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default Hint;

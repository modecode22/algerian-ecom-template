import { HoverCard as DefaultHoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { ReactNode } from "react";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import { cn } from "@/lib/utils";

type HoverCardProps = HoverCardPrimitive.HoverCardProps & {
  children: ReactNode;
  hoverCard: JSX.Element;
  hoverCardContentClassName?: string;
};
const HoverCard = ({ children, hoverCard, hoverCardContentClassName, ...props }: HoverCardProps) => {
  return (
    <DefaultHoverCard {...props}>
      <HoverCardTrigger asChild>{children}</HoverCardTrigger>
      <HoverCardContent className={cn("w-80", hoverCardContentClassName)}>{hoverCard}</HoverCardContent>
    </DefaultHoverCard>
  );
};

export default HoverCard;

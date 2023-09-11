import { cn } from "@nextui-org/system-rsc";

import { Link, LinkProps } from "@/components/Link";

export type EventCardLinkProps = LinkProps;

export const EventCardLink = ({ className, ...props }: EventCardLinkProps) => {
  return <Link className={cn("relative z-20", className)} {...props} />;
};

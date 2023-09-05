import { ReactNode } from "react";

export type EventCardContentProps = {
  children?: ReactNode;
};

export const EventCardContent = ({ children }: EventCardContentProps) => {
  return <div className="flex flex-col gap-1">{children}</div>;
};

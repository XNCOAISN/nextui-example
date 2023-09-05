import { ReactNode } from "react";

export type EventCardBodyProps = {
  children?: ReactNode;
};

export const EventCardBody = ({ children }: EventCardBodyProps) => {
  return (
    <div className="flex flex-col flex-1 gap-2 justify-between overflow-hidden">
      {children}
    </div>
  );
};

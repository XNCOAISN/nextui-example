import { ReactNode, cloneElement } from "react";

export type EventCardLabelProps = {
  children: ReactNode;
  icon: JSX.Element;
};

export const EventCardLabel = ({ children, icon }: EventCardLabelProps) => {
  return (
    <div className="flex items-center gap-1 text-default-500 overflow-hidden">
      {cloneElement(icon, { className: "w-6 h-6" })}
      <div className="text-sm line-clamp-1 flex-1 overflow-hidden">
        {children}
      </div>
    </div>
  );
};

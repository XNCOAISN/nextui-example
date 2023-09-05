import { Chip } from "@nextui-org/chip";
import { Badge } from "@nextui-org/badge";
import dayjs from "dayjs";
import { ReactNode } from "react";

export type EventCardHeadProps = {
  children?: ReactNode;
  date: string;
  title: string;
};

export const EventCardHead = ({ date, title }: EventCardHeadProps) => {
  const isThisYear = dayjs(date).isSame(dayjs(), "year");
  const dateFormat = isThisYear
    ? "M月D日 dddd HH:mm"
    : "YYYY年 M月D日 dddd HH:mm";

  return (
    <div>
      <div className="flex-1 font-semibold text-default-500">
        {dayjs(date).format(dateFormat)}
      </div>
      <h2 className="text-xl flex-1 font-bold line-clamp-1">{title}</h2>
    </div>
  );
};

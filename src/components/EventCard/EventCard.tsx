import { Card, CardBody, CardProps } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";

import { Link } from "@/components/Link";
import { cn } from "@nextui-org/system-rsc";

export type EventCardProps = CardProps & {
  isOrganizer?: boolean;
  href?: string;
};

export const EventCard = ({
  children,
  className,
  isOrganizer,
  href,
  ...props
}: EventCardProps) => {
  return (
    <Card
      radius="sm"
      shadow="sm"
      isHoverable
      fullWidth
      className={cn("relative cursor-pointer", className)}
      as={href ? "div" : "button"}
      {...props}
    >
      {href ? <Link href={href} className="absolute inset-0 z-10" /> : null}
      <CardBody className="flex flex-row gap-4 p-4">{children}</CardBody>
      {isOrganizer ? <OrganizerChip /> : null}
    </Card>
  );
};

const OrganizerChip = () => {
  return (
    <Chip
      color="primary"
      className="absolute top-2 right-2 z-10 border-2 border-content1"
    >
      主催
    </Chip>
  );
};

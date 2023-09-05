import { Card, CardBody, CardProps } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";

export type EventCardProps = CardProps & {
  isOrganizer?: boolean;
};

export const EventCard = ({
  children,
  className,
  isOrganizer,
  ...props
}: EventCardProps) => {
  return (
    <Card radius="sm" shadow="sm" isHoverable isPressable fullWidth {...props}>
      <CardBody className="flex flex-row gap-4 p-4">{children}</CardBody>
      {isOrganizer ? (
        <Chip
          color="primary"
          className="absolute top-2 right-2 z-10 border-2 border-content1"
        >
          主催
        </Chip>
      ) : null}
    </Card>
  );
};

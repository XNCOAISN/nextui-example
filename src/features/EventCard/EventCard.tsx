import {
  EventCard as EventCardBase,
  EventCardProps as EventCardBaseProps,
  EventCardBody,
  EventCardContent,
  EventCardHead,
  EventCardImage,
  EventCardLabel,
} from "@/components/EvemtCard";
import { Link } from "@/components/Link";
import { Avatar } from "@nextui-org/avatar";
import { IconMapPin, IconTag } from "@tabler/icons-react";

type Event = {
  id: string;
  name: string;
  profileImage: string;
  startDate: string;
  locationName: string;
};

type Organizer = {
  id: string;
  name: string;
  profileImage: string;
};

type Category = {
  id: string;
  name: string;
};

export type EventCardProps = EventCardBaseProps & {
  event: Event;
  organizer: Organizer;
  category: Category;
};

export const EventCard = async ({
  event,
  organizer,
  category,
  ...props
}: EventCardProps) => {
  return (
    <EventCardBase {...props}>
      <EventCardImage src={event.profileImage} />
      <EventCardBody>
        <EventCardHead date={event.startDate} title={event.name} />
        <EventCardContent>
          <EventCardLabel icon={<Avatar src={organizer.profileImage} />}>
            <Link href={`/user/${organizer.id}`}>{organizer.name}</Link>
          </EventCardLabel>
          <EventCardLabel icon={<IconMapPin />}>
            <Link href="#">{event.locationName}</Link>
          </EventCardLabel>
          <EventCardLabel icon={<IconTag />}>
            <Link href={`/category/${category.id}`}>{category.name}</Link>
          </EventCardLabel>
        </EventCardContent>
      </EventCardBody>
    </EventCardBase>
  );
};

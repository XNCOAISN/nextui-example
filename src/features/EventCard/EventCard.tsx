import {
  EventCard as EventCardBase,
  EventCardProps as EventCardBaseProps,
  EventCardBody,
  EventCardContent,
  EventCardHead,
  EventCardImage,
  EventCardLabel,
} from "@/components/EventCard";
import { EventCardLink } from "@/components/EventCard/EventCardLink";
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
    <EventCardBase {...props} href={`/event/${event.id}`}>
      <EventCardImage src={event.profileImage} />
      <EventCardBody>
        <EventCardHead date={event.startDate} title={event.name} />
        <EventCardContent>
          <EventCardLabel icon={<Avatar src={organizer.profileImage} />}>
            <EventCardLink href={`/user/${organizer.id}`}>
              {organizer.name}
            </EventCardLink>
          </EventCardLabel>
          <EventCardLabel icon={<IconMapPin />}>
            <EventCardLink href="#">{event.locationName}</EventCardLink>
          </EventCardLabel>
          <EventCardLabel icon={<IconTag />}>
            <EventCardLink href={`/category/${category.id}`}>
              {category.name}
            </EventCardLink>
          </EventCardLabel>
        </EventCardContent>
      </EventCardBody>
    </EventCardBase>
  );
};

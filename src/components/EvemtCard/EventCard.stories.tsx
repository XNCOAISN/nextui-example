import type { Meta, StoryObj } from "@storybook/react";

import { Avatar } from "@nextui-org/avatar";
import { IconMapPin, IconTag } from "@tabler/icons-react";
import { MainLayoutDecorator } from "@/stories/decorators/MainLayoutDecorator";

import {
  EventCard,
  EventCardHead,
  EventCardContent,
  EventCardLabel,
  EventCardImage,
  EventCardBody,
  EventCardLink,
} from "./";

const meta = {
  component: EventCard,
  tags: ["autodocs"],
  title: "Components/EventCard",
  decorators: [MainLayoutDecorator],
} satisfies Meta<typeof EventCard>;

export default meta;

type Story = StoryObj<typeof meta>;

const IconAvatar = ({ className }: { className?: string }) => {
  return (
    <Avatar
      className={className}
      src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
    />
  );
};

export const Default: Story = {
  render: () => {
    return (
      <EventCard isOrganizer href="#">
        <EventCardImage src="https://picsum.photos/seed/picsum/200/300" />
        <EventCardBody>
          <EventCardHead
            date="2023/04/05 06:07:08"
            title="TitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitle"
          />
          <EventCardContent>
            <EventCardLabel icon={<IconAvatar />}>
              <EventCardLink href="#">Organizer</EventCardLink>
            </EventCardLabel>
            <EventCardLabel icon={<IconMapPin />}>
              <EventCardLink href="#">Location</EventCardLink>
            </EventCardLabel>
            <EventCardLabel icon={<IconTag />}>
              <EventCardLink href="#">
                CategoryCategoryCategoryCategoryCategoryCategoryCategoryCategoryCategoryCategoryCategoryCategoryCategoryCategory
              </EventCardLink>
            </EventCardLabel>
          </EventCardContent>
        </EventCardBody>
      </EventCard>
    );
  },
};

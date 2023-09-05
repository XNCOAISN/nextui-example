import type { Meta, StoryObj } from "@storybook/react";

import { Avatar } from "@nextui-org/avatar";
import { IconMapPin, IconTag } from "@tabler/icons-react";
import { MainLayoutDecorator } from "@/stories/decorators/MainLayoutDecorator";

import { Link } from "@/components/Link";

import { EventCard } from "./EventCard";
import { EventCardHead } from "./EventCardHead";
import { EventCardContent } from "./EventCardContent";
import { EventCardLabel } from "./EventCardLabel";
import { EventCardImage } from "./EventCardImage";
import { EventCardBody } from "./EventCardBody";

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
      <EventCard isOrganizer>
        <EventCardImage src="https://picsum.photos/seed/picsum/200/300" />
        <EventCardBody>
          <EventCardHead
            date="2023/04/05 06:07:08"
            title="TitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitle"
          />
          <EventCardContent>
            <EventCardLabel icon={<IconAvatar />}>
              <Link href="#">Organizer</Link>
            </EventCardLabel>
            <EventCardLabel icon={<IconMapPin />}>
              <Link href="#">Location</Link>
            </EventCardLabel>
            <EventCardLabel icon={<IconTag />}>
              <Link href="#">
                CategoryCategoryCategoryCategoryCategoryCategoryCategoryCategoryCategoryCategoryCategoryCategoryCategoryCategory
              </Link>
            </EventCardLabel>
          </EventCardContent>
        </EventCardBody>
      </EventCard>
    );
  },
};

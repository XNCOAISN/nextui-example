import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "@nextui-org/avatar";
import { IconHome } from "@tabler/icons-react";

import { Link } from "./Link";

const meta = {
  component: Link,
  tags: ["autodocs"],
  title: "Components/Link",
  args: {
    href: "#",
  },
} satisfies Meta<typeof Link>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Link",
  },
};

export const Icon: Story = {
  args: {
    children: <IconHome />,
  },
};

export const Image: Story = {
  args: {
    children: <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />,
  },
};

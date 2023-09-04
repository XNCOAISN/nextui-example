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

export const Colors: Story = {
  render: ({ href }) => {
    return (
      <div className="flex flex-col">
        <Link href={href} color="foreground">
          foreground
        </Link>
        <Link href={href} color="primary">
          primary
        </Link>
        <Link href={href} color="secondary">
          secondary
        </Link>
        <Link href={href} color="success">
          success
        </Link>
        <Link href={href} color="warning">
          warning
        </Link>
        <Link href={href} color="danger">
          danger
        </Link>
      </div>
    );
  },
};

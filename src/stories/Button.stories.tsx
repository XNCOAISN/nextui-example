import { Button } from "@nextui-org/button";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: Button,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  title: "Button",
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
  },
};

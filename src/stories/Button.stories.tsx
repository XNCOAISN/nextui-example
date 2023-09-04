import { Button } from "@nextui-org/button";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: Button,
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

export const Variants: Story = {
  render: () => {
    return (
      <div className="flex flex-col gap-2 w-[200px]">
        <Button variant="solid">solid</Button>
        <Button variant="bordered">bordered</Button>
        <Button variant="light">light</Button>
        <Button variant="flat">flat</Button>
        <Button variant="faded">faded</Button>
        <Button variant="shadow">shadow</Button>
        <Button variant="ghost">ghost</Button>
      </div>
    );
  },
};

import type { Args, PartialStoryFn } from "@storybook/csf";
import type { ReactRenderer } from "@storybook/react";

export const MainLayoutDecorator = (
  Story: PartialStoryFn<ReactRenderer, Args>
) => {
  return (
    <div className="max-w-4xl mx-auto flex flex-col gap-4 px-6 mt-8">
      <Story />
    </div>
  );
};

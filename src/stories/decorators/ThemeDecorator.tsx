import type { Args, PartialStoryFn } from "@storybook/csf";
import type { ReactRenderer } from "@storybook/react";

import { ThemeProvider } from "@/components/ThemeProvider";

export const ThemeDecorator = (Story: PartialStoryFn<ReactRenderer, Args>) => {
  return (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  );
};

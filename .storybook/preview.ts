import "../src/app/globals.css";

import { withThemeByClassName } from "@storybook/addon-styling";
import type { Preview } from "@storybook/react";

import { ThemeDecorator } from "./../src/stories/decorators/ThemeDecorator";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    withThemeByClassName({
      themes: {
        light: "light",
        dark: "dark",
      },
      defaultTheme: "light",
    }),
    ThemeDecorator,
  ],
};

export default preview;

"use client";

import { NextUIProvider } from "@nextui-org/react";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};

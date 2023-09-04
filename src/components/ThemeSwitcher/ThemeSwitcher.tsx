"use client";

import { Button } from "@nextui-org/button";
import { cn } from "@nextui-org/react";
import { Skeleton } from "@nextui-org/skeleton";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export type ThemeSwitcherProps = {
  className?: string;
};

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Skeleton className={cn("h-10 w-10 rounded-xl", className)} />;
  }

  return (
    <div className={className}>
      {theme === "dark" ? (
        <Button isIconOnly onClick={() => setTheme("light")}>
          <IconSun />
        </Button>
      ) : (
        <Button isIconOnly onClick={() => setTheme("dark")}>
          <IconMoon />
        </Button>
      )}
    </div>
  );
};

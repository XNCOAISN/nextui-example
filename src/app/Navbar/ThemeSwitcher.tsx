"use client";

import { cn } from "@nextui-org/system-rsc";
import { Skeleton } from "@nextui-org/skeleton";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { NavbarIconButton } from "@/components/Navbar";

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
    return <Skeleton className={cn("h-8 w-8 rounded-xl -mx-1.5", className)} />;
  }

  const handleClick = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <NavbarIconButton className={className} onClick={handleClick}>
      {theme === "dark" ? <IconSun /> : <IconMoon />}
    </NavbarIconButton>
  );
};

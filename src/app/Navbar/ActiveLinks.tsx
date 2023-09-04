"use client";

import { IconCalendar, IconHome } from "@tabler/icons-react";

import { NavbarActiveLink } from "@/components/Navbar";

export const HomeActiveLink = () => {
  return (
    <NavbarActiveLink href="/" icon={<IconHome />}>
      ホーム
    </NavbarActiveLink>
  );
};

export const EventActiveLink = () => {
  return (
    <NavbarActiveLink href="/event" icon={<IconCalendar />}>
      イベント
    </NavbarActiveLink>
  );
};

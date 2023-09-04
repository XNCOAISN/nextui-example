import { Logo } from "@/components/Logo";
import {
  Navbar as NavbarBase,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarLink,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuLink,
  NavbarMenuToggle,
} from "@/components/Navbar";
import { Link } from "@/components/Link";

import { EventActiveLink, HomeActiveLink } from "./ActiveLinks";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { User } from "./User";
import { SignIn } from "./SignIn";
import { IconCalendar, IconHome } from "@tabler/icons-react";

const getAuthUser = async (flag: boolean) => {
  if (flag) {
    return {
      name: "name",
      displayId: "displayId",
      profileImage: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    };
  }
  return null;
};

export const Navbar = async () => {
  const authUser = await getAuthUser(true);

  return (
    <NavbarBase>
      <NavbarMenuToggle className="sm:hidden" />
      <NavbarMenu className="sm:hidden">
        <NavbarMenuItem>
          <NavbarMenuLink href="/" icon={<IconHome />}>
            ホーム
          </NavbarMenuLink>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <NavbarMenuLink href="/" icon={<IconCalendar />}>
            イベント
          </NavbarMenuLink>
        </NavbarMenuItem>
      </NavbarMenu>

      <NavbarBrand>
        <Link href="/">
          <Logo />
        </Link>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex" justify="start">
        <NavbarItem>
          <HomeActiveLink />
        </NavbarItem>
        <NavbarItem>
          <EventActiveLink />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        {authUser ? (
          <NavbarItem>
            <NavbarLink href="/">イベントをつくる</NavbarLink>
          </NavbarItem>
        ) : null}

        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>

        <NavbarItem>
          {authUser ? (
            <Link href="/user/edit">
              <User user={authUser} />
            </Link>
          ) : (
            <SignIn />
          )}
        </NavbarItem>
      </NavbarContent>
    </NavbarBase>
  );
};

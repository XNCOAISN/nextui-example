import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@nextui-org/button";
import {
  IconBell,
  IconCalendar,
  IconHome,
  IconSearch,
} from "@tabler/icons-react";

import { Logo } from "@/components/Logo";
import { Link } from "@/components/Link";

import {
  Navbar,
  NavbarActiveLink,
  NavbarBrand,
  NavbarContent,
  NavbarIconButton,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuLink,
  NavbarMenuToggle,
  NavbarUser,
  NavbarItem,
  NavbarLink,
} from ".";

const meta = {
  component: Navbar,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  title: "Components/Navbar",
  decorators: [
    (Story) => {
      return (
        <div>
          <Story />
          <div className="max-w-4xl mx-auto flex flex-col gap-4 px-6 mt-8">
            <h1 className="text-2xl font-bold mb-5">
              Lorem ipsum dolor sit ame
            </h1>
            {[...Array(10)].map((_, i) => (
              <div key={i} className="mb-5 text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita voluptatum accusamus consequatur magnam, quo suscipit
                officiis, illum sequi quas laborum ea deleniti neque temporibus
                similique voluptates minima omnis laudantium consectetur?
              </div>
            ))}
          </div>
        </div>
      );
    },
  ],
} satisfies Meta<typeof Navbar>;

export default meta;

type Story = StoryObj<typeof meta>;

const menu = [
  {
    href: "/",
    icon: <IconHome />,
    label: "ホーム",
  },
  {
    href: "/event",
    icon: <IconCalendar />,
    label: "イベント",
  },
];

export const Authenticated = {
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: "/",
      },
    },
  },
  render: () => {
    return (
      <Navbar>
        <NavbarMenuToggle className="sm:hidden" />
        <NavbarMenu className="sm:hidden">
          {menu.map(({ href, label, icon }) => (
            <NavbarMenuItem key={href}>
              <NavbarMenuLink href={href} icon={icon}>
                {label}
              </NavbarMenuLink>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>

        <NavbarBrand>
          <Link href="/">
            <Logo />
          </Link>
        </NavbarBrand>

        <NavbarContent className="hidden sm:flex" justify="start">
          {menu.map(({ href, label, icon }) => (
            <NavbarItem key={href}>
              <NavbarActiveLink href={href} icon={icon}>
                {label}
              </NavbarActiveLink>
            </NavbarItem>
          ))}
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem>
            <NavbarLink href="/event/new">イベントをつくる</NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarIconButton>
              <IconSearch />
            </NavbarIconButton>
          </NavbarItem>
          <NavbarItem>
            <NavbarIconButton>
              <IconBell />
            </NavbarIconButton>
          </NavbarItem>
          <NavbarItem>
            <Link href="/user/edit">
              <NavbarUser src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
            </Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    );
  },
};

export const Unauthenticated = {
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: "/",
      },
    },
  },
  render: () => {
    return (
      <Navbar>
        <NavbarMenuToggle className="sm:hidden" />
        <NavbarMenu className="sm:hidden">
          {menu.map(({ href, label, icon }) => (
            <NavbarMenuItem key={href}>
              <NavbarMenuLink href={href} icon={icon}>
                {label}
              </NavbarMenuLink>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>

        <NavbarBrand>
          <Link href="/">
            <Logo />
          </Link>
        </NavbarBrand>

        <NavbarContent className="hidden sm:flex" justify="start">
          {menu.map(({ href, label, icon }) => (
            <NavbarItem key={href}>
              <NavbarActiveLink href={href} icon={icon}>
                {label}
              </NavbarActiveLink>
            </NavbarItem>
          ))}
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem>
            <NavbarIconButton>
              <IconSearch />
            </NavbarIconButton>
          </NavbarItem>
          <NavbarItem>
            <Button color="primary" variant="flat" className="font-bold">
              ログイン
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    );
  },
};

import { Avatar, AvatarProps } from "@nextui-org/avatar";
import { ComponentPropsWithoutRef } from "react";

export type NavbarUserProps = AvatarProps & ComponentPropsWithoutRef<"button">;

export const NavbarUser = (props: NavbarUserProps) => {
  return (
    <Avatar as="button" className="transition-transform" size="sm" {...props} />
  );
};

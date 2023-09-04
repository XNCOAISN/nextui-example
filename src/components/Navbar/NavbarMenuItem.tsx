import type { NavbarMenuItemProps as NavbarMenuItemBaseProps } from "@nextui-org/navbar";
import { NavbarMenuItem as NavbarMenuItemBase } from "@nextui-org/navbar";
import { cn } from "@nextui-org/system-rsc";

export type NavbarMenuItemProps = NavbarMenuItemBaseProps;

export const NavbarMenuItem = ({
  children,
  className,
  ...props
}: NavbarMenuItemProps) => {
  return (
    <NavbarMenuItemBase {...props} className={cn("flex", className)}>
      {children}
    </NavbarMenuItemBase>
  );
};

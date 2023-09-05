import type { NavbarItemProps as NavbarItemBaseProps } from "@nextui-org/navbar";
import { NavbarItem as NavbarItemBase } from "@nextui-org/navbar";
import { cn } from "@nextui-org/system-rsc";

export type NavbarItemProps = NavbarItemBaseProps;

export const NavbarItem = ({
  children,
  className,
  ...props
}: NavbarItemProps) => {
  return (
    <NavbarItemBase {...props} className={cn("flex text-sm", className)}>
      {children}
    </NavbarItemBase>
  );
};

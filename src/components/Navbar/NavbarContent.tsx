import type { NavbarContentProps as NavbarContentBaseProps } from "@nextui-org/navbar";
import { NavbarContent as NavbarContentBase } from "@nextui-org/navbar";
import { cn } from "@nextui-org/system-rsc";

export type NavbarContentProps = NavbarContentBaseProps;

export const NavbarContent = ({
  children,
  className,
  ...props
}: NavbarContentProps) => {
  return (
    <NavbarContentBase {...props} className={cn("flex gap-3", className)}>
      {children}
    </NavbarContentBase>
  );
};

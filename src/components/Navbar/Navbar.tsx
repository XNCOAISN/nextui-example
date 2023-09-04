import type { NavbarProps as NavbarBaseProps } from "@nextui-org/navbar";
import { Navbar as NavbarBase } from "@nextui-org/navbar";
import { cn } from "@nextui-org/system-rsc";

export type NavbarProps = NavbarBaseProps;

export const Navbar = ({ children, className, ...props }: NavbarProps) => {
  return (
    <NavbarBase {...props} className={cn("max-w-4xl mx-auto", className)}>
      {children}
    </NavbarBase>
  );
};

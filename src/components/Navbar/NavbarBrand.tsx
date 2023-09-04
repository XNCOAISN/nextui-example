import type { NavbarBrandProps as NavbarBrandBaseProps } from "@nextui-org/navbar";
import { NavbarBrand as NavbarBrandBase } from "@nextui-org/navbar";
import { cn } from "@nextui-org/system-rsc";

export type NavbarBrandProps = NavbarBrandBaseProps;

export const NavbarBrand = ({
  children,
  className,
  ...props
}: NavbarBrandProps) => {
  return (
    <NavbarBrandBase {...props} className={cn("flex-grow-0", className)}>
      {children}
    </NavbarBrandBase>
  );
};

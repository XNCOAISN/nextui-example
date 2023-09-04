import { cn } from "@nextui-org/system-rsc";
import { usePathname } from "next/navigation";

import { NavbarLink, NavbarLinkProps } from "./NavbarLink";

export type NavbarActiveLinkProps = NavbarLinkProps;

export const NavbarActiveLink = ({
  href,
  children,
  className,
  ...props
}: NavbarActiveLinkProps) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <NavbarLink
      href={href}
      className={cn(isActive && "text-primary", className)}
      {...props}
    >
      {children}
    </NavbarLink>
  );
};

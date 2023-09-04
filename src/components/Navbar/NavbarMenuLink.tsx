import { cn } from "@nextui-org/system-rsc";
import { ReactNode, cloneElement } from "react";

import { Link, LinkProps } from "@/components/Link";

export type NavbarMenuLinkProps = LinkProps & {
  children: ReactNode;
  className?: string;
  icon?: JSX.Element;
};

export const NavbarMenuLink = ({
  href,
  children,
  icon,
  className,
  ...props
}: NavbarMenuLinkProps) => {
  return (
    <Link
      href={href}
      size="lg"
      className={cn("flex gap-2 items-center font-bold", className)}
      {...props}
    >
      {icon ? cloneElement(icon, { className: "w-7 h-7" }) : null}
      {children}
    </Link>
  );
};

import { cn } from "@nextui-org/system-rsc";
import { ReactNode, cloneElement } from "react";

import { Link, LinkProps } from "@/components/Link";

export type NavbarLinkProps = LinkProps & {
  children: ReactNode;
  className?: string;
  icon?: JSX.Element;
};

export const NavbarLink = ({
  href,
  children,
  icon,
  className,
  ...props
}: NavbarLinkProps) => {
  return (
    <Link
      href={href}
      className={cn("flex gap-1 items-center font-bold text-sm", className)}
      {...props}
    >
      {icon ? cloneElement(icon, { className: "w-5 h-5" }) : null}
      {children}
    </Link>
  );
};

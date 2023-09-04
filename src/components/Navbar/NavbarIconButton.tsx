import { Button, ButtonProps } from "@nextui-org/button";
import { cn } from "@nextui-org/system-rsc";
import { cloneElement } from "react";

export type NavbarIconButtonProps = ButtonProps & { children: JSX.Element };

export const NavbarIconButton = ({
  className,
  children,
  ...props
}: NavbarIconButtonProps) => {
  return (
    <Button
      isIconOnly
      variant="light"
      size="sm"
      className={cn("-mx-1.5", className)}
      {...props}
    >
      {cloneElement(children, { className: "w-5 h-5" })}
    </Button>
  );
};

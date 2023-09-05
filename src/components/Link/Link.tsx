import { cn } from "@nextui-org/system-rsc";
import {
  Link as NextUILink,
  LinkProps as NextUILinkProps,
} from "@nextui-org/link";
import NextLink, { LinkProps as NextLinkProps } from "next/link";

export type LinkProps = Omit<NextUILinkProps, "color"> & NextLinkProps;

export const Link = ({ className, ...props }: LinkProps) => {
  return (
    <NextUILink
      as={NextLink}
      prefetch={false}
      className={cn(
        "static inline text-inherit font-weight-inherit leading-inherit",
        className
      )}
      style={{ fontSize: "inherit" }}
      {...props}
    />
  );
};

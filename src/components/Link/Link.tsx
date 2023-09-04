import { Link as LinkBase, LinkProps } from "@nextui-org/link";
import NextLink from "next/link";

export type { LinkProps };

export const Link = (props: LinkProps) => {
  return (
    <LinkBase as={NextLink} color="foreground" prefetch={false} {...props} />
  );
};

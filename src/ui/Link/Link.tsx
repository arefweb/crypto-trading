import { Link as BaseLink, LinkProps } from "react-router-dom";
import { Anchor, AnchorProps } from "@mantine/core";
import { ReactNode } from "react";

interface Props extends AnchorProps, Omit<LinkProps, "color" | "style"> {
  children: ReactNode;
  to: string;
}

function Link({ children, to, ...otherProps }: Props) {
  return (
    <Anchor component={BaseLink} to={to} {...otherProps}>
      {children}
    </Anchor>
  );
}

export default Link;

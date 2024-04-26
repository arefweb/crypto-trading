import { NavLink as BaseNavLink, NavLinkProps } from "@mantine/core";
import { Link } from "react-router-dom";
import { ReactNode } from "react";

interface Props extends NavLinkProps {
  href: string;
  label: ReactNode | string;
}

function NavLink(props: Props) {
  const { href, label, children } = props;
  return (
    <BaseNavLink {...props} component={Link} to={href} label={label}>
      {children}
    </BaseNavLink>
  );
}

export default NavLink;

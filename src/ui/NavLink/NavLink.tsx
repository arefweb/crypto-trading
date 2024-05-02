import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import { NavLink as BaseNavLink, NavLinkProps } from "@mantine/core";

interface Props extends NavLinkProps {
  href: string;
  label: ReactNode | string;
  component?: React.ElementType;
}

function NavLink(props: Props) {
  const { href, label, children } = props;
  return (
    <BaseNavLink {...props} component={Link} to={href} label={label}>
      {children}
    </BaseNavLink>
  );
}

NavLink.defaultProps = {
  component: null,
};

export default NavLink;

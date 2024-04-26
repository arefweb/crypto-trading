import { useLocation } from "react-router-dom";
import { Box, Text } from "@mantine/core";
import NavLink from "@/ui/NavLink/NavLink";

const navRoutes = [
  {
    icon: "",
    label: "Home",
    href: "/",
  },
  {
    icon: "",
    label: "About",
    href: "/about",
  },
];

function Sidebar() {
  const location = useLocation();
  return (
    <Box component="div" p="sm">
      {navRoutes.map((item) => (
        <NavLink
          href={item.href}
          label={(
            <Text fz="md">
              {item.label}
            </Text>
          )}
          active={location.pathname === item.href}
        />
      ))}
    </Box>
  );
}

export default Sidebar;

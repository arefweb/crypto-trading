import {
  AppShell, Box, Burger, Group, Text,
} from "@mantine/core";
import Sidebar from "@app/components/sidebar/Sidebar";
import { IconMathPi } from "@tabler/icons-react";
import globalStrings from "@app/constants/globalStrings";

type Props = {
  opened: boolean;
  toggle: () => void;
};

function Navbar({ opened, toggle }: Props) {
  return (
    <AppShell.Navbar style={{ borderRight: "none" }}>
      <Box component="div" h="var(--mantine-hero-height)" bg="primary.7">
        <Group p="md" justify="center">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Group gap={8}>
            <IconMathPi color="white" size={25} strokeWidth={3.5} />
            <Text c="white" fz="xxl" fw="800">{globalStrings.brandName}</Text>
          </Group>
        </Group>
      </Box>
      <Sidebar />
    </AppShell.Navbar>
  );
}

export default Navbar;

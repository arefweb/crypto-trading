import { Outlet } from "react-router-dom";
import {
  AppShell, Box, Burger, Group, Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import Sidebar from "@app/components/sidebar/Sidebar";

function PagesLayout() {
  const [opened, { toggle }] = useDisclosure();
  return (
    <AppShell
      layout="alt"
      header={{ height: 60 }}
      footer={{ height: 60 }}
      navbar={{ width: 240, breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header bg="primary.7">
        <Group justify="space-between">
          <Group h="100%" px="md">
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
            <span>Header</span>
          </Group>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar style={{ borderRight: "none" }}>
        <Box component="div" h="var(--mantine-hero-height)" bg="primary.7">
          <Group p="md" justify="center">
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
            <Text c="white">M-Logo</Text>
          </Group>
          {}
        </Box>
        <Sidebar />
      </AppShell.Navbar>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}

export default PagesLayout;

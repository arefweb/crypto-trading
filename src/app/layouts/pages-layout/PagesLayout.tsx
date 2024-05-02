import { Outlet } from "react-router-dom";
import {
  AppShell,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import Navbar from "./components/Navbar/Navbar";
import Header from "./components/header/Header";

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
      <Header opened={opened} toggle={toggle} />
      <Navbar opened={opened} toggle={toggle} />
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}

export default PagesLayout;

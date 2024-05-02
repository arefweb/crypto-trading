import {
  ActionIcon, AppShell, Avatar, Burger, Group, Popover, Text,
} from "@mantine/core";
import { IconLogout } from "@tabler/icons-react";

import PAGES from "@app/routes/paths";
import { setLogin } from "@app/store/user/userSlice";
import { useAppDispatch } from "@app/hooks/redux";
import NavLink from "@/ui/NavLink/NavLink";

type Props = {
  opened: boolean;
  toggle: () => void;
};

function Header({ opened, toggle }: Props) {
  const dispatch = useAppDispatch();

  return (
    <AppShell.Header bg="primary.7">
      <Group h="100%" justify="space-between" align="center" px="xl">
        <Group px="md" align="center">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Text c="white">Header</Text>
        </Group>
        <Popover width={200} position="bottom" withArrow shadow="md">
          <Popover.Target>
            <ActionIcon variant="transparent" size="xl" radius="md" mr="xl">
              <Avatar src="https://picsum.photos/id/8/200/200" />
            </ActionIcon>
          </Popover.Target>
          <Popover.Dropdown px={0}>
            <NavLink
              href={PAGES.LOGIN}
              label={<Text c="red.8">Logout</Text>}
              leftSection={<IconLogout color="var(--mantine-color-red-8)" size="1.2rem" stroke={1.8} />}
              component="div"
              onClick={() => {
                dispatch(setLogin(false));
                localStorage.setItem("accessToken", "");
                localStorage.setItem("refreshToken", "");
              }}
            />
            <NavLink
              href="#required-for-focus"
              label={<Text>something</Text>}
              component="div"
            />
          </Popover.Dropdown>
        </Popover>
      </Group>
    </AppShell.Header>
  );
}

export default Header;

import {
  Box, Center, Group, Stack, Text, Image,
} from "@mantine/core";
import { Outlet } from "react-router-dom";
import cs from "clsx";

import globalStrings from "@app/constants/globalStrings";
import welcomeImg from "@app/assets/images/pic-1.png";
import gaugeImg from "@app/assets/images/pic3.png";

import { IconMathPi } from "@tabler/icons-react";
import styles from "./style.module.css";

function AuthLayout() {
  return (
    <Group h="100vh" mih={300} pos="relative">
      <Center bg="primary.7" h="100%" w={300} classNames={{ root: styles.aside }}>
        <Stack align="center">
          <Group gap={8}>
            <IconMathPi color="white" size={34} strokeWidth={3.5} />
            <Text c="white" component="h2" fz="2.4rem" fw="700">
              {globalStrings.brandName}
            </Text>
          </Group>
          <Text c="white" fw="600" fz="xxl">
            {globalStrings.welcome}
          </Text>
          <Box pos="relative" mt="4xl">
            <Image
              src={gaugeImg}
              w={82}
              radius={5}
              classNames={{ root: cs(styles.gaugeImg, styles.move_1) }}
            />
            <Image
              src={welcomeImg}
              classNames={{ root: styles.welcomeImg }}
            />
          </Box>
        </Stack>
      </Center>
      <Group classNames={{ root: styles.formArea }}>
        <Outlet />
      </Group>
    </Group>
  );
}

export default AuthLayout;

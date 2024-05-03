import {
  Divider, Group, Stack, Title, Text, LoadingOverlay, Box,
} from "@mantine/core";

import useLoginNavigate from "@app/hooks/useLoginNavigate";
import LoginContainer from "@modules/auth/login/components/LoginContainer";
import PAGES from "@app/routes/paths";
import Link from "@/ui/Link/Link";

import strings from "./strings";

function LoginPage() {
  const { visible } = useLoginNavigate();

  if (!visible) {
    return (
      <Box pos="relative" w={350} h={100}>
        <LoadingOverlay visible zIndex={50} overlayProps={{ radius: "sm", blur: 2 }} />
      </Box>
    );
  }

  return (
    <Stack align="center" w={350}>
      <Title order={3}>
        {strings.login}
      </Title>
      <Divider size="xs" w="100%" />

      <LoginContainer />

      <Group>
        <Text c="gray.7" fz="md">
          {strings.noAcc}
        </Text>
        <Link to={PAGES.SIGNUP} td="none" fz="md">
          {strings.signUp}
        </Link>
      </Group>
    </Stack>
  );
}

export default LoginPage;

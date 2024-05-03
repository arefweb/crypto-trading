import {
  Divider, Group, Stack, Title, Text,
} from "@mantine/core";

import SignUpContainer from "@modules/auth/sign-up/components/SignUpContainer";
import PAGES from "@app/routes/paths";
import Link from "@/ui/Link/Link";

import strings from "./strings";

function SignUpPage() {
  return (
    <Stack align="center" w={350}>
      <Title order={3}>
        {strings.signUp}
      </Title>
      <Divider size="xs" w="100%" />

      <SignUpContainer />

      <Group>
        <Text c="gray.7" fz="md">
          {strings.haveAcc}
        </Text>
        <Link to={PAGES.LOGIN}>{strings.login}</Link>
      </Group>
    </Stack>
  );
}

export default SignUpPage;

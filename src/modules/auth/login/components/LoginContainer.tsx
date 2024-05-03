import {
  Box, Button, PasswordInput, TextInput,
} from "@mantine/core";

import useLoginForm from "../hooks/useLoginForm";
import strings from "../strings";

function LoginContainer() {
  const { handleSubmit, register, onSubmit } = useLoginForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
      <Box mt="md">
        <TextInput
          label={strings.emailAddress}
          withAsterisk
          {...register("email")}
        />
      </Box>
      <Box mt="md">
        <PasswordInput
          label={strings.password}
          withAsterisk
          {...register("password")}
        />
      </Box>
      <Button type="submit" fullWidth mt="3xl">
        {strings.login}
      </Button>
    </form>
  );
}

export default LoginContainer;

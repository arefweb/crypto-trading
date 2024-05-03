import {
  Box, Button, PasswordInput, TextInput,
} from "@mantine/core";

import useSignupForm from "../hooks/useSignupForm";
import strings from "../strings";

function SignUpContainer() {
  const { handleSubmit, onSubmit, register } = useSignupForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
      <Box mt="md">
        <TextInput
          label={strings.name}
          withAsterisk
          {...register("username")}
        />
      </Box>
      <Box mt="md">
        <TextInput
          label={strings.email}
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
        {strings.signUp}
      </Button>
    </form>
  );
}

export default SignUpContainer;

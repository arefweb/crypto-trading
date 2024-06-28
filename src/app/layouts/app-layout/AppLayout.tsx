import { ReactNode } from "react";
import useUserInfo from "@app/services/user-info";
import { Center, LoadingOverlay } from "@mantine/core";

interface Props {
  children: ReactNode
}

function AppLayout({ children }: Props) {
  const { isLoading } = useUserInfo();

  if (isLoading) {
    return (
      <Center pos="relative" w="100%" h="90vh">
        <LoadingOverlay visible zIndex={50} overlayProps={{ radius: "sm", blur: 2 }} />
      </Center>
    );
  }

  return (
    <div>
      {children}
    </div>
  );
}

export default AppLayout;

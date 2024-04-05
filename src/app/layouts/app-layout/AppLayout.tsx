import { ReactNode } from "react";
import useLoginState from "@app/hooks/useLoginState";

interface Props {
  children: ReactNode
}

const AppLayout = ({ children }: Props) => {
  const { isLoading } = useLoginState();
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {children}
    </div>
  );
};

export default AppLayout;

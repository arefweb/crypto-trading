import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAppSelector } from "@app/hooks/redux";
import PAGES from "@app/routes/paths";

const useLoginNavigate = () => {
  const [visible, setVisible] = useState(false);
  const isLoggedIn = useAppSelector((state) => state.user.isLoggedIn);
  const isLoading = useAppSelector((state) => state.user.isLoading);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn && !isLoading) {
      setVisible(true);
    } else {
      navigate(PAGES.home);
      setVisible(false);
    }
  }, []);

  return { visible };
};

export default useLoginNavigate;

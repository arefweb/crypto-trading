import { useEffect, useState } from "react";
import { useAppSelector } from "@app/hooks/redux";
import { useNavigate } from "react-router-dom";

const useLoginNavigate = () => {
  const [visible, setVisible] = useState(false);
  const isLoggedIn = useAppSelector((state) => state.user.isLoggedIn);
  const isLoading = useAppSelector((state) => state.user.isLoading);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn && !isLoading) {
      setVisible(true);
    } else {
      navigate("/");
      setVisible(false);
    }
  }, []);

  return { visible };
};

export default useLoginNavigate;

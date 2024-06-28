import { useQuery } from "@tanstack/react-query";
import QueryKeys from "@app/constants/query-keys";

import homeService from "../../services/home.service";

const useTransactions = () => {
  const queryFn = () => homeService.getTransactions();
  const queryKey = [QueryKeys.TRANSACTIONS];

  const {
    data, isLoading, isError, error,
  } = useQuery({
    queryKey,
    queryFn,
  });

  return {
    data,
    isLoading,
    isError,
    error,
  };
};

export default useTransactions;

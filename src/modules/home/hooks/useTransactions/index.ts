import { useQuery } from "@tanstack/react-query";
import QueryKeys from "@app/constants/query-keys";

import transactions from "./requests";

const useTransactions = () => {
  const queryFn = () => transactions.getData();
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

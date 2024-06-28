import useTransactions from "@modules/home/hooks/useTransactions";

function Transactions() {
  const {
    data, isError, error,
  } = useTransactions();

  console.log("transactions >> ", data);
  console.log("isError >> ", isError, error);

  return (
    <div>
      Transactions
    </div>
  );
}

export default Transactions;

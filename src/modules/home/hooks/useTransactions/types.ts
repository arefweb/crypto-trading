export type UserEntity = {
  first_name: string,
  last_name: string,
};

export type TransactionsModel = {
  id: string,
  date: string,
  from: string,
  to: string,
  coin: string,
  amount: string,
  status: string,
  user: UserEntity,
};

export type ResponseBody = {
  data: TransactionsModel[],
};

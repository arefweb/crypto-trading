import { GET } from "@app/services";

import { ResponseBody } from "./types";
import TRANSACTIONS_PATH from "./constants";

function transform({ data }: ResponseBody) {
  const entities = data?.map(({
    id,
    from,
    coin,
    date: dateTime,
    to,
    status,
    user: {
      first_name: firstName,
      last_name: lastName,
    },
    amount,
  }) => ({
    id, from, coin, dateTime, to, status, firstName, lastName, amount,
  }));

  return {
    entities,
  };
}

const mockConfig = {
  status: 200,
  statusText: "OK",
  data: [
    {
      id: 1,
      test: "it is a test",
    },
    {
      id: 2,
      test: "it is a test",
    },
  ],
};

// const mockConfig = {
//   status: 500,
//   message: "Server has encountered some strange error!",
// };

const transactions = {
  getData: () => GET(
    TRANSACTIONS_PATH,
    undefined,
    undefined,
    undefined,
    mockConfig,
  )
    .then(transform),
};

export default transactions;
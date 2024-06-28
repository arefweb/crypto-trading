const transactionsController = (req, res) => {
  const transactions = [
    {
      id: '1',
      date: (new Date("2022-05-10T13:15:00.00Z")).toISOString(),
      from: 'Thomson',
      to: 'Dr. Jackson',
      coin: 'Bitcoin',
      amount: '5553',
      status: 'completed',
      user: {
        first_name: "John",
        last_name: "Doe",
      },
    },
    {
      id: '2',
      date: (new Date("2022-05-11T08:15:00.00Z")).toISOString(),
      from: 'Thomson',
      to: 'Dr. Jackson',
      coin: 'Bitcoin',
      amount: '5553',
      status: 'pending',
      user: {
        first_name: "Jack",
        last_name: "Sullivan",
      },
    },
    {
      id: '3',
      date: (new Date("2022-06-10T10:15:00.00Z")).toISOString(),
      from: 'Thomson',
      to: 'Dr. Jackson',
      coin: 'Bitcoin',
      amount: '1500',
      status: 'cancel',
      user: {
        first_name: "Robert",
        last_name: "Green",
      },
    },
  ];
  res.json(transactions);
}

export default transactionsController;

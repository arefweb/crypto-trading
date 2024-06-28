import { useAppSelector } from "@app/store/redux";
import { useEffect, useState } from "react";
import { GET } from "@app/services";
import { Grid, Button, Text } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import Transactions from "@modules/home/components/transactions/Transactions";

function HomePage() {
  const username = useAppSelector((state) => state.user.username);
  const [today, setToday] = useState("");

  const { data: response } = useQuery({
    queryKey: ["PRIVATE"],
    queryFn: () => GET("/api/private"),
  });

  useEffect(() => {
    if (response) {
      const int = new Intl.DateTimeFormat("fa-IR").format(new Date(response.data.date));
      setToday(int);
    }
  }, [response]);

  return (
    <div>
      <Grid>
        <Grid.Col span={4}>
          <h1>
            Welcome
            {" "}
            {username}
          </h1>
        </Grid.Col>
        <Grid.Col span={4}>
          <h2>
            This is the HomePage
          </h2>
          <Button variant="filled" bg="primary.7">Button</Button>
        </Grid.Col>
        <Grid.Col span={4}>
          <Text component="p" fz="md" mt="md">
            Today is:
            {" "}
            {today}
          </Text>
        </Grid.Col>
        <Grid.Col span={12}>
          <Transactions />
        </Grid.Col>
      </Grid>
    </div>
  );
}

export default HomePage;

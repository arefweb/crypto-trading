import { useAppSelector } from "@app/hooks/redux";
import { useEffect, useState } from "react";
import { GET } from "@app/services";
import { Grid, Button, Text } from "@mantine/core";

function HomePage() {
  const username = useAppSelector((state) => state.user.username);
  const [today, setToday] = useState("");

  useEffect(() => {
    GET("/api/private").then((resp) => {
      const int = new Intl.DateTimeFormat("fa-IR").format(new Date(resp.data.date));
      setToday(int);
    });
  }, []);

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
      </Grid>
    </div>
  );
}

export default HomePage;

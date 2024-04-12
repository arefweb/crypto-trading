import { useAppSelector } from "@app/hooks/redux";
import { useEffect, useState } from "react";
import { GET } from "@app/services";

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
      <h1>
        Welcome
        {" "}
        {username}
      </h1>
      <h2>
        This is the HomePage
      </h2>
      <h3>
        Today is:
        {" "}
        {today}
      </h3>
    </div>
  );
}

export default HomePage;

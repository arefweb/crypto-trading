import express from 'express';
import appRoutes from "./routes";

const app = express();

appRoutes(app);

app.listen(4550, (e) => {
  console.log('App is running on :', 'http://localhost:4550');
})
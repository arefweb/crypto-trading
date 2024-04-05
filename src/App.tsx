import { Provider } from "react-redux";

import { store } from "@app/store";
import AppRoutes from "@app/routes/AppRoutes";
import AppLayout from "@app/layouts/app-layout/AppLayout";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <AppLayout>
        <AppRoutes />
      </AppLayout>
    </Provider>
  );
}

export default App;

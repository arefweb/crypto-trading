import "@mantine/core/styles.css";
import { Provider } from "react-redux";
import { MantineProvider } from "@mantine/core";

import { store } from "@app/store";
import AppRoutes from "@app/routes/AppRoutes";
import AppLayout from "@app/layouts/app-layout/AppLayout";
import { resolver, theme } from "@app/theme";

function App() {
  return (
    <Provider store={store}>
      <MantineProvider theme={theme} cssVariablesResolver={resolver}>
        <AppLayout>
          <AppRoutes />
        </AppLayout>
      </MantineProvider>
    </Provider>
  );
}

export default App;

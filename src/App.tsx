import "@mantine/core/styles.css";
import { Provider } from "react-redux";
import { MantineProvider } from "@mantine/core";
import {
  QueryClientProvider,
} from "@tanstack/react-query";

import { store } from "@app/store";
import AppRoutes from "@app/routes/AppRoutes";
import AppLayout from "@app/layouts/app-layout/AppLayout";
import { resolver, theme } from "@app/theme";
import queryClient from "@app/services/query";

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <MantineProvider theme={theme} cssVariablesResolver={resolver}>
          <AppLayout>
            <AppRoutes />
          </AppLayout>
        </MantineProvider>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;

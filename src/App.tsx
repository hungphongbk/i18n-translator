import React from "react";
import { Box, CssVarsProvider, StyledEngineProvider } from "@mui/joy";
import { Layout, Navigation } from "./components";
import theme from "./theme";
import { store } from "./services";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <StyledEngineProvider injectFirst>
          <CssVarsProvider theme={theme}>
            <Layout.Root>
              <Layout.Header>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 1.5,
                  }}
                ></Box>
              </Layout.Header>
              <Layout.SideNav>
                <Navigation />
              </Layout.SideNav>
            </Layout.Root>
          </CssVarsProvider>
        </StyledEngineProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

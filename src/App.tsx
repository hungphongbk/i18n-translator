import React from "react";
import {
  Box,
  CssVarsProvider,
  IconButton,
  StyledEngineProvider,
  Typography,
} from "@mui/joy";
import { Layout, Navigation } from "./components";
import theme from "./theme";
import { store } from "./services";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import TranslateIcon from "@mui/icons-material/Translate";

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
                >
                  <IconButton
                    size="sm"
                    variant="solid"
                    sx={{ display: { xs: "none", sm: "inline-flex" } }}
                  >
                    <TranslateIcon />
                  </IconButton>
                  <Typography component="h1" fontWeight="xl">
                    i18n Translation
                  </Typography>
                </Box>
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

import React from "react";
import { Link } from "gatsby";
import { Box, ThemeProvider, Typography } from "@mui/material";
import "@fontsource/gowun-batang";
import theme from "../styles/MuiTheme";
import { CssBaseline } from "@mui/material";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

const Layout = ({
  pageTitle,
  children,
}: {
  pageTitle: string;
  children: React.ReactNode;
}) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>
        <title>{pageTitle}</title>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <main>
          <Typography variant="h1">{pageTitle}</Typography>
          {children}
        </main>
      </Box>
    </ThemeProvider>
  );
};

export default Layout;

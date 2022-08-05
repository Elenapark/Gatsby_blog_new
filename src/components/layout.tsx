import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import styled from "@emotion/styled";
import {
  AppBar,
  Box,
  List,
  MenuItem,
  ThemeProvider,
  Typography,
} from "@mui/material";
import "@fontsource/gowun-batang";
import theme from "../styles/MuiTheme";
import { CssBaseline } from "@mui/material";

interface PageProps {
  title: string;
  path: string;
}

interface DataProps {
  site: {
    siteMetadata: {
      title: string;
    };
  };
}

const pages: PageProps[] = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Blog", path: "/blog" },
];

const Layout = ({
  pageTitle,
  children,
}: {
  pageTitle?: string;
  children: React.ReactNode;
}) => {
  const data: DataProps = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <title>
        {pageTitle ?? "Home"} | {data.site.siteMetadata.title}
      </title>
      <Box sx={{ maxWidth: "1400px", margin: "0 auto" }}>
        <AppBar position="static">
          <Box sx={BoxSx}>
            <Typography>{data.site.siteMetadata.title}👩🏻‍💻</Typography>
            <List sx={{ display: "flex" }}>
              {pages.map((page) => {
                return (
                  <MenuItem key={`page ${page.title}`}>
                    <StyledLink to={page.path}>{page.title}</StyledLink>
                  </MenuItem>
                );
              })}
            </List>
          </Box>
        </AppBar>
        <main>
          <Typography variant="h3">{pageTitle}</Typography>
          {children}
        </main>
      </Box>
    </ThemeProvider>
  );
};

export default Layout;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
`;

const BoxSx = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 20px",
};

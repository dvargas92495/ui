import React from "react";
import MuiAppBar from "@mui/material/AppBar";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const AppBar: React.FunctionComponent<{
  homeIcon: React.ReactNode;
  userIcon: React.ReactNode;
  pages?: string[];
}> = ({ children, homeIcon, pages = [], userIcon }) => {
  return (
    <MuiAppBar position="static" elevation={5} color="transparent">
      <Toolbar>
        <Link href={"/"} sx={{ minWidth: "200px" }}>
          {homeIcon}
        </Link>
        <Grid container justifyContent="center">
          {pages.map((p, i) => (
            <React.Fragment key={i}>
              {i > 0 && <Divider orientation="vertical" flexItem />}
              <Typography
                variant={"subtitle1"}
                color={"textPrimary"}
                sx={{ mx: 1 }}
              >
                <Link
                  href={`/${p}`}
                  color="inherit"
                  sx={{
                    textDecoration: "none",
                    ":hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  {p}
                </Link>
              </Typography>
            </React.Fragment>
          ))}
        </Grid>
        {children}
        <Box display={"flex"} justifyContent={"end"} sx={{ minWidth: "200px" }}>
          {userIcon}
        </Box>
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;

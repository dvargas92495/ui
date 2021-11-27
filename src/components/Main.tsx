import styled from "@mui/material/styles/styled";
import React from "react";

const Root = styled("main")(({ theme }) => ({
  marginTop: theme.spacing(8),
  marginBottom: theme.spacing(8),
  marginLeft: "auto",
  marginRight: "auto",
  display: "flex",
  justifyContent: "center",
  maxWidth: "760px",
  padding: 0,
  flexGrow: 1,
}));

const Main = ({ children }: { children: React.ReactNode }) => {
  return <Root>{children}</Root>;
};

export default Main;

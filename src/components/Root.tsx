import styled from "@mui/material/styles/styled";
import React from "react";

const StyledRoot = styled("div")({
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
});

const Root = ({ children }: { children: React.ReactNode }) => {
  return <StyledRoot>{children}</StyledRoot>;
};

export default Root;

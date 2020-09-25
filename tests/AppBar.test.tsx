import React from "react";
import { AppBar } from "../src";
import { render } from "@testing-library/react";

test("Renders Appbar", () => {
  const { container } = render(
    <AppBar children={<div>children</div>} homeIcon={<span>Home</span>} />
  );
  expect(container).toBeInTheDocument();
});

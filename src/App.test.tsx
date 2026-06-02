import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders homepage hero heading", () => {
  render(<App />);
  const headingElement = screen.getByRole("heading", {
    name: /let's come alive/i,
  });
  expect(headingElement).toBeInTheDocument();
});

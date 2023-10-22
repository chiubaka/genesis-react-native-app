import { render } from "@testing-library/react-native";
import React from "react";

import App from "../../src/app/App";

test("renders correctly", () => {
  const { getByTestId } = render(<App />);

  expect(getByTestId("heading")).toHaveTextContent("Welcome");
});

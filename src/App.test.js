import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders portfolio landing page content", () => {
  render(<App />);
  const headline = screen.getByText(/welcome to my portfolio/i);
  expect(headline).toBeInTheDocument();
});

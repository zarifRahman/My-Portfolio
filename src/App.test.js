import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders portfolio landing page content", () => {
  render(<App />);
  const headline = screen.getByText(/welcome to my portfolio/i);
  expect(headline).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /blog \(opens in a new tab\)/i })).toHaveAttribute(
    "href",
    "https://zarif-personal-blog.vercel.app/",
  );
});

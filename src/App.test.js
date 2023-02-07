import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App component", () => {
  test("it can receive a new user and show it on a list", () => {
    render(<App />);

    const nameInput = screen.getByRole("textbox", {
      name: /name/i,
    });
    const emailInput = screen.getByRole("textbox", {
      name: /email/i,
    });
    const button = screen.getByRole("button");

    userEvent.click(nameInput);
    userEvent.keyboard("Roman");

    userEvent.click(emailInput);
    userEvent.keyboard("roman@gmail.com");

    userEvent.click(button);

    const name = screen.getByRole("cell", { name: /Roman/ });
    const email = screen.getByRole("cell", { name: /roman@gmail.com/i });
    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  });
});

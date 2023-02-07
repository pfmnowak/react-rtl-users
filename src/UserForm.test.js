import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { default as UserForm } from "./UserForm";

describe("User Form component", () => {
  test("it shows two inputs and a button", () => {
    // Arrange
    render(<UserForm />);

    // Act
    const inputs = screen.getAllByRole("textbox");
    const button = screen.getByRole("button");

    // Assert
    expect(inputs).toHaveLength(2);
    expect(button).toBeInTheDocument();
  });

  test("it calls onUserAdd when the form is submited", () => {
    const mock = jest.fn();
    render(<UserForm onUserAdd={mock} />);

    const nameInput = screen.getByRole("textbox", {
      name: /name/i,
    });
    const emailInput = screen.getByRole("textbox", {
      name: /email/i,
    });

    userEvent.click(nameInput);
    userEvent.keyboard("Roman");

    userEvent.click(emailInput);
    userEvent.keyboard("roman@gmail.com");

    const button = screen.getByRole("button");
    // We use getByRole when we expect to find only one element
    // getByRole throws an error if not found (we want that)
    userEvent.click(button);

    expect(mock).toHaveBeenCalledTimes(1);
    expect(mock).toBeCalledWith({ name: "Roman", email: "roman@gmail.com" });
  });

  test("it clears the inputs when the form is submitted", () => {
    render(<UserForm onUserAdd={() => {}} />);

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

    expect(nameInput).toHaveValue("");
    expect(emailInput).toHaveValue("");
  });
});

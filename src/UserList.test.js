import { render, screen, within } from "@testing-library/react";
import UserList from "./UserList";

const renderComponent = () => {
  const users = [
    {
      name: "Jane",
      email: "jane@jane.com",
    },
    {
      name: "Sam",
      email: "sam@sam.com",
    },
  ];
  render(<UserList users={users} />);

  return { users };
};

describe("UserList component", () => {
  test("it renders one row per user", () => {
    const { users } = renderComponent();
    // const { container } = render(<UserList users={users} />);

    // screen.logTestingPlaygroundURL();
    // const rows = container.querySelectorAll("tbody tr");
    const rows = within(screen.getByTestId("users")).getAllByRole("row");

    expect(rows).toHaveLength(users.length);
  });

  test("it renders the email and name of each user", () => {
    const { users } = renderComponent();

    users.forEach((user) => {
      const nameCell = screen.getByRole("cell", { name: user.name });
      const emailCell = screen.getByRole("cell", { name: user.email });
      expect(nameCell).toBeInTheDocument();
      expect(emailCell).toBeInTheDocument();
    });
  });
});

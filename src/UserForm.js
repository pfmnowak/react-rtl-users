import { useState } from "react";

const UserForm = ({ onUserAdd }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const submitFormHandler = (event) => {
    event.preventDefault();
    onUserAdd({
      name,
      email,
    });
    setEmail("");
    setName("");
  };

  return (
    <form onSubmit={submitFormHandler}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoFocus
        />
      </div>
      <div>
        <label htmlFor="email">Enter email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button type="submit">Add User</button>
    </form>
  );
};

export default UserForm;

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
  };

  return (
    <form onSubmit={submitFormHandler}>
      <div>
        <label>Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoFocus
        />
      </div>
      <div>
        <label>Email</label>
        <input
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

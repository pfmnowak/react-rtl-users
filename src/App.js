import { useState } from "react";
import UserForm from "./UserForm";
import UserList from "./UserList";

function App() {
  const [users, setUsers] = useState([]);

  const userAddHandler = (user) => {
    setUsers((prevUsers) => [...prevUsers, user]);
  };

  return (
    <div>
      <UserForm onUserAdd={userAddHandler} />
      <hr />
      <UserList users={users} />
    </div>
  );
}

export default App;

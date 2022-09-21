import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

function App() {
  const [users, setUsers] = useState([]);
  const [id, setId] = useState(0);

  const addUserHandler = (user) => {
    setUsers((prev) => [...prev, user]);
    setId(id + 1);
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler} id={id} />
      <UserList users={users} />
    </div>
  );
}

export default App;

import "./styles.css";
import { useState, useRef } from "react";

export default function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John",
      email: "email",
      logo: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHwws",
    },
    {
      id: 2,
      name: "Jane",
      email: "email",
      logo: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww",
    },
    {
      id: 3,
      name: "SNow",
      email: "www.gmail.com",
      logo: "https://plus.unsplash.com/premium_photo-1669882305300-38b609862bee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YXZhdGFyfGVufDB8fDB8fHww",
    },
  ]);
  const [search, setSearch] = useState("");
  const [selectedUsers, setSelectedUsers] = useState([]);
  const handleSelectUser = (user) => {
    const filteredUsers = users.filter((u) => u.id !== user.id);
    setSelectedUsers([...selectedUsers, user]);
    setSearch("");
    setUsers(filteredUsers);
  };
  const handleDeleteUser = (user) => {
    const filteredUsers = selectedUsers.filter((u) => u.id !== user.id);
    setSelectedUsers(filteredUsers);
    setUsers([...users, user]);
  };

  const Avatar = ({ user }) => {
    return (
      <div className="avatarContainer">
        <img src={user.logo} alt="Avatar" class="avatarImg" />
        <h3 style={{ marginLeft: 10 }}>{user.name}</h3>
        <p style={{ marginLeft: 10, color: "gray" }}>{user.email}</p>
      </div>
    );
  };

  const Chip = ({ user }) => {
    return (
      <div className="chipContainer">
        <img src={user.logo} alt="Chip" class="chipImg" />
        <h3 className="chiptext">{user.name}</h3>
        <img
          onClick={() => handleDeleteUser(user)}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_vm9c8XoX1m2yreBpO2iIB0bxoZp-6c-odxVOqMesJuMFHVRoIGGgaWcU6j7DwXOhdag&usqp=CAU"
          alt="delete"
          class="deleteImg"
        />
      </div>
    );
  };

  return (
    <div className="App">
      <h1>Pick Users</h1>

      <div className="containerStyle">
        {selectedUsers &&
          selectedUsers.map((user) => (
            <div key={user.id}>
              <Chip user={user} />
            </div>
          ))}
        <div>
          <input
            className="inputStyle"
            style={{}}
            type={"text"}
            value={search}
            placeholder={"Add new user"}
            onChange={(e) => setSearch(e.target.value)}
          />
          {search && (
            <div className="userContainer">
              {users.map((user) => {
                return (
                  <div key={user.id} onClick={() => handleSelectUser(user)}>
                    <Avatar user={user} />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

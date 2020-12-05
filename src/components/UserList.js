import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import User from "./User";
import UserDetails from "./UserDetails";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10&noinfo").then((response) =>
      response.json().then((data) => setUsers(data.results))
    );
  }, []);

  if (users) {
    return (
      <Router>
        <Route path="/" exact>
          <section>
            {users.map((user) => (
              <User key={user.login.uuid} user={user} />
            ))}
          </section>
        </Route>

        <Route path="/:id">
          <UserDetails users={users} />
        </Route>
      </Router>
    );
  }
};

export default UserList;

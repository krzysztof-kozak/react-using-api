import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ReactPlaceholder from "react-placeholder";
import "react-placeholder/lib/reactPlaceholder.css";

import User from "./User";
import UserDetails from "./UserDetails";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10&noinfo").then((response) =>
      response
        .json()
        .then((data) => setUsers(data.results))
        .then(() => {
          setTimeout(() => {
            setReady(true);
          }, 2000);
        })
        .catch(console.error)
    );
  }, []);

  if (users) {
    return (
      <Router>
        <Route path="/" exact>
          <section>
            {users.map((user) => (
              <ReactPlaceholder
                showLoadingAnimation
                ready={ready}
                type="media"
                style={{ flexBasis: 300, margin: 30 }}
                key={user.login.uuid}
              >
                <User key={user.login.uuid} user={user} />
              </ReactPlaceholder>
            ))}
          </section>
        </Route>

        <Route path="/:id">
          <UserDetails users={users} />
        </Route>
      </Router>
    );
  } else {
    return <p>I could not load the users. Try refreshing the page </p>;
  }
};

export default UserList;

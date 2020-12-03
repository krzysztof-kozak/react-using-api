import React, { useEffect, useState } from "react";

import User from "./User";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10&noinfo").then((response) =>
      response.json().then((data) => setUsers(data.results))
    );
  }, []);

  if (users) {
    return (
      <section>
        {users.map((user, index) => (
          <User key={user.id.value + index} user={user} />
        ))}
      </section>
    );
  }
};

export default UserList;

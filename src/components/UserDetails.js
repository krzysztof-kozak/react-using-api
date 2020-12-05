import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const UserDetails = ({ users }) => {
  const [user, setUser] = useState();
  const { id } = useParams();

  useEffect(() => {
    setUser(...users.filter((user) => user.login.uuid === id));
  }, [users, id]);

  if (user) {
    return (
      <>
        <h2>User Details</h2>
        <p>
          Hello, my name is <b>{user.name.first}</b> and I'm from{" "}
          <b>{user.location.city}</b>
        </p>
        <Link to="/">Back</Link>
      </>
    );
  } else {
    return <p>Loading</p>;
  }
};

export default UserDetails;

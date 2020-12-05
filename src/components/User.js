import React from "react";
import { Link } from "react-router-dom";

import { convertDate } from "../helpers";

const User = (props) => {
  const {
    user,
    user: {
      name: { first: firstName, last: lastName },

      location: {
        street: { name: streetName, number: streetNumber },
        city
      },

      email,
      login: { uuid: id },
      registered: { date: registrationDate }
    }
  } = props;

  const dateFormatted = convertDate(registrationDate);

  if (user) {
    return (
      <Link className="userLink" to={`/${id}`}>
        <article>
          <img src={user.picture.medium} alt="user" />
          <ul>
            <li>
              <b>Name:&nbsp;</b> {firstName ? firstName : "Unavailable"}
            </li>
            <li>
              <b>Surname:&nbsp;</b> {lastName ? lastName : "Unavailable"}
            </li>
            <li>
              <b>Address:&nbsp;</b>
              {user.location
                ? `${streetName} ${streetNumber}, ${city}`
                : "Unavailable"}
            </li>
            <li>
              <b>Email:&nbsp;</b> {email}
            </li>
            <li>
              <b>Registered at:&nbsp;</b> {dateFormatted}
            </li>
          </ul>
        </article>
      </Link>
    );
  }
};

export default User;

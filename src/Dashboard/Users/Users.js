import React from "react";
import { useSelector } from "react-redux";

import { ROUTES } from "../../constants/routes";
import { Collection, UsersListLink } from "./Users.styled";

const Users = () => {
  const users = useSelector(state => state.users);

  const usersList = users.map(user => (
    <UsersListLink to={`${ROUTES.USER}/${user.id}`} key={user.id}>
      {user.firstName} {user.surname}
      <i className="material-icons secondary-content white-text">send</i>
    </UsersListLink>
  ));

  return <Collection>{usersList}</Collection>;
};

export default Users;

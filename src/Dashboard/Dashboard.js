import React from "react";
import Users from "./Users/Users";
import SingleUser from "./SingleUser/SingleUser";
import { DashB } from "./Dashboard.styled";
import { Route, Switch } from "react-router-dom";
import { ROUTES } from "../constants/routes";

const Dashboard = () => {
  return (
    <DashB>
      <Switch>
        <Route exact path={ROUTES.HOME}>
          <Users />
        </Route>
        <Route path={`${ROUTES.USER}/:user_id`}>
          <SingleUser />
        </Route>
      </Switch>
    </DashB>
  );
};

export default Dashboard;

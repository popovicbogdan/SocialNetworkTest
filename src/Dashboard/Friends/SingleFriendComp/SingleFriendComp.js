import React from "react";
import { getAvatar } from "../../SingleUser/SingleUser";
import { Card, CardImage, CardContent } from "./SingleFriendComp.styled";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../constants/routes";

const SingleFriendComp = ({ friend }) => {
  const firstName = friend.firstName ? friend.firstName : "N/A";
  const lastName = friend.surname ? friend.surname : "N/A";
  const gender = friend.gender ? friend.gender : "N/A";

  return (
    <Link to={`${ROUTES.USER}/${friend.id}`} className="black-text">
      <Card>
        <CardImage>
          <img src={getAvatar(gender)} alt="" />
        </CardImage>

        <CardContent>
          <h6>
            First Name: <b>{firstName}</b>
          </h6>
          <h6>
            Last Name: <b>{lastName}</b>
          </h6>
          <h6>
            Gender: <b>{gender}</b>
          </h6>
        </CardContent>
      </Card>
    </Link>
  );
};

export default SingleFriendComp;

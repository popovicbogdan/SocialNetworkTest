import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import {
  LeftSideCont,
  CardImage,
  Card,
  RightSideCont,
  P,
  CardContent,
  H5,
  Row
} from "./SingleUser.styled";

import DirectFriends from "../Friends/DirectFriends/DirectFriends";
import FriendsOfFriends from "../Friends/FriendsOfFriends";
import SuggestedFriends from "../Friends/SuggestedFriends";

import MaleAvatar from "../../assets/pictures/MaleAvatar.svg";
import FemaleAvatar from "../../assets/pictures/FemaleAvatar.svg";

export const getAvatar = gender => {
  return gender === "female" ? FemaleAvatar : MaleAvatar;
};

const SingleUser = () => {
  const [displayComp, setDisplayComp] = useState("friends");

  const getCompToDisplay = (displayComp, friends, userId, firstName) => {
    switch (displayComp) {
      case "common":
        return (
          <FriendsOfFriends
            currentUser={userId}
            friendsIds={friends}
            firstName={firstName}
          />
        );
      case "mightKnow":
        return (
          <SuggestedFriends
            currentUser={userId}
            friendsIds={friends}
            firstName={firstName}
          />
        );
      default:
        return <DirectFriends friendsIds={friends} firstName={firstName} />;
    }
  };

  const { user_id } = useParams();

  const user = useSelector(state =>
    state.users.find(user => user.id === Number(user_id))
  );

  const firstName = user.firstName ? user.firstName : "N/A";
  const lastName = user.surname ? user.surname : "N/A";
  const age = user.age ? user.age : "N/A";
  const gender = user.gender ? user.gender : "N/A";

  return (
    <Row>
      <LeftSideCont>
        <Card>
          <CardImage>
            <img src={getAvatar(gender)} alt="" />
          </CardImage>
          <CardContent>
            <H5>General Info</H5>
            <H5>
              First Name: <b>{firstName}</b>
            </H5>
            <H5>
              Last Name: <b>{lastName}</b>
            </H5>
            <H5>
              Age: <b>{age}</b>
            </H5>
            <H5>
              Gender: <b>{gender}</b>
            </H5>
          </CardContent>
        </Card>
        <div className="collection">
          <P onClick={() => setDisplayComp("friends")}>{firstName}'s Friends</P>
          <P onClick={() => setDisplayComp("common")}>
            Friends of {firstName}'s friends
          </P>
          <P onClick={() => setDisplayComp("mightKnow")}>
            People {firstName} Might Know
          </P>
        </div>
      </LeftSideCont>
      <RightSideCont>
        {getCompToDisplay(displayComp, user.friends, user.id, firstName)}
      </RightSideCont>
    </Row>
  );
};

export default SingleUser;

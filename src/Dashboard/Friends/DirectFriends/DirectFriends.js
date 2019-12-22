import React from "react";
import { useSelector } from "react-redux";
import SingleFriendComp from "../SingleFriendComp/SingleFriendComp";
import { FriendsContainer } from "./DirectFriends.styled";

const DirectFriends = ({ friendsIds, firstName }) => {
  const friends = useSelector(state =>
    state.users.filter(user => friendsIds.includes(user.id))
  );

  const friendsList = friends.map(friend => (
    <SingleFriendComp key={friend.id} friend={friend} />
  ));
  return (
    <FriendsContainer>
      <h5>{firstName}'s friends</h5>
      {friendsList}
    </FriendsContainer>
  );
};

export default DirectFriends;

import React from "react";
import { useSelector } from "react-redux";
import SingleFriendComp from "./SingleFriendComp/SingleFriendComp";
import { FriendsContainer } from "./DirectFriends/DirectFriends.styled";

const FriendsOfFriends = ({ friendsIds, currentUser, firstName }) => {
  //get all users except the chosen one
  const allUsers = useSelector(state =>
    state.users.filter(user => user.id !== currentUser)
  );

  //get single user
  const getFr = id => {
    return allUsers.filter(user => user.id === id);
  };

  const getFof = () => {
    //get currentuser's friends
    const frOfFrIds = allUsers.filter(user => friendsIds.includes(user.id));

    // get currentuser's friends of friend ids
    const allfriends = frOfFrIds.flatMap(fr => fr.friends);

    //revome duplicate friends
    const uniqueFOfFIds = allfriends.filter(
      (fr, i) => allfriends.indexOf(fr) === i
    );

    //get every friend's friend's
    const AF = uniqueFOfFIds.flatMap(fr => getFr(fr));

    //make list of friends of friend
    const listOfFriendsFriends = AF.map(fr => (
      <SingleFriendComp key={fr.id} friend={fr} />
    ));
    return listOfFriendsFriends;
  };

  return (
    <FriendsContainer>
      <h5>Friends of {firstName}'s friends</h5>
      {getFof()}
    </FriendsContainer>
  );
};

export default FriendsOfFriends;

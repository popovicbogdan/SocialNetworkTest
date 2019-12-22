import React from "react";
import { useSelector } from "react-redux";
import SingleFriendComp from "./SingleFriendComp/SingleFriendComp";
import { FriendsContainer } from "./DirectFriends/DirectFriends.styled";

const SuggestedFriends = ({ friendsIds, currentUser, firstName }) => {
  //get all who are not direct friends of currentUser and are not currentUser
  const allPossibleOptions = useSelector(state =>
    state.users.filter(
      user => !user.friends.includes(currentUser) && user.id !== currentUser
    )
  );

  //if there are 2 common friends return true
  const compareFriends = (currentUserFriends, checkingUsersFriends) => {
    let count = 0;
    currentUserFriends.forEach(element => {
      if (checkingUsersFriends.includes(element)) {
        count += 1;
      } else {
        return;
      }
    });
    return count > 1 ? true : false;
  };

  //get all people that have 2 or more friends in common with current user
  const getSuggestions = friendsIds => {
    const usersWith2OrMoreMutualFriends = allPossibleOptions.filter(user =>
      compareFriends(friendsIds, user.friends)
    );
    return usersWith2OrMoreMutualFriends;
  };

  const ListSuggestions = getSuggestions(friendsIds).map(fr => (
    <SingleFriendComp key={fr.id} friend={fr} />
  ));

  return (
    <FriendsContainer>
      <h5>People {firstName} might know</h5>
      {ListSuggestions}
    </FriendsContainer>
  );
};

export default SuggestedFriends;

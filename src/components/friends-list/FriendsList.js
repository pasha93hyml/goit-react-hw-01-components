import PropTypes from "prop-types";

import FriendsListItem from '../friends-list-item/FriendsListItem'

const FriendsList = ({ data }) => {
    const markup = data.map(item => <FriendsListItem data={item} key={item.id}/>)
  return (
  <ul className="friend-list">
      <h2>Friends</h2>
      {markup}
  </ul>
  );
};

FriendsList.propTypes = {
    data: PropTypes.array,
}

export default FriendsList;
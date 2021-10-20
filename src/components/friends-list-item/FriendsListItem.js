import PropTypes from "prop-types";
import './FriendsListItem.scss'

const FriendsListItem = ({data}) => {
    const { avatar, name, isOnline, id } = data;
    const clazz = isOnline ? 'green' : 'red'
    
  return (
    <li className="item" key={id}>
      <span className={clazz}>{isOnline ? 'On-line' : 'Off-line'}</span>
      <img className="avatar" src={avatar} alt="name" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

FriendsListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.number,
}


export default FriendsListItem;
import PropTypes from "prop-types";

import "./Profile.scss";

const Profile = ({ data }) => {
  const { name, tag, location, avatar, stats } = data;
  const entries = Object.entries(stats);
  const statsMarkup = entries.map((stat) => {
    return (
      <li key={stat[0]}>
        <span className="label">{stat[0]} </span>
        <span className="quantity">{stat[1]}</span>
      </li>
    );
  });
  return (
    <div className="profile">
      <div className="description">
        <img
          src={avatar}
          alt="Аватар пользователя"
          className="avatar"
          width="256"
        />
        <p className="name">{name}</p>
        <p>Nickname:  <span className="tag">{tag}</span></p>
        <p>From:  <span className="location">{location}</span></p>
      </div>
      <ul className="stats">
        {statsMarkup}
      </ul>
    </div>
  );
};

Profile.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.objectOf(PropTypes.number),
  }),
};

Profile.defaultProps = {
  data: {
    name: "Petrov",
    tag: "pechka",
    location: "Zimbabwe",
    avatar: "",
    stats: {
      followers: 1,
      views: 1,
      likes: 1,
    },
  },
};

export default Profile;

import PropTypes from "prop-types";

import './Statistics.scss'

const Statistics = ({ title, stats }) => {
  const markUp = stats.length > 0 && stats.map(({ id, label, percentage }) => {
    return (
      <li className="item" key={id} >
        <span className="label">{label} </span>
        <span className="percentage">{percentage}%</span>
      </li>
    );
  });
  return (
    <section className="statistics">
        {title && <h2 className="title">{title}</h2>}
      <ul className="stat-list">
        {markUp}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            label: PropTypes.string,
            percentage: PropTypes.number,
        })
    )
}

Statistics.defaultProps = {
    stats: [{id: 'id-000', label: 'nothing', percentage: 0}]
}
export default Statistics;
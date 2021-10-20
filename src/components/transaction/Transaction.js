import PropTypes from "prop-types";

const Transaction = ({ data }) => {
  const markup = data.map(({ id, type, amount, currency }) => {
    return (
        <tr key={id}>
          <td>{type}</td>
          <td>{amount}</td>
          <td>{currency}</td>
        </tr>
    );
  });
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {markup}
      </tbody>
    </table>
  );
};

Transaction.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        type: PropTypes.string,
        amount: PropTypes.string,
        currency: PropTypes.string,
    }))
}

export default Transaction;

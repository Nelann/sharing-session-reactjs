import PropTypes from "prop-types";

export default function Counter(props) {
  const { counter, increment } = props;

  return (
    <div>
      <p>Count: {counter}</p>
      <button onClick={increment}>Add +</button>
    </div>
  );
}

Counter.propTypes = {
  counter: PropTypes.number,
  increment: PropTypes.func,
};

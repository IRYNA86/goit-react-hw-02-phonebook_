import PropTypes from 'prop-types';

function Filter({ value, onChange }) {
  return <input type="text" value={value} onChange={onChange}></input>;
}

Filter.propTypes = {
  value: PropTypes.string,
  onchangeFilter: PropTypes.func,
};

export default Filter;

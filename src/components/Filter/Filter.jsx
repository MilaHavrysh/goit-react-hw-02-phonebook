import PropTypes from 'prop-types';

const Filter = ({ onFilterContact, filter }) => {
  return (
    <>
      <h2>find contacts by name</h2>
      <input
        type="text"
        name="filter"
        autoComplete="off"
        onChange={onFilterContact}
        value={filter}
      />
    </>
  );
};
Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterContact: PropTypes.func,
};

export default Filter;

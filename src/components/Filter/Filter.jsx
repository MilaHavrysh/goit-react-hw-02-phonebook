import React, { useState } from 'react';
import styles from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ filter, contacts, setFilter }) => {
  const [foundContact, setfoundContact] = useState([]);

  const searchContact = e => {
    setFilter(e.target.value);
    let requiredEl = contacts.filter(element =>
      element.name.toLowerCase().includes(filter.toLowerCase()),
    );
    setfoundContact(requiredEl);
    if (e.target.value === '') {
      setfoundContact([]);
    }
  };

  return (
    <>
      <h2>find contacts by name</h2>
      <input
        type="text"
        name="filter"
        autoComplete="off"
        onInput={searchContact}
      />
      <ul className={styles.filter_list}>
        {foundContact.map(item => (
          <li key={item.id} className={styles.filter_list_item}>
            <p className={styles.filter_list_item_name}>{item.name}</p>
            <p className={styles.filter_list_item_number}>{item.number}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  setFilter: PropTypes.func.isRequired,
};
export default Filter;

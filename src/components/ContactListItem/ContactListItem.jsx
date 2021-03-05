import PropTypes from 'prop-types';
import styles from './ContactListItem.module.css';

const ContactListItem = ({ contacts, onDeleteContact }) => {
  return contacts.map(element => (
    <li key={element.id} className={styles.contact_list_item}>
      <p className={styles.contact_list_item_name}>{element.name}</p>
      <p className={styles.contact_list_item_number}>{element.number}</p>
      <button
        className={styles.contact_list_item_button}
        type="button"
        onClick={() => onDeleteContact(element.id)}
      >
        delete
      </button>
    </li>
  ));
};
ContactListItem.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
export default ContactListItem;

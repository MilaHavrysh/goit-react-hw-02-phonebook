import PropTypes from 'prop-types';
import ContactListItem from '../ContactListItem/ContactListItem';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={styles.contactList}>
      <ContactListItem contacts={contacts} onDeleteContact={onDeleteContact} />
    </ul>
  );
};

ContactListItem.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;

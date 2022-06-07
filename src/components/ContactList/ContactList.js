import PropTypes from 'prop-types';

function ContactList({ contacts, onDeleteContact }) {
  return (
    <>
      {contacts.map(contact => (
        <li key={contact.id}>
          <span>{contact.name}:</span>
          <span> {contact.number} </span>
          <button type="button" onClick={() => onDeleteContact(contact.id)}>
            Delete
          </button>
        </li>
      ))}
    </>
  );
}

export default ContactList;

ContactList.propTypes = {
  onDeleteContact: PropTypes.func,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
};

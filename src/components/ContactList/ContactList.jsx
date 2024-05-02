import ContactListItem from '../ContactListItem/ContactListItem';
import css from '../ContactList/ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={css.contactList}>
    {contacts.map(({ id, name, number }) => (
      <ContactListItem
        key={id}
        name={name}
        number={number}
        onDelete={() => onDeleteContact(id)}
      />
    ))}
  </ul>
);

export default ContactList;
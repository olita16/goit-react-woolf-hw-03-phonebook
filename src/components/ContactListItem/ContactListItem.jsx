import css from '../ContactListItem/ContactListItem.module.css';

const ContactListItem = ({ name, number, onDelete }) => (
  <li className={css.contactListItem}>
    {name}: {number}
    <button className={css.deleteButton} type="button" onClick={onDelete}>
      Delete
    </button>
  </li>
);

export default ContactListItem;
import { FaTrash, FaUserAlt } from 'react-icons/fa';
import css from './Contact.module.css';

function Contact({ name, number, onDeleteContact, contactId }) {
  return (
    <>
      <div className={css.wrapper}>
        <span className={css.icon}>
          <FaUserAlt />
        </span>
        <p>{name}</p>
      </div>
      <div className={css.wrapper}>
        <p className={css.number}>{number}</p>
        <button
          className={css.button}
          type="button"
          onClick={() => onDeleteContact(contactId)}
        >
          <FaTrash />
        </button>
      </div>
    </>
  );
}

export default Contact;

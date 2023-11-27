import Contact from '../Contact';
import css from './ContactList.module.css';

function ContactList({ contacts, onDeleteContact, visibleContacts }) {
  return (
    <ul>
      {contacts.length > 0 &&
        visibleContacts.map(({ id, name, number }) => {
          return (
            <li className={css.item} key={id}>
              <Contact
                name={name}
                number={number}
                onDeleteContact={onDeleteContact}
                contactId={id}
              />
            </li>
          );
        })}
    </ul>
  );
}

export default ContactList;

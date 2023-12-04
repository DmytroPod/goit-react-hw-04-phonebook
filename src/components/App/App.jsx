import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Report } from 'notiflix/build/notiflix-report-aio';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import Message from './Message';
import css from './App.module.css';

const App = () => {
  const [contacts, setContacts] = useState(() =>
    JSON.parse(localStorage.getItem('contacts') || [])
  );

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  function addContact({ name, number }) {
    const newContact = { id: nanoid(), name, number };

    if (contacts.some(contact => contact.name === name)) {
      Report.warning(`${name}`, ' is already in the contact.', 'OK');
      return;
    }
    setContacts(prev => [...prev, newContact]);
  }

  const deleteContact = contactId => {
    console.log(contactId);
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const filtredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  const length = contacts.length;

  const visibleContacts = filtredContacts();

  return (
    <div className={css.container}>
      <h1 className={css.title}>
        Phone<span className={css.title__color}>book</span>
      </h1>
      <ContactForm onSubmit={addContact} />

      <h2 className={css.subtitle}>Contacts</h2>

      <Filter filter={filter} changeFilter={changeFilter} />
      {length > 0 ? (
        <ContactList
          contacts={contacts}
          visibleContacts={visibleContacts}
          onDeleteContact={deleteContact}
        />
      ) : (
        <Message text="Contact list is empty." />
      )}
    </div>
  );
};

export default App;

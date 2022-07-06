import { useState, useEffect } from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import s from './App.module.css';

export default function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? '';
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const contactFormSubmit = contact => {
    const isInclude = checkForDuplicate(contact.name);

    if (isInclude) {
      alert(`${contact.name} is already in contacts`);
      return;
    }

    setContacts([...contacts, contact]);
  };

  const checkForDuplicate = name => {
    return contacts.some(contact => contact.name === name);
  };

  const filterValueChanger = ({ target: { value } }) => {
    setFilter(value);
  };

  const onContactDelete = contactId => {
    setContacts(contacts => contacts.filter(el => el.id !== contactId));
  };

  return (
    <div className={s.container}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm onSubmit={contactFormSubmit} />

      <h2 className={s.contactsTitle}>Contacts</h2>
      <Filter filterValue={filter} filterValueChanger={filterValueChanger} />
      <ContactList
        contacts={contacts}
        filter={filter}
        onDelete={onContactDelete}
      />
    </div>
  );
}

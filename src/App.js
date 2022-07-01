import { Component } from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import s from './App.module.css';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  checkForDuplicate = name => {
    const { contacts } = this.state;
    return contacts.some(contact => contact.name === name);
  };

  contactFormSubmit = contact => {
    const isInclude = this.checkForDuplicate(contact.name);

    if (isInclude) {
      alert(`${contact.name} is already in contacts`);
      return;
    }

    this.setState(({ contacts }) => ({
      contacts: [...contacts, contact],
    }));
  };

  filterValueChanger = e => {
    const { value } = e.target;
    this.setState({ filter: value });
  };

  onContactDelete = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(el => el.id !== contactId),
    }));
  };

  render() {
    const { filter, contacts } = this.state;
    const { contactFormSubmit, filterValueChanger, onContactDelete } = this;

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
}

export default App;

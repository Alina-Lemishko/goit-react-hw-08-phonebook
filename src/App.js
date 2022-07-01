import { Component } from 'react';

import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  contactFormSubmit = contact => {
    this.setState(({ contacts }) => ({
      contacts: [...contacts, contact],
    }));
  };

  filterContactList = () => {
    const { contacts, filter } = this.state;

    if (filter) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
    return contacts;
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
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.contactFormSubmit} />

        <h2>Contacts</h2>
        <Filter
          filterValue={this.state.filter}
          filterValueChanger={this.filterValueChanger}
        />
        <ContactList
          contacts={this.filterContactList}
          onDelete={this.onContactDelete}
        />
      </div>
    );
  }
}

export default App;

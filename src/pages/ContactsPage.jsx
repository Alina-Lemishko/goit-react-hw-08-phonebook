import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

import s from '../App.module.css';

const ContactsPage = () => {
  return (
    <div className={s.container}>
      <h2 className={s.title}>PhoneBook</h2>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
};

export default ContactsPage;

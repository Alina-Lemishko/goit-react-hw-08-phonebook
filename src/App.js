import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import { getError, getLoading } from 'redux/contacts/contacts-selectors';
import * as operations from './redux/contacts/contacts-operations';
import Loader from 'components/Loader/loader';
import s from './App.module.css';

export default function App() {
  const loading = useSelector(getLoading);
  const error = useSelector(getError);

  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch(operations.fetchContacts());
    },
    // eslint-disable-next-line
    []
  );

  return (
    <div className={s.container}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={s.contactsTitle}>Contacts</h2>
      <Filter />
      {loading && <Loader />}
      {error && <p>{error.message}</p>}
      <ContactList />
    </div>
  );
}

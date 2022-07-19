import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { useState, useEffect, useMemo } from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import {
  contactSelector,
  getError,
  getLoading,
} from 'redux/contacts/contacts-selectors';
import * as operations from './redux/contacts/contacts-operations';
import Loader from 'components/Loader/loader';
import s from './App.module.css';

export default function App() {
  const [filter, setFilter] = useState('');

  const contacts = useSelector(contactSelector, shallowEqual);
  const loading = useSelector(getLoading, shallowEqual);
  const error = useSelector(getError, shallowEqual);

  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch(operations.fetchContacts());
    },
    // eslint-disable-next-line
    []
  );

  const getFilteredContacts = useMemo(() => {
    const normalizedFilter = filter?.toLowerCase();
    if (filter) {
      return contacts?.filter(({ name }) =>
        name.toLowerCase().includes(normalizedFilter)
      );
    }
    return contacts;
  }, [contacts, filter]);

  return (
    <div className={s.container}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={s.contactsTitle}>Contacts</h2>
      <Filter filter={filter} setFilter={setFilter} />
      {loading && <Loader />}
      {error && <p>{error.message}</p>}
      {Boolean(getFilteredContacts.length) && (
        <ContactList contacts={getFilteredContacts} />
      )}
    </div>
  );
}

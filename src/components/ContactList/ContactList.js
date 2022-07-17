import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from 'redux/contacts/contacts-selectors';
import contactsAction from 'redux/contacts/contacts-actions';
import s from './ContactList.module.css';

const ContactList = () => {
  const contactsList = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  return (
    <ul className={s.contactList}>
      {contactsList?.map(el => {
        return (
          <li
            className={s.contactListItem}
            key={el.id}
            style={{ listStyle: 'none' }}
          >
            {el.name}: <span>{el.number}</span>
            <button
              className={s.contactListBnt}
              type="button"
              onClick={() => dispatch(contactsAction.contactDelete(el.id))}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;

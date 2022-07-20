import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './ContactList.module.css';
import * as operations from 'redux/contacts/contacts-operations';
import { Notify } from 'notiflix';
import { getVisibleContacts } from 'redux/contacts/contacts-selectors';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getVisibleContacts);

  const removeContact = id => {
    dispatch(operations.removeContact(id));
  };

  return (
    <ul className={s.contactList}>
      {contacts?.map(el => {
        return (
          <li
            className={s.contactListItem}
            key={el.id}
            style={{ listStyle: 'none' }}
          >
            {el.name}: <span>{el.phone}</span>
            <button
              className={s.contactListBnt}
              type="button"
              onClick={() => {
                Notify.info(`${el.name} was deleted from contacts`);
                dispatch(() => removeContact(el.id));
              }}
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

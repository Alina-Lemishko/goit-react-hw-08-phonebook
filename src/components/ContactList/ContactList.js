import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import s from './ContactList.module.css';
import * as operations from 'redux/contacts/contacts-operations';

const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();

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
              onClick={() => dispatch(() => removeContact(el.id))}
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

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};

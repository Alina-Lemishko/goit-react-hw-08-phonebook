import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';

const ContactList = ({ contacts, filter, onDelete }) => {
  const filterContactList = (contacts, filter) => {
    if (filter) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
    return contacts;
  };

  return (
    <ul className={s.contactList}>
      {filterContactList(contacts, filter).map(el => {
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
              onClick={() => onDelete(el.id)}
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
  onDelete: PropTypes.func.isRequired,
};

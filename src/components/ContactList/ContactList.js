import React from 'react';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts().map(el => {
        return (
          <li key={el.id} style={{ listStyle: 'none' }}>
            {el.name}: {el.number}
            <button type="button" onClick={() => onDelete(el.id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;

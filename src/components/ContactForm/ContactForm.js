import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import * as operations from '../../redux/contacts/contacts-operations';
import s from './ContactForm.module.css';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const addContact = data => {
    dispatch(operations.addContact(data));
  };

  const dispatch = useDispatch();

  const handleReset = () => {
    setName('');
    setPhone('');
  };

  const handleSubmit = e => {
    e.preventDefault();

    addContact({ name, phone, id: nanoid() });

    handleReset();
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setPhone(value);
        break;
      default:
        break;
    }
  };

  return (
    <form onSubmit={handleSubmit} className={s.formWrap}>
      <label className={s.label}>
        {' '}
        Name
        <input
          className={s.input}
          type="text"
          name="name"
          value={name}
          placeholder="name"
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={s.label}>
        {' '}
        Number
        <input
          className={s.input}
          type="tel"
          name="number"
          value={phone}
          placeholder="number"
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <div className={s.buttonWrap}>
        <button type="submit" className={s.formButton}>
          Add contact
        </button>
      </div>
    </form>
  );
}

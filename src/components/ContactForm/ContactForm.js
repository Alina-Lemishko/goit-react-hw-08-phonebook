import { Component } from 'react';
import { nanoid } from 'nanoid';
import s from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleReset = () => {
    this.setState({ name: '', number: '' });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({ ...this.state, id: nanoid() });
    this.handleReset();
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  render() {
    const { name, number } = this.state;
    const { handleSubmit, handleChange } = this;
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
            value={number}
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
}

export default ContactForm;

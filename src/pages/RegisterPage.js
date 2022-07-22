import { Button } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from 'redux/auth/auth-operations';

import s from './styles/LoginPage.module.css';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(signUp({ name, email, password }));
  };

  return (
    <div className={s.container}>
      <h2 className={s.title}>Register form</h2>
      <form onSubmit={handleSubmit} className={s.form} autoComplete="off">
        <label>
          Name
          <input
            className={s.input}
            onChange={handleChange}
            name="name"
            type="text"
            value={name}
            required
            placeholder="enter your name"
          />
        </label>
        <label>
          Email
          <input
            className={s.input}
            onChange={handleChange}
            name="email"
            type="email"
            value={email}
            required
            placeholder="enter your email"
          />
        </label>
        <label>
          Password
          <input
            className={s.input}
            onChange={handleChange}
            name="password"
            type="password"
            value={password}
            required
            placeholder="enter your password"
          />
        </label>
        <Button
          variant="outlined"
          color="inherit"
          type="submit"
          size="large"
          sx={{
            width: '100%',
            height: 60,
            fontSize: 22,
            backgroundColor: '#fffacf',
            color: '#1e88e5',
          }}
        >
          register
        </Button>
      </form>
    </div>
  );
};

export default RegisterPage;

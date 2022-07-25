import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { login } from 'redux/auth/auth-operations';
import { Button } from '@mui/material';

import s from './styles/LoginPage.module.css';

const LoginPage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(login({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div className={s.container}>
      <h2 className={s.title}>Login Form</h2>
      <form className={s.form} onSubmit={handleSubmit}>
        <label>
          Email
          <input
            className={s.input}
            onChange={handleChange}
            value={email}
            name="email"
            type="email"
            required
            placeholder="enter your email"
          />
        </label>
        <label>
          Password
          <input
            className={s.input}
            onChange={handleChange}
            value={password}
            name="password"
            type="password"
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
          login
        </Button>
      </form>
    </div>
  );
};

export default LoginPage;

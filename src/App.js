import { useDispatch } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import React, { useEffect } from 'react';

import * as operations from './redux/contacts/contacts-operations';
import HomePage from 'pages/HomePage';
import ContactsPage from 'pages/ContactsPage';
import NavBar from 'components/NavBarMenu/NavBar';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import { getCurrentUser } from 'redux/auth/auth-operations';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
    dispatch(operations.fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

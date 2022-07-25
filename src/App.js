import { useDispatch } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import React, { useEffect, lazy, Suspense } from 'react';

import * as operations from './redux/contacts/contacts-operations';
import NavBar from 'components/NavBarMenu/NavBar';
import { getCurrentUser } from 'redux/auth/auth-operations';

const HomePage = lazy(() => import('pages/HomePage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const PrivateRoute = lazy(() => import('components/PrivateRoute'));
const PublicRoute = lazy(() => import('components/PublicRoute'));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
    dispatch(operations.fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <NavBar />
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    </div>
  );
}

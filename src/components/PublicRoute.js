import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';

import { Navigate, Outlet } from 'react-router-dom';

const PublicRoute = () => {
  const isLoggedIn = useSelector(authSelectors.isUserLogin);

  if (isLoggedIn) {
    return <Navigate replace to="/contacts" />;
  }

  return <Outlet />;
};

export default PublicRoute;

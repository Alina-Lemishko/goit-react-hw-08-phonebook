import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';

import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const isLoggedIn = useSelector(authSelectors.isUserLogin);

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default PrivateRoute;

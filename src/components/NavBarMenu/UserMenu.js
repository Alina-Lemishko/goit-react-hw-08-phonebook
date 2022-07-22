import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import { logout } from 'redux/auth/auth-operations';
import authSelectors from 'redux/auth/auth-selectors';

const UserMenu = () => {
  const name = useSelector(authSelectors.getUser);

  const dispatch = useDispatch();

  const logoutUser = () => {
    dispatch(logout());
  };

  return (
    <div>
      <span>Welcome to your PhoneBook {name} </span>
      <Button variant="outlined" color="inherit" onClick={logoutUser}>
        Logout
      </Button>
    </div>
  );
};

export default UserMenu;

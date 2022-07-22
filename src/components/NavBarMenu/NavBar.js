import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import authSelectors from 'redux/auth/auth-selectors';
import UserMenu from './UserMenu';
import s from './NavBar.module.css';

const NavBar = () => {
  const isLoggedIn = useSelector(authSelectors.isUserLogin);

  const getACtiveClass = ({ isActive }) => (isActive ? s.linkActive : s.link);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Button color="inherit" variant="outlined" sx={{ mr: 1 }}>
              <NavLink className={getACtiveClass} to="/">
                Home
              </NavLink>
            </Button>

            {isLoggedIn && (
              <>
                <Button color="inherit" variant="outlined">
                  <NavLink className={getACtiveClass} to="/contacts">
                    Contacts
                  </NavLink>
                </Button>
              </>
            )}
          </Typography>

          {!isLoggedIn && (
            <div>
              <Button color="inherit" variant="outlined" sx={{ mr: 1 }}>
                <NavLink to="/login" className={getACtiveClass}>
                  Login
                </NavLink>
              </Button>
              <Button color="inherit" variant="outlined">
                <NavLink to="/register" className={getACtiveClass}>
                  Register
                </NavLink>
              </Button>
            </div>
          )}

          {isLoggedIn && <UserMenu />}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;

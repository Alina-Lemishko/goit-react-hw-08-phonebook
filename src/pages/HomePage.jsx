import { NavLink } from 'react-router-dom';
import s from '../App.module.css';

const HomePage = () => {
  return (
    <div className={s.container}>
      <h1 className={s.title}>In our APP you can create your own PHONEBOOK</h1>
      <div className={s.wrap}>
        <NavLink to="/register" className={s.titleLink}>
          Click here for Registration
        </NavLink>
      </div>
    </div>
  );
};

export default HomePage;

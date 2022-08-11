import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { deleteAuthToken } from '../../http/http';
import { logoutAction } from '../../redux/auth/auth-slice';
import { UserCard } from '../UserCard/UserCard';

export const PrivateNavigation = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutAction());
    deleteAuthToken();
  };

  return (
    <div className="d-flex flex-column align-items-start justify-content-between" style={{ height: '100%' }}>
      <nav className="navbar">
        <UserCard />

        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              Home page
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/account" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              My account
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/posts" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              Post list
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/new-post" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              Create post
            </NavLink>
          </li>
        </ul>
      </nav>

      <button type="button" className="btn btn-danger px-5" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

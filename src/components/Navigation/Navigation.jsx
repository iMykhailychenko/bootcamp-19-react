import { useContext } from 'react';

import { NavLink } from 'react-router-dom';

import { AuthContext } from '../../context/auth-context';

import { LoginForm } from './LoginForm';

export const Navigation = () => {
  const { isAuth, logout } = useContext(AuthContext);

  return isAuth ? (
    <div className="d-flex flex-column align-items-start justify-content-between" style={{ height: '100%' }}>
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              Home page
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

      <button onClick={logout} type="button" className="btn btn-danger px-5">
        Logout
      </button>
    </div>
  ) : (
    <LoginForm />
  );
};

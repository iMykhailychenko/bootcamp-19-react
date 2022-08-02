import { useContext } from 'react';

import { NavLink, useLocation } from 'react-router-dom';

import { AuthContext } from '../../context/auth-context';

import { LoginForm } from './LoginForm';

export const Navigation = () => {
  const { pathname } = useLocation();
  const { isAuth, logout } = useContext(AuthContext);

  const title = pathname === '/' ? 'Go home' : pathname === '/posts' ? 'Go to posts' : 'Go to new posts';

  return isAuth ? (
    <div className="d-flex flex-column align-items-start justify-content-between" style={{ height: '100%' }}>
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink
              to="/"
              state={{ pathname, title }}
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              Home page
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/posts"
              state={{ pathname, title }}
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              Post list
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/new-post"
              state={{ pathname, title }}
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
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

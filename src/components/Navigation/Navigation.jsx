import { useContext } from 'react';

import { AuthContext } from '../../context/auth-context';

import { LoginForm } from './LoginForm';

export const Navigation = () => {
  const { isAuth, logout } = useContext(AuthContext);

  return isAuth ? (
    <div className="d-flex flex-column align-items-start justify-content-between" style={{ height: '100%' }}>
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active">Home page</a>
          </li>

          <li className="nav-item">
            <a className="nav-link">Post list</a>
          </li>

          <li className="nav-item">
            <a className="nav-link">Create post</a>
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

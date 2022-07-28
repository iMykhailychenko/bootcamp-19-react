import { useContext } from 'react';

import { AuthContext } from '../../context/auth-context';

import { LoginForm } from './LoginForm';

export const Navigation = () => {
  const { isAuth, logout } = useContext(AuthContext);

  return isAuth ? (
    <>
      <nav className="navbar">
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link active">Home page</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Create post</a>
          </li>
        </ul>
      </nav>

      <button onClick={logout} type="button" className="btn btn-primary mt-4">
        Logout
      </button>
    </>
  ) : (
    <LoginForm />
  );
};

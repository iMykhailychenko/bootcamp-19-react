import { useAuthContext } from '../../contenxt/auth-context';

export const Navigation = () => {
  const [isAuth, setIsAuth] = useAuthContext();

  const handleLogin = () => setIsAuth(true);
  const handleLogout = () => setIsAuth(false);

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
      <button type="button" onClick={handleLogout}>
        Click to logout
      </button>
    </>
  ) : (
    <button type="button" onClick={handleLogin}>
      Click to login
    </button>
  );
};

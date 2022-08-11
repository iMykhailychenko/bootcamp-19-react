import { NavLink } from 'react-router-dom';

export const PublicNavigation = () => {
  return (
    <div className="d-flex flex-column align-items-start justify-content-between" style={{ height: '100%' }}>
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              Home page
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/login" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              Log In
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/join" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              Sign In
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

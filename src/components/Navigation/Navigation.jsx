export const Navigation = () => {
  return (
    <nav className="navbar">
      <ul className="nav flex-column">
        <li className="nav-item">
          <a className="nav-link active">Active</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">Disabled</a>
        </li>
      </ul>
    </nav>
  );
};

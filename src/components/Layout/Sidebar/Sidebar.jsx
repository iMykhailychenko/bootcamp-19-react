import PropTypes from 'prop-types';

export const Sidebar = ({ children }) => {
  return (
    <aside className="sidebar col-3 p-5" style={{ height: '100vh' }}>
      {children}
    </aside>
  );
};

Sidebar.propTypes = {
  children: PropTypes.node,
};

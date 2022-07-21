import PropTypes from 'prop-types';

export const Sidebar = ({ children }) => {
  return <aside className="col-3 p-5">{children}</aside>;
};

Sidebar.propTypes = {
  children: PropTypes.node,
};

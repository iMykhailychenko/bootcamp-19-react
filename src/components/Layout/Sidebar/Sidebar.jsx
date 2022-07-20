import PropTypes from 'prop-types';

import { Navigation } from '../Navigation/Navigation';

export const Sidebar = ({ children }) => {
  return (
    <aside className="col-3 p-5">
      <Navigation />

      {children}
    </aside>
  );
};

Sidebar.propTypes = {
  children: PropTypes.node,
};

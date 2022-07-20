import PropTypes from 'prop-types';

export const Main = ({ children }) => {
  return (
    <main className="container-fluid">
      <div className="row">{children}</div>
    </main>
  );
};

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

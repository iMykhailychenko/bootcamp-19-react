import PropTypes from 'prop-types';

export const Content = ({ children }) => {
  return (
    <div className="col-9 bg-light p-5 content">
      <h1 className="pb-5">Информация о университете</h1>

      {children}
    </div>
  );
};

Content.propTypes = {
  children: PropTypes.node,
};

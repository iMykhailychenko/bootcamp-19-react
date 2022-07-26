import PropTypes from 'prop-types';

export const Content = ({ children, title }) => {
  return (
    <div className="col-9 bg-light p-5 content">
      {title && <h1 className="pb-5">{title}</h1>}

      {children}
    </div>
  );
};

Content.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

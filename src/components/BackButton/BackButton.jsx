import { Link, useLocation } from 'react-router-dom';

export const BackButton = () => {
  const location = useLocation();

  return (
    <Link to={location.state?.pathname ?? '/'} type="button" className="btn btn-outline-primary mb-4">
      {location.state?.title ?? 'Go back'}
    </Link>
  );
};

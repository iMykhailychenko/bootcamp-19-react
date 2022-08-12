import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

import { getAccessTokenSelector } from '../../redux/auth/auth-selectors';

export const PublicRoute = ({ children }) => {
  const { state } = useLocation();
  const accessToken = useSelector(getAccessTokenSelector);

  return accessToken ? <Navigate to={state?.pathname ? state.pathname : '/'} /> : children;
};

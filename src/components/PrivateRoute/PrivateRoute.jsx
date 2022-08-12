import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

import { getAccessTokenSelector } from '../../redux/auth/auth-selectors';

export const PrivateRoute = ({ children }) => {
  const { pathname } = useLocation();
  const accessToken = useSelector(getAccessTokenSelector);

  return accessToken ? children : <Navigate to="/login" state={{ pathname }} />;
};

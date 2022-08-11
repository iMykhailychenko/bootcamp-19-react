import { useSelector } from 'react-redux';

import { PrivateNavigation } from './PrivateNavigation';
import { PublicNavigation } from './PublicNavigation';

export const Navigation = () => {
  const accessToken = useSelector(state => state.auth.access_token);

  return accessToken ? <PrivateNavigation /> : <PublicNavigation />;
};

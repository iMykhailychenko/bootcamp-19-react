import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { STATUS } from '../../constants/status';

export const UserCard = () => {
  const profile = useSelector(state => state.profile);

  if (profile.status === STATUS.Idle || profile.status === STATUS.Loading) {
    return <p>Loading ...</p>;
  }

  if (profile.status === STATUS.Error || !profile.data) {
    return <p>Error</p>;
  }

  return (
    <Link to="/account" className="list-group-item list-group-item-action py-3 mb-4">
      <div className="d-flex w-100 align-items-center">
        <img
          src={profile.data.avatar || '/user.png'}
          className="d-block"
          style={{ borderRadius: '50%', boxSizing: 'border-box' }}
          width="80px"
          height="80px"
          alt=""
        />
        <div className="ms-3 d-flex flex-column">
          <strong className="mb-1">
            {profile.data.first_name} {profile.data.last_name}
          </strong>
          <small className="text-muted">{profile.data.email}</small>
        </div>
      </div>
    </Link>
  );
};

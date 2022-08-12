import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { updateAccountThunk } from '../../redux/profile/profile-thunk';

const initialState = {
  avatar: '',
  first_name: '',
  last_name: '',
  bio: '',
};

export const AccountPage = () => {
  const dispatch = useDispatch();
  const { avatar, first_name, last_name, bio } = useSelector(state => state.profile.data);

  const [accountInfo, setAccountInfo] = useState({ avatar, first_name, last_name, bio });

  const handleChange = event => {
    const { name, value } = event.target;
    setAccountInfo(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(updateAccountThunk(accountInfo))
      .unwrap()
      .then(() => {
        toast.success('Success');
      })
      .catch(() => {
        toast.error('Error');
      });
  };

  const handleReset = () => {
    setAccountInfo(initialState);
  };

  return (
    <form action="#" className="mt-5 mx-auto p-0" onSubmit={handleSubmit}>
      <h1 className="h3 mb-3 fw-normal">Welcome!</h1>

      <div className="form-floating my-4">
        <input
          id="avatar"
          name="avatar"
          type="text"
          value={accountInfo.avatar}
          onChange={handleChange}
          placeholder="https://..."
          autoComplete="username"
          className="form-control"
        />
        <label htmlFor="avatar">Avatar</label>
      </div>

      <div className="form-floating my-4">
        <input
          id="first_name"
          value={accountInfo.first_name}
          onChange={handleChange}
          placeholder="First name"
          name="first_name"
          type="text"
          className="form-control"
        />
        <label htmlFor="first_name">First name</label>
      </div>

      <div className="form-floating my-4">
        <input
          id="last_name"
          value={accountInfo.last_name}
          onChange={handleChange}
          placeholder="Last name"
          name="last_name"
          type="text"
          className="form-control"
        />
        <label htmlFor="last_name">Last name</label>
      </div>

      <div className="my-4">
        <label htmlFor="bio">Bio</label>
        <textarea
          rows={5}
          id="bio"
          value={accountInfo.bio}
          onChange={handleChange}
          name="bio"
          placeholder="Bio"
          className="form-control"
        />
      </div>

      <button className="mt-2 btn btn-lg btn-primary" type="submit">
        Update account
      </button>

      <button className="ms-3 mt-2 btn btn-lg btn-secondary" type="button" onClick={handleReset}>
        Reset
      </button>
    </form>
  );
};

import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { loginThunk } from '../../../redux/auth/auth-thubk';
import { createUserService } from '../../../services/users-service';

const year = new Date().getFullYear();

export const JoinPage = () => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [values, setValues] = useState({
    email: '',
    first_name: '',
    last_name: '',
    password: '',
  });

  const handleChange = event => {
    const { value, name } = event.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();

    setIsLoading(true);
    createUserService(values)
      .then(() => {
        toast.success('Success');
        dispatch(loginThunk({ email: values.email, password: values.password }))
          .unwrap()
          .catch(() => toast.error('Error'));
      })
      .catch(() => {
        toast.error('Error');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <form action="#" className="mt-5 mx-auto p-0" style={{ width: '450px' }} onSubmit={handleSubmit}>
        <h1 className="h3 mb-3 fw-normal">Please Sign In</h1>

        <div className="form-floating my-4">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="username"
            value={values.email}
            onChange={handleChange}
            className="form-control"
          />
          <label htmlFor="email">Email address</label>
        </div>

        <div className="form-floating my-4">
          <input
            id="first_name"
            name="first_name"
            type="first_name"
            autoComplete="off"
            value={values.first_name}
            onChange={handleChange}
            className="form-control"
          />
          <label htmlFor="first_name">First Name</label>
        </div>

        <div className="form-floating my-4">
          <input
            id="last_name"
            name="last_name"
            type="last_name"
            autoComplete="off"
            value={values.last_name}
            onChange={handleChange}
            className="form-control"
          />
          <label htmlFor="last_name">Last Name</label>
        </div>

        <div className="form-floating my-4">
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            value={values.password}
            onChange={handleChange}
            className="form-control"
          />
          <label htmlFor="password">Password</label>
        </div>

        <Link to="/login" className="d-block my-4">
          Already has account?
        </Link>

        <button className="w-100 mt-2 btn btn-lg btn-primary" disabled={isLoading} type="submit">
          {isLoading ? 'Loading ....' : 'Sign In'}
        </button>
        <p className="mt-5 mb-3 text-muted">© {year}</p>
      </form>
    </>
  );
};

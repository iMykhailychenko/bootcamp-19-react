import { useState, useContext } from 'react';

import { AuthContext } from '../../context/auth-context';

export const LoginForm = () => {
  const { login } = useContext(AuthContext);

  const [password, setPassword] = useState('');

  const handleChange = event => {
    const { value } = event.target;
    setPassword(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    login(password);
    setPassword('');
  };

  return (
    <form className="input-group mb-3" onSubmit={handleSubmit}>
      <input
        value={password}
        type="password"
        placeholder="Your password"
        className="form-control"
        onChange={handleChange}
      />
      <button className="btn btn-primary" type="submit" style={{ width: '150px' }}>
        Login
      </button>
    </form>
  );
};

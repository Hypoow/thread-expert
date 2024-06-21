import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../../hooks/useInput';

export default function RegisterForm({ register }) {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  const handleRegister = (event) => {
    event.preventDefault();
    register({ name, email, password });
  };

  return (
    <form className="input-register" onSubmit={handleRegister}>
      <label htmlFor="name">
        Name
        <input
          type="text"
          id="name"
          value={name}
          onChange={onNameChange}
          placeholder="Name"
        />
      </label>
      <label htmlFor="email">
        E-Mail
        <input
          type="email"
          id="email"
          value={email}
          onChange={onEmailChange}
          placeholder="Email"
        />
      </label>
      <label htmlFor="password">
        Password
        <input
          type="password"
          id="password"
          value={password}
          onChange={onPasswordChange}
          placeholder="Password"
        />
      </label>
      <button type="submit">
        Register
      </button>
    </form>
  );
}

RegisterForm.propTypes = {
  register: PropTypes.func.isRequired,
};

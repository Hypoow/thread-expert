import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { asyncSetAuthUser } from '../states/authUser/actions';
import LoginForm from '../components/Authentication/LoginForm';

export default function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogin = async ({ email, password }) => {
    try {
      await dispatch(asyncSetAuthUser({ email, password }));
      navigate('/');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="form-page">
      <article className="login-content">
        <h2>User Login</h2>
        <LoginForm login={onLogin} />
        <p>
          Don't have an account?
          {' '}
          <Link to="/register" style={{ textDecoration: 'underline', color: 'blue' }}>Sign up here</Link>
        </p>
      </article>
    </div>
  );
}

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { asyncRegisterUser } from '../states/users/actions';
import RegisterForm from '../components/Authentication/RegisterForm';

export default function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onRegister = async ({ name, email, password }) => {
    try {
      await dispatch(asyncRegisterUser({ name, email, password }));
      navigate('/');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <section className="form-page">
      <article className="register-page__main">
        <h2>Create an Account</h2>
        <RegisterForm register={onRegister} />
        <p>
          Already have an account?
          {' '}
          <Link to="/" style={{ textDecoration: 'underline', color: 'blue' }}>Log In</Link>
        </p>
      </article>
    </section>
  );
}

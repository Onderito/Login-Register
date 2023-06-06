import React, { useState } from 'react';

function Login(props) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSumbit = (e) => {
    e.preventDefault();
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPass(e.target.value);
  };

  return (
    <div className="auth-form-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSumbit}>
        <label htmlFor="email">email</label>
        <input
          value={email}
          onChange={handleEmailChange}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        />
        <label htmlFor="password">password</label>
        <input
          value={pass}
          onChange={handlePasswordChange}
          type="password"
          placeholder="*********"
          id="password"
          name="password"
        />
        <button type="sumbit">Log in</button>
      </form>
      <button
        className="link-btn"
        onClick={() => props.onFormSwitch('register')}
      >
        Already have an account ? Register here!
      </button>
    </div>
  );
}

export default Login;

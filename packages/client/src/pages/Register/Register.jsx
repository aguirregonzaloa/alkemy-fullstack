import React from 'react';

const Register = () => {
  return (
    <div>
      <h2>Register: </h2>
      <form action="">
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" name="username" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="text" name="email" required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" required />
        </div>
        <button type="submit">register</button>
      </form>
    </div>
  );
};

export default Register;

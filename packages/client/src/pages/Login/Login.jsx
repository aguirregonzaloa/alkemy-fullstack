import React from 'react';

function Login() {
  return (
    <div>
      <h2>Login:</h2>
      <form action="">
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" required />
        </div>
        <button type="submit">login</button>
      </form>
    </div>
  );
}

export default Login;

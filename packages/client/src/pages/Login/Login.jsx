import * as React from 'react';
import { loginUser, getUserData } from '../../shared/api/auth';

function Login() {
  const [user, setUser] = React.useState({ email: '', password: '' });
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {}, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { token, error, loading } = await loginUser(user);
    if (token) {
      const { email } = await getUserData(token);
      console.log(email);
    }
    setData(token);
    setError(error);
    setLoading(loading);
  };

  return (
    <div className="m-auto w-full pt-4">
      <h2 className="font-bold text-center mb-4">Login:</h2>
      <form onSubmit={handleSubmit} className="w-[550px] m-auto ">
        <div className="flex justify-between mb-4">
          <label htmlFor="email" className="w-[25%]">
            Email:
          </label>
          <input
            className="w-[75%] border border-black border-solid rounded"
            type="email"
            name="email"
            id="email"
            value={user.email}
            onChange={(e) => {
              const email = e.target.value;
              setError(null);
              setUser({ ...user, email });
            }}
            required
          />
        </div>
        <div className="flex justify-between mb-4">
          <label className="w-[25%]" htmlFor="password">
            Password:
          </label>
          <input
            className="w-[75%] border border-black border-solid rounded"
            type="password"
            name="password"
            id="password"
            value={user.password}
            onChange={(e) => {
              const password = e.target.value;
              setError(null);
              setUser({ ...user, password });
            }}
            required
          />
        </div>
        {error && (
          <p className="text-red-500 font-bold text-center bg-red-200 w-full p-1 mb-4">
            {error.msg}
          </p>
        )}
        {data && (
          <p className="text-green-500 font-bold text-center bg-green-200 w-full mb-4">
            {JSON.stringify(data)}
          </p>
        )}
        <button
          className={
            loading
              ? 'bg-slate-800 text-white font-bold rounded p-3 w-full'
              : 'bg-slate-400 text-white font-bold rounded p-3 w-full'
          }
          type="submit"
        >
          login
          {loading && <span>...</span>}
        </button>
      </form>
    </div>
  );
}

export default Login;

import * as React from 'react';
import { loginUser, getUserData } from '../../shared/api/auth';
import { userContext } from '../../shared/context/userContext';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [login, setLogin] = React.useState({ email: '', password: '' });
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const { user, setUser } = React.useContext(userContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { token, error, loading } = await loginUser(login);
    if (token) {
      const { email } = await getUserData(token);
      localStorage.setItem('Token', token);
      setUser({ ...user, email });
      return navigate('/');
    }
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
            value={login.email}
            onChange={(e) => {
              const email = e.target.value;
              setError(null);
              setLogin({ ...login, email });
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
            value={login.password}
            onChange={(e) => {
              const password = e.target.value;
              setError(null);
              setLogin({ ...login, password });
            }}
            required
          />
        </div>
        {error && (
          <p className="text-red-500 font-bold text-center bg-red-200 w-full p-1 mb-4">
            {error.msg}
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

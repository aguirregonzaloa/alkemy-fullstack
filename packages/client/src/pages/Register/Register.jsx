import * as React from 'react';
import { registerUser } from '../../shared/api/auth';

const Register = () => {
  const [newUser, setNewUser] = React.useState({
    username: '',
    email: '',
    password: '',
    confpass: '',
  });
  const [msg, setMsg] = React.useState('');
  const [error, setError] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newUser.password !== newUser.confpass) {
      setError('Passwords did not match');
    } else {
      setLoading(true);
      const { data, error, loading } = await registerUser(newUser);
      setMsg(data?.msg);
      setError(error?.msg);
      setLoading(loading);
    }
  };
  return (
    <div className="m-auto w-full pt-4">
      <h2 className="text-center font-bold mb-4">Register: </h2>
      <form onSubmit={handleSubmit} className="w-[650px] m-auto">
        <div className="flex justify-between mb-4">
          <label htmlFor="username" className="w-[30%]">
            Username:
          </label>
          <input
            className="border border-black border-solid rounded w-[70%]"
            type="text"
            name="username"
            value={newUser.username}
            onChange={(e) => {
              const username = e.target.value;
              setError(null);
              setNewUser({ ...newUser, username });
            }}
            required
          />
        </div>
        <div className="flex justify-between mb-4">
          <label htmlFor="email" className="w-[30%]">
            Email:
          </label>
          <input
            className="border border-black border-solid rounded w-[70%]"
            type="text"
            name="email"
            value={newUser.email}
            onChange={(e) => {
              const email = e.target.value;
              setError(null);
              setNewUser({ ...newUser, email });
            }}
            required
          />
        </div>
        <div className="flex justify-between mb-4">
          <label htmlFor="password" className="w-[30%]">
            Password:
          </label>
          <input
            className="border border-black border-solid rounded w-[70%]"
            type="password"
            name="password"
            value={newUser.password}
            onChange={(e) => {
              const password = e.target.value;
              setError(null);
              setNewUser({ ...newUser, password });
            }}
            required
          />
        </div>
        <div className="flex justify-between mb-4">
          <label htmlFor="password" className="w-[30%]">
            Confirmed Password:
          </label>
          <input
            className="border border-black border-solid rounded w-[70%]"
            type="password"
            name="password"
            value={newUser.confpass}
            onChange={(e) => {
              const confpass = e.target.value;
              setError(null);
              setNewUser({ ...newUser, confpass });
            }}
            required
          />
        </div>
        {error && (
          <div className="bg-red-300 text-red-600 text-center font-bold w-full p-1 mb-4">
            {error}
          </div>
        )}
        <button
          type="submit"
          className={
            loading
              ? 'bg-slate-800 text-neutral-50 font-bold rounded p-3 w-full'
              : 'bg-slate-500 text-neutral-50 font-bold rounded p-3 w-full'
          }
        >
          register
          {loading && <span>...</span>}
        </button>
        {msg && (
          <div className="bg-green-300 text-green-600 font-bold text-center p-1 mt-4">
            {msg}
          </div>
        )}
      </form>
    </div>
  );
};

export default Register;

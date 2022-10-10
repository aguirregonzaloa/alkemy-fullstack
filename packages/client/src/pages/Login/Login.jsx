import React from 'react';

function Login() {
  return (
    <div className="m-auto w-full pt-4">
      <h2 className="font-bold text-center mb-4">Login:</h2>
      <form action="" className="w-[550px] m-auto ">
        <div className="flex justify-between mb-4">
          <label htmlFor="email" className="w-[25%]">
            Email:
          </label>
          <input
            className="w-[75%] border border-black border-solid rounded"
            type="email"
            name="email"
            id="email"
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
            required
          />
        </div>
        <button
          className="bg-slate-400 text-white font-bold rounded p-3 w-full"
          type="submit"
        >
          login
        </button>
      </form>
    </div>
  );
}

export default Login;

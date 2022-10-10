import React from 'react';

const Register = () => {
  return (
    <div className="m-auto w-full pt-4">
      <h2 className="text-center font-bold mb-4">Register: </h2>
      <form action="" className="w-[650px] m-auto">
        <div className="flex justify-between mb-4">
          <label htmlFor="username" className="w-[30%]">
            Username:
          </label>
          <input
            className="border border-black border-solid rounded w-[70%]"
            type="text"
            name="username"
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
            required
          />
        </div>
        <button
          type="submit"
          className=" bg-slate-500 text-neutral-50 font-bold rounded p-3 w-full"
        >
          register
        </button>
      </form>
    </div>
  );
};

export default Register;

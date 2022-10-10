import React from 'react';

const Category = () => {
  return (
    <div className="pt-4">
      <h2 className="text-center font-bold mb-10"> Category: </h2>
      <form action="" className="w-[550px] m-auto">
        <div className="flex items-center gap-2 mb-4">
          <label htmlFor="name">Name: </label>
          <input
            className="border border-black border-solid rounded w-full"
            type="text"
            name="name"
            id="name"
            required
          />
        </div>
        <button className="bg-slate-400 text-white font-bold rounded p-3 w-full">
          New Category
        </button>
      </form>
    </div>
  );
};

export default Category;

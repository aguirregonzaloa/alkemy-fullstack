import React from 'react';

const Balance = () => {
  return (
    <div className="pt-4">
      <h2 className="text-center font-bold mb-10">Balance:</h2>
      <form action="" className="w-[550px] m-auto">
        <div className="flex justify-between items-center mb-4">
          <label htmlFor="description" className="w-[25%]">
            Description:
          </label>
          <input
            className="w-[75%] border border-black border-solid rounded"
            type="text"
            name="description"
            id="description"
            required
          />
        </div>
        <div className="flex  items-center mb-4">
          <label htmlFor="amount" className="w-[25%]">
            Amount:
          </label>
          <input
            className="w-[100px] border border-black border-solid rounded"
            type="number"
            name="amount"
            id="amount"
            required
          />
        </div>
        <div className="flex items-center mb-4">
          <label htmlFor="type" className="w-[25%]">
            Type:
          </label>
          <input
            className="border border-black border-solid rounded"
            type="text"
            name="type"
            id="type"
            required
          />
        </div>
        <div className="flex items-center mb-4">
          <label htmlFor="category" className="w-[25%] ">
            Category:
          </label>
          <input
            className="border border-black border-solid rounded"
            type="text"
            name="category"
            id="category"
            required
          />
        </div>
        <button className="bg-slate-400 text-white font-bold rounded w-full p-3">
          New Balance
        </button>
      </form>
    </div>
  );
};

export default Balance;

import * as React from 'react';
import { getallCategories } from '../../shared/api/categories';

const Balance = () => {
  const [categories, setCategories] = React.useState([]);
  React.useEffect(() => {
    async function getCategories() {
      const { data, error, loading } = await getallCategories();
      setCategories(data);
    }
    getCategories();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <div className="pt-4">
      <h2 className="text-center font-bold mb-10">Balance:</h2>
      <form onSubmit={handleSubmit} className="w-[550px] m-auto">
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
          <select
            name="type"
            id="type"
            className="w-[75%] h-[30px] border border-black border-solid rounded"
          >
            <option value="income">income</option>
            <option value="outcome">outcome</option>
          </select>
        </div>
        <div className="flex items-center mb-6">
          <label htmlFor="category" className="w-[25%] ">
            Category:
          </label>
          <select
            name="categories"
            id="categories"
            className="w-[75%] h-[30px] border border-black border-solid rounded"
          >
            {categories &&
              categories.map((item) => {
                return (
                  <option value={item.id} key={item.id}>
                    {item.name}
                  </option>
                );
              })}
          </select>
        </div>
        <button className="bg-slate-400 text-white font-bold rounded w-full p-3">
          New Balance
        </button>
      </form>
    </div>
  );
};

export default Balance;

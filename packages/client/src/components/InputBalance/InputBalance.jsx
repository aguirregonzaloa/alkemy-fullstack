import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { getallCategories } from '../../shared/api/categories';
import Spinner from '../Spinner/Spinner';

const InputBalance = ({ pushData, edit, balance, children }) => {
  const initBalance = edit
    ? balance
    : {
        description: '',
        amount: 0,
        type: null,
        categoryId: null,
      };
  const [newBalance, setNewBalance] = React.useState(initBalance);

  const [categories, setCategories] = React.useState([]);
  const navegate = useNavigate();

  async function getCategories() {
    const { data, error, loading } = await getallCategories();
    const defaultValue = { id: '', name: '--Choose a option--' };
    setCategories([defaultValue, ...data]);
  }

  React.useEffect(() => {
    getCategories();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    pushData(newBalance);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (edit) navegate('/balance');
    else navegate('/');
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="w-[550px] m-auto">
        <div className="flex justify-between items-center mb-4">
          <label htmlFor="description" className="w-[25%]">
            Description:
          </label>
          <input
            className="w-[75%] border border-black  border-solid rounded 
            required:outline-none required:border-red-500"
            type="text"
            name="description"
            id="description"
            value={newBalance.description}
            onChange={(e) => {
              const description = e.target.value;
              e.target.required = description ? false : true;
              setNewBalance({ ...newBalance, description });
            }}
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
            value={newBalance.amount}
            onChange={(e) => {
              const amount = e.target.value.trim();
              setNewBalance({ ...newBalance, amount });
            }}
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
            value={newBalance.type}
            onChange={(e) => {
              const type = e.target.value;
              setNewBalance({ ...newBalance, type });
            }}
            className="w-[75%] h-[30px] border border-black border-solid rounded"
            required
          >
            <option value="" selected>
              --Choose a option--
            </option>
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
            value={newBalance.categoryId}
            onChange={(e) => {
              const categoryId = e.target.value;
              setNewBalance({ ...newBalance, categoryId });
            }}
            required
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
        <div className="w-full text-center">
          <button
            className={`text-white font-bold rounded p-3 mb-3 mr-4 ${
              children[0] ? 'bg-slate-900' : 'bg-slate-400'
            }`}
          >
            {edit ? (
              <span className="flex gap-2 justify-center items-center">
                Edit Balance{children[0] ? <Spinner /> : ''}
              </span>
            ) : (
              <span className="flex gap-2 justify-center items-center">
                New Balance{children[0] ? <Spinner /> : ''}
              </span>
            )}
          </button>
          <button
            className="bg-slate-400 text-white font-bold rounded p-3 mb-3"
            onClick={handleClick}
          >
            Cancel
          </button>
        </div>
        {children[1]}
        {children[2]}
      </form>
    </div>
  );
};

export default InputBalance;

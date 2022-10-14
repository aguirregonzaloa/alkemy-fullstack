import * as React from 'react';
import { Link } from 'react-router-dom';
import { getallCategories } from '../../shared/api/categories';
import {
  getallBalancesByUser,
  postBalancesByUser,
} from '../../shared/api/balances';

const Balance = () => {
  const [newBalance, setNewBalance] = React.useState({
    description: '',
    amount: 0,
    type: null,
    categoryId: null,
  });
  const [categories, setCategories] = React.useState([]);
  const [balances, setBalances] = React.useState([]);
  const [createBalance, setCreateBalance] = React.useState(null);

  async function getCategories() {
    const { data, error, loading } = await getallCategories();
    const defaultValue = { id: '', name: '--Choose a option--' };
    setCategories([defaultValue, ...data]);
  }
  async function getBalancesUser() {
    const token = localStorage.getItem('Token');
    if (token) {
      const { data, error, loading } = await getallBalancesByUser(token);
      setBalances(data);
    }
  }

  React.useEffect(() => {
    getCategories();
    getBalancesUser();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('Token');
    if (token) {
      const { data, error, loading } = await postBalancesByUser(
        newBalance,
        token
      );
      setCreateBalance(data);
      if (data) {
        getBalancesUser();
      }
    }
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
            value={newBalance.description}
            onChange={(e) => {
              const description = e.target.value.trim();
              setNewBalance({ ...newBalance, description });
            }}
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
        {createBalance && (
          <p className="bg-green-200 text-green-700 text-center mb-4">
            Created a new balance successfully!!!
          </p>
        )}
        <button className="bg-slate-400 text-white font-bold rounded w-full p-3">
          New Balance
        </button>
      </form>

      <div className="mt-10">
        <h2 className="text-center font-bold mb-4">List of Balances:</h2>
        {balances.length > 0 ? (
          <table className="table-fixed m-auto min-w-[960px]">
            <thead className="border border-black border-solid bg-neutral-400">
              <tr>
                <th>Description:</th>
                <th>Amount:</th>
                <th>Type:</th>
                <th>Category:</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="border border-black border-solid">
              {balances &&
                balances.map((item) => {
                  return (
                    <tr className="text-center" key={item.id}>
                      <td>{item.description}</td>
                      <td>{item.amount}</td>
                      <td>{item.type}</td>
                      <td>{item.category?.name || item.categoryId}</td>
                      <td>
                        <Link
                          to={`/balance/${item.id}/edit`}
                          className="w-4 p-1 bg-slate-400 hover:bg-slate-800 text-slate-200 hover:text-white"
                        >
                          Edit
                        </Link>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        ) : (
          <div className="text-center font-bold">User do not have balances</div>
        )}
      </div>
    </div>
  );
};

export default Balance;

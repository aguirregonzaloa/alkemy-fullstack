import * as React from 'react';
import { Link, useParams } from 'react-router-dom';
import { getallCategories } from '../../../shared/api/categories';
import { getaBalance } from '../../../shared/api/balances';

const BalanceEdit = ({ item }) => {
  const [newBalance, setNewBalance] = React.useState({
    description: '',
    amount: 0,
    type: null,
    categoryId: null,
  });
  const [categories, setCategories] = React.useState([]);
  const [editBalance, setEditBalance] = React.useState(null);
  const params = useParams();

  async function getCategories() {
    const { data, error, loading } = await getallCategories();
    const defaultValue = { id: '', name: '--Choose a option--' };
    setCategories([defaultValue, ...data]);
  }

  async function getBalance() {
    const id = params.id;
    const { data, error, loading } = await getaBalance(id);
    console.log(data);

    setNewBalance(data);
  }

  React.useEffect(() => {
    getCategories();
    getBalance();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('Token');
    // if (token) {
    //   const { data, error, loading } = await postBalancesByUser(
    //     newBalance,
    //     token
    //   );
    //   setCreateBalance(data);
    //   if (data) {
    //     getBalancesUser();
    //   }
    // }
  };

  return (
    <div className="pt-4">
      <h2 className="text-center font-bold mb-10">Editing Balance: {item}</h2>
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
        {editBalance && (
          <p className="bg-green-200 text-green-700 text-center mb-4">
            Edited the balance successfully!!!
          </p>
        )}
        <button className="bg-slate-400 text-white font-bold rounded w-full p-3">
          Edit Balance
        </button>
      </form>
    </div>
  );
};

export default BalanceEdit;

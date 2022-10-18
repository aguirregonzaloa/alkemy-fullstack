import * as React from 'react';
import { getallCategories, postCategory } from '../../shared/api/categories';

const Category = () => {
  const [categories, setCategories] = React.useState([]);
  const [category, setCategory] = React.useState({ name: '' });
  const [createCategory, setCreateCategory] = React.useState({
    data: null,
    error: null,
    loading: false,
  });
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');

  async function getCategories() {
    const { data, error, loading } = await getallCategories();
    setCategories(data);
    setError(error);
    setLoading(loading);
  }

  React.useEffect(() => {
    setLoading(true);
    getCategories();
  }, []);

  const handleChange = (e) => {
    const name = e.target.value;
    setCategory({ ...category, name });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCreateCategory({ ...createCategory, loading: true });
    const token = localStorage.getItem('Token');
    const { data, error, loading } = await postCategory(category, token);
    setCreateCategory({ ...createCategory, data, error, loading });
    getCategories();
  };
  return (
    <div className="pt-4">
      <h2 className="text-center font-bold mb-10"> Category: </h2>
      <form onSubmit={handleSubmit} className="w-[550px] m-auto">
        <div className="flex items-center gap-2 mb-4">
          <label htmlFor="name">Name: </label>
          <input
            className="border border-black border-solid rounded w-full"
            type="text"
            name="name"
            id="name"
            value={category.name}
            onChange={handleChange}
            required
          />
        </div>
        {createCategory.data && (
          <p className="text-green-800 bg-green-300 font-bold">
            Created a new Category successfully
          </p>
        )}
        {createCategory.error && (
          <p className="text-red-800 bg-red-300 font-bold">
            Category was not created
          </p>
        )}
        <button
          className={
            createCategory.loading
              ? 'bg-slate-900 text-white font-bold rounded p-3 w-full'
              : 'bg-slate-400 text-white font-bold rounded p-3 w-full'
          }
        >
          New Category
          {createCategory.loading ? <span>...</span> : ''}
        </button>
      </form>
      <div className="w-[550px] m-auto mt-10">
        <h3>List of Categories:</h3>
        {categories &&
          categories.map((item) => {
            return <p key={item.id}>{item.name}</p>;
          })}
      </div>
    </div>
  );
};

export default Category;

import axios from 'axios';

const baseURL = 'api/v1/categories';

export const getallCategories = async () => {
  let data, error;
  let loading = true;
  try {
    const res = await axios.get(baseURL);
    data = await res.data.categories;
    loading = false;
    return { data, error, loading };
  } catch (err) {
    error = err.response.data.error;
    loading = false;
    return { data, error, loading };
  }
};

import api from './axiosConfig';

const baseURL = 'api/v1/categories';

export const getallCategories = async () => {
  let data, error;
  let loading = true;
  try {
    const res = await api.get(baseURL);
    data = await res.data.categories;
  } catch (err) {
    error = err.response.data.error;
  } finally {
    loading = false;
    return { data, error, loading };
  }
};

export const postCategory = async (category, token) => {
  let data, error;
  let loading = true;
  try {
    const res = await api.post(baseURL, category, {
      headers: {
        'x-access-token': `${token}`,
      },
    });
    data = await res.data.category;
  } catch (err) {
    error = err.response.data;
  } finally {
    loading = false;
    return { data, error, loading };
  }
};

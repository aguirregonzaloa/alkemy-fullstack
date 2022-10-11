import axios from 'axios';

const baseURL = 'api/v1/balances';

export const getallBalances = async () => {
  let data, error;
  let loading = true;
  try {
    const res = await axios.get(baseURL);
    data = await res.data.balances;
    loading = false;
    return { data, error, loading };
  } catch (err) {
    error = err.response.data.error;
    loading = false;
    return { data, error, loading };
  }
};

export const postBalances = async (balance) => {
  let data, error;
  let loading = true;
  try {
    const res = await axios.post(baseURL);
    data = await res.data.balances;
    loading = false;
    return { data, error, loading };
  } catch (err) {
    error = err.response.data.error;
    loading = false;
    return { data, error, loading };
  }
};

import axios from 'axios';

const baseURL = 'api/v1/balances';

export const getallBalances = async () => {
  let data, error;
  let loading = true;
  try {
    const res = await axios.get(baseURL);
    data = await res.data.balances;
  } catch (err) {
    error = err.response.data.error;
  } finally {
    loading = false;
    return { data, error, loading };
  }
};

export const postBalances = async (balance) => {
  let data, error;
  let loading = true;
  try {
    const res = await axios.post(baseURL, balance);
    data = await res.data.balance;
  } catch (err) {
    error = err.response.data.error;
  } finally {
    loading = false;
    return { data, error, loading };
  }
};
export const getallBalancesByUser = async (token) => {
  let data, error;
  let loading = true;
  try {
    const res = await axios.get(`${baseURL}/byUser`, {
      headers: {
        'x-access-token': `${token}`,
      },
    });
    data = await res.data.balances;
  } catch (err) {
    error = err.response.data.error;
  } finally {
    loading = false;
    return { data, error, loading };
  }
};

export const postBalancesByUser = async (balance, token) => {
  let data, error;
  let loading = true;
  try {
    const res = await axios.post(`${baseURL}/byUser`, balance, {
      headers: {
        'x-access-token': `${token}`,
      },
    });
    data = await res.data.balance;
  } catch (err) {
    error = err.response.data.error;
  } finally {
    loading = false;
    return { data, error, loading };
  }
};

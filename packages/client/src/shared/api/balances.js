import api from './axiosConfig';

const baseURL = 'api/v1/balances';

export const getallBalances = async () => {
  let data, error;
  let loading = true;
  try {
    const res = await api.get(baseURL);
    data = await res.data.balances;
  } catch (err) {
    error = err.response.data.error;
  } finally {
    loading = false;
    return { data, error, loading };
  }
};

export const getaBalance = async (id) => {
  let data, error;
  let loading = true;
  try {
    const res = await api.get(`${baseURL}/${id}`);
    data = await res.data.balance;
  } catch (err) {
    error = err.response.data.error;
  } finally {
    loading = false;
    return { data, error, loading };
  }
};

export const editBalance = async (id, balance, token) => {
  let data, error;
  let loading = true;
  try {
    const res = await api.put(`${baseURL}/${id}`, balance, {
      headers: {
        'x-access-token': `${token}`,
      },
    });
    data = await res.data.updateBalance;
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
    const res = await api.post(baseURL, balance);
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
    const res = await api.get(`${baseURL}/byUser`, {
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
    const res = await api.post(`${baseURL}/byUser`, balance, {
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

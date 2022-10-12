import axios from 'axios';

const baseURL = 'api/v1/users';

export const getUserData = async (token) => {
  let email,
    error,
    loading = true;
  try {
    const res = await axios.get(`${baseURL}/me`, {
      headers: {
        'x-access-token': `${token}`,
      },
    });
    email = await res.data.email;
  } catch (err) {
    error = err.response.data.error;
  } finally {
    loading = false;
    return { email, error, loading };
  }
};

export const registerUser = async (user) => {
  let data,
    error,
    loading = true;
  try {
    const res = await axios.post(`${baseURL}/register`, user);
    data = await res.data;
  } catch (err) {
    error = err.response.data.error;
  } finally {
    loading = false;
    return { data, error, loading };
  }
};

export const loginUser = async (user) => {
  let token,
    error,
    loading = true;
  try {
    const res = await axios.post(`${baseURL}/login`, user);
    token = await res.data.token;
  } catch (err) {
    error = err.response.data.error;
  } finally {
    loading = false;
    return { token, error, loading };
  }
};

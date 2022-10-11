import axios from 'axios';

const baseURL = 'api/v1/users';

export const getUser = async () => {
  try {
    const res = await axios.get(baseURL);
    const data = await res.data;
    return data;
  } catch (err) {
    return err;
  }
};

export const registerUser = async (user) => {
  try {
    const res = await axios.post(`${baseURL}/register`, user);
    const data = await res.data;
    return data;
  } catch (err) {
    return err;
  }
};

export const loginUser = async (user) => {
  try {
    const res = await axios.post(`${baseURL}/login`, user);
    const data = await res.data;
    console.log(res);
    return data;
  } catch (err) {
    return err;
  }
};

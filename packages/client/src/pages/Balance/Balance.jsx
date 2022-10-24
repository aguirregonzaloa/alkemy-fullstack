import * as React from 'react';
import { Link } from 'react-router-dom';
import {
  getallBalancesByUser,
  postBalancesByUser,
} from '../../shared/api/balances';
import Table from '../../components/Table/Table';
import InputBalance from '../../components/InputBalance/';
import Spinner from '../../components/Spinner/Spinner';

const Balance = () => {
  const [newBalance, setNewBalance] = React.useState({
    description: '',
    amount: 0,
    type: null,
    categoryId: null,
  });

  const [balances, setBalances] = React.useState([]);
  const [loadingBalance, setLoadingBalance] = React.useState(true);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [createBalance, setCreateBalance] = React.useState(null);
  const token = localStorage.getItem('Token');

  async function getBalancesUser() {
    const { data, error, loading } = await getallBalancesByUser(token);
    if (!error) {
      setBalances(data);
    }
    setLoadingBalance(loading);
    setError(error);
  }

  React.useEffect(() => {
    getBalancesUser();
  }, []);

  const pullData = async (newBalance) => {
    setLoading(true);
    const { data, error, loading } = await postBalancesByUser(
      newBalance,
      token
    );
    setCreateBalance(data);
    if (data) {
      getBalancesUser();
    }
    setError(error);
    setLoading(loading);
  };

  return (
    <div className="pt-4">
      <h2 className="text-center font-bold mb-10">Balance:</h2>
      <InputBalance pushData={pullData} edit={false}>
        {loading && (
          <div className="bg-sky-200 text-sky-700 font-bold text-center  m-auto">
            The Balance is updating....
          </div>
        )}
        {createBalance && (
          <div className="bg-green-200 text-green-700 font-bold text-center">
            Created a new Balance Successfully!!!
          </div>
        )}
        {error && (
          <div className="bg-red-200 text-red-700 font-bold text-center m-auto">
            {error.msg}
          </div>
        )}
      </InputBalance>

      <div className="mt-10">
        <h2 className="text-center font-bold mb-4">List of Balances:</h2>
        {loadingBalance ? (
          <div className="bg-sky-200 text-sky-700 font-bold  w-[320px] m-auto text-center flex gap-2 justify-center items-center">
            Loading {<Spinner />}
          </div>
        ) : (
          <Table balances={balances} user={true} />
        )}
      </div>
    </div>
  );
};

export default Balance;

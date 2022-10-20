import * as React from 'react';
import { Link } from 'react-router-dom';
import {
  getallBalancesByUser,
  postBalancesByUser,
} from '../../shared/api/balances';
import Table from '../../components/Table/Table';
import InputBalance from '../../components/InputBalance/';

const Balance = () => {
  const [newBalance, setNewBalance] = React.useState({
    description: '',
    amount: 0,
    type: null,
    categoryId: null,
  });

  const [balances, setBalances] = React.useState([]);
  const [createBalance, setCreateBalance] = React.useState(null);

  async function getBalancesUser() {
    const token = localStorage.getItem('Token');
    if (token) {
      const { data, error, loading } = await getallBalancesByUser(token);
      setBalances(data);
    }
  }

  React.useEffect(() => {
    getBalancesUser();
  }, []);

  const pullData = async (newBalance) => {
    const token = localStorage.getItem('Token');
    if (token) {
      const { data, error, loading } = await postBalancesByUser(
        newBalance,
        token
      );
      setCreateBalance(data);
      if (data) {
        getBalancesUser();
      }
    }
  };

  return (
    <div className="pt-4">
      <h2 className="text-center font-bold mb-10">Balance:</h2>
      <InputBalance pushData={pullData} edit={false} />
      {createBalance && (
        <div className="bg-green-200 text-green-700 font-bold text-center">
          Created a new Balance Successfully!!!
        </div>
      )}

      <div className="mt-10">
        <h2 className="text-center font-bold mb-4">List of Balances:</h2>

        {balances && balances.length > 0 ? (
          <Table balances={balances} user={true} />
        ) : (
          <p className="bg-red-200 text-red-600 font-bold  w-[320px] m-auto text-center">
            User do not have balances yet
          </p>
        )}
      </div>
    </div>
  );
};

export default Balance;

import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { editBalance } from '../../../shared/api/balances';

import InputBalance from '../../../components/InputBalance/';

const BalanceEdit = () => {
  const [edit, setEdit] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const location = useLocation();
  const item = location.state?.item;
  const navegate = useNavigate();

  const pullData = async (editData) => {
    setLoading(true);
    const token = localStorage.getItem('Token');
    const { data, error, loading } = await editBalance(
      editData.id,
      editData,
      token
    );
    setEdit(data);
    setError(error);
    setLoading(loading);
  };

  if (edit) {
    setTimeout(() => {
      navegate('/balance');
    }, 1000);
  }

  return (
    <div className="pt-4">
      <div className="text-center font-bold mb-10">
        <h2>Editing Balance:</h2>
        <h3>{item?.description}</h3>
      </div>
      <InputBalance pushData={pullData} edit={true} balance={item}>
        {loading && (
          <div className="bg-sky-200 text-sky-700 font-bold text-center  m-auto">
            The Balance is updating....
          </div>
        )}
        {edit && (
          <div className="bg-green-200 text-green-700 font-bold text-center  m-auto">
            The Balance was edited Successfully!!!
          </div>
        )}
        {error && (
          <div className="bg-red-200 text-red-700 font-bold text-center m-auto">
            {error.msg}
          </div>
        )}
      </InputBalance>
    </div>
  );
};

export default BalanceEdit;

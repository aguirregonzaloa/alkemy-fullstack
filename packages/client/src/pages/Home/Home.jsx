import * as React from 'react';
import axios from 'axios';
import { getallBalances } from '../../shared/api/balances';
import Table from '../../components/Table/Table';

function Home() {
  const [balances, setBalances] = React.useState([]);
  const [errors, setError] = React.useState(undefined);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function getBalances() {
      const { data, error, loading } = await getallBalances();
      setBalances(data);
      setError(error);
      setLoading(loading);
    }
    getBalances();
  }, []);

  if (loading)
    return <div className="h-full grid place-content-center">Loading....</div>;

  if (errors)
    return (
      <div className="h-full grid place-content-center">
        <h2 className=" text-red-600 font-bold">{errors.msg}</h2>
      </div>
    );

  return (
    <div className="pt-4">
      <h2 className="text-center font-bold mb-10">Balance of the company: </h2>

      {balances && <Table balances={balances} user={false} />}
    </div>
  );
}

export default Home;

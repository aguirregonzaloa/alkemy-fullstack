import * as React from 'react';
import axios from 'axios';
import { getallBalances } from '../../shared/api/balances';

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

      <table class="table-fixed m-auto w-full">
        <thead className="border border-black border-solid bg-neutral-400">
          <tr>
            <th>Description:</th>
            <th>Amount:</th>
            <th>Type:</th>
            <th>Category:</th>
            <th>Username:</th>
          </tr>
        </thead>
        <tbody className="border border-black border-solid">
          {balances &&
            balances.map((item) => {
              return (
                <tr className="text-center">
                  <td>{item.description}</td>
                  <td>{item.amount}</td>
                  <td>{item.type}</td>
                  <td>{item.categoryId}</td>
                  <td>{item.userId}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default Home;

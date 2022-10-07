import * as React from 'react';
import axios from 'axios';

function Home() {
  const [balances, setBalances] = React.useState([]);
  React.useEffect(() => {
    axios.get('/api/v1/balances').then((response) => {
      setBalances(response.data.balances);
    });
  }, []);
  return (
    <div>
      <h2>Balance of the company: </h2>

      {JSON.stringify(balances)}
      {balances && (
        <ul className="list-none">
          {balances.map((item) => {
            return <li key={item.id}>{item.description}</li>;
          })}
        </ul>
      )}
    </div>
  );
}

export default Home;

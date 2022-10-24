import React from 'react';
import { Link } from 'react-router-dom';

function Table({ balances, user }) {
  if (balances.length === 0)
    return user ? (
      <p className="bg-red-200 text-red-600 font-bold  w-[320px] m-auto text-center">
        User do not have balances yet
      </p>
    ) : (
      <p className="bg-red-200 text-red-600 font-bold  w-[320px] m-auto text-center">
        There is not any balance yet
      </p>
    );

  return (
    <div>
      <table className="table-fixed m-auto min-w-[960px]">
        <thead className="border border-black border-solid bg-neutral-400">
          <tr>
            <th>Description:</th>
            <th>Amount:</th>
            <th>Type:</th>
            <th>Category:</th>
            <th>{user ? '' : 'Username:'}</th>
          </tr>
        </thead>
        <tbody className="border border-black border-solid">
          {balances &&
            balances.map((item) => {
              return (
                <tr className="text-center" key={item.id}>
                  <td>{item.description}</td>
                  <td>{item.amount}</td>
                  <td>{item.type}</td>
                  <td>{item.category?.name || item.categoryId}</td>
                  {
                    //Show balances by user and allow it editing each
                    user ? (
                      <td>
                        <Link
                          to={`/balance/${item.id}/edit`}
                          state={{ item }}
                          className="w-4 p-1 bg-slate-400 hover:bg-slate-800 text-slate-200 hover:text-white"
                        >
                          Edit
                        </Link>
                      </td>
                    ) : (
                      //Show balances in general
                      <td>{item.user?.username || item.userId}</td>
                    )
                  }
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;

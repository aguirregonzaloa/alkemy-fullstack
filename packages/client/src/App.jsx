import { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    axios.get('/api/v1/users').then((data) => setUser(data.data));
  }, []);

  return (
    <div className="App">
      <h1>Testing connection with the server</h1>
      <p>{JSON.stringify(user.data)}</p>
    </div>
  );
}

export default App;

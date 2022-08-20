import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    const loadUsers = async () => {
      const response = await axios.get()
      console.log(response.data);
      setUsers(response.data.data)
    }
    loadUsers()
  }, [])

  return (
    <div className="App">
      <input type="text" />
    </div>
  );
}

export default App;

import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([])
  const [text, setText] = useState("")
  const [suggestions, setSuggestions] = useState([])
  useEffect(() => {
    const loadUsers = async () => {
      const response = await axios.get('https://reqres.in/api/users?page=2')
      setUsers(response.data.data)
    }
    loadUsers()
  }, [])

  const onChangeHandler = (text) => {
    let matches = []
    if (text.length > 0) {
      matches = users.filter(user => {
        const regex = new RegExp(`${text}`, "gi");
        return user.email.match(regex)
      })
    }
    console.log(matches);
    setSuggestions(matches)
    setText(text)
  }

  return (
    <div className="App">
      <input type="text" onChange={ e => onChangeHandler(e.target.value) } value={ text } />
    </div>
  );
}

export default App;

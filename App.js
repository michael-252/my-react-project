
import './App.css';
import React, { useEfect, useState} from 'react';
import componentList from './componentList';

const App = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEfect(() => {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(res => {
        if(!res.ok)
        throw new Error('fetching of data failed');
        return res.json();
        
  }
)
.then( data => {
  setData(data);
  setLoading(false);
})
.catch(err => {
  setError(err.message);
  setLoading(false);
}); 
},[])
if (loading) return <p>Loading...</p>
if (error) return <p>Error: {error} </p>

  return (
    <div className="App">
      <h1>User List</h1>
      <componentList items={data} renderItem={(user) => (
        <li key={user.id}>{user.name}-{user.email} </li>
      
      )
     }
     />
     </div>
  );
};

export default App;

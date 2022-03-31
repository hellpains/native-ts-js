import React from 'react';
import './App.css';

function App() {
    const names=['rus','arb','iba','adam','lan']
    const users=[{id:1,name:"Rus"},{id:2,name:'arb'}, {id:3,name:'iba'},{id:4,name:'adam'},{id:5,name:'lan'}]
    // const leElement=names.map(n=> <li>{n}</li>)
    const usersLi=users.map(u=> <li key={u.id}>{u.id}--{u.name}</li>)

  return (
    <div className="App">
      <ul>
          {usersLi}
      </ul>
    </div>
  );
}

export default App;

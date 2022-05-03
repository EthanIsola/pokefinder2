import PokePage from './components/PokePage';
import NavBar from './components/NavBar';
import Login from './components/Login';

import {useEffect, useState} from 'react'
import { Route, Switch } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) =>r.json()).then((r) => {
      console.log(r)
      if (r !== undefined && r!== null) {
        setUser(r.id)
      }
    });
  }, []);
  
  return (
    <div className="App">
      <div>
        <h1 className='title'>Pokefinder</h1>
        <NavBar/>
      </div>
        <Switch>
          <Route path = "/login">
            <Login setUser={setUser} user={user}/>
          </Route>
          <Route path = "/">
            <PokePage />
          </Route>
        </Switch>
    </div>
  );
}


export default App;

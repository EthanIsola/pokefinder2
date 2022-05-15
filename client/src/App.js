import PokePage from './components/PokePage';
import NavBar from './components/NavBar';
import Login from './components/Login';

import {useEffect, useState} from 'react'
import { Route, Switch } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null)
  const [displayName, setDisplayName] = useState(null)
  const [favs, setFavs] = useState(null)

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) =>r.json()).then((r) => {
      if (r !== undefined && r!== null) {
        setUser(r.id)
        setDisplayName(r.username)
      }
    });
  }, []);

  useEffect(()=>{
    if(user!==null && user!==undefined)
    {
    fetch(`/favs?id=${user}`)
    .then(r=>r.json())
    .then(data=>setFavs(data))
    }
  },[user])
  
  return (
    <div className="App">
      <div>
        <h1 className='title'>Pokefinder</h1>
        <NavBar/>
      </div>
        <Switch>
          <Route path = "/login">
            <Login setUser={setUser} user={user} displayName={displayName} setDisplayName={setDisplayName}/>
          </Route>
          <Route path = "/">
            <PokePage favs={favs} user={user} setFavs={setFavs}/>
          </Route>
        </Switch>
    </div>
  );
}


export default App;

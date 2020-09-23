import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import Login  from './components/login/Login';
import UserLogin from './components/userlogin/UserLogin';
import UseLocalStorage from './hooks/useLocalStorage';

function App() {
 const [id, setId] = UseLocalStorage('id')
 //const [name, setName] = useLocalStorage('name')

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/todo">
            <Dashboard  id={id} />
          </Route>

          <Route path="/">
            <>
            {id ? <UserLogin id={id} /> : <Login  onIdSubmit={setId}/>}
            </>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import React from 'react';
import Accueil from './components/Accueil';
import Profil from './components/Profil'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Inscription from './components/Inscription';
import Authentification from './components/Authentification';
import NewProfile from './components/NewProfile';
import Board from './components/Board';
import Articles from './components/Articles';

function App() {
  return (
    <div>
      <Router>
        <Switch>
        <Route exact path="/" component={Accueil} />
          <Route path="/profil" component={Profil} />
          <Route path="/inscription" component={Inscription} />
          <Route path="/authentification" component={Authentification} />
          <Route path="/newprofile" component={NewProfile} />
          <Route path="/board" component={Board} />
          <Route path="/articles" component={Articles} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Home from './pages/home/Home';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import Playlists from './pages/playlists/Playlists';
import LandingPage from './pages/landingPage/LandingPage';
import Layout from './layout/layout/Layout';
import SearchDataComp from './components/SearchDataComp';
import SelectDataComp from './components/SelectDataComp';
import NoMatch from './NoMatch';

const LoginRoute = ({ ...props }) => {
  if (localStorage.getItem('token')) {
    return <Route {...props} />
  } else {
    return <Redirect to='/' />

  }
}

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Layout(LandingPage)} />
          <LoginRoute path="/home" component={Layout(Home)} />
          <LoginRoute path="/create-playlist" component={Layout(Playlists)} />
          <LoginRoute path="/search" component={Layout(SearchDataComp)} />
          <LoginRoute path="/lagu-selected" component={Layout(SelectDataComp)} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

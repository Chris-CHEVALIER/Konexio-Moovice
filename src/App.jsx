import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import "./App.css"

import Home from "./components/Home";
import Popular from './components/Popular';
import Weekly from "./components/Weekly";
import WeeklyBattle from "./components/WeeklyBattle";
import PopularBattle from "./components/PopularBattle";
import Favorites from "./components/Favorites";
import Error404 from "./components/Error404";
import Navbar from './components/Navbar';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/weekly" component={Weekly} />
          <Route path="/weekly-battle" component={WeeklyBattle} />
          <Route path="/popular" component={Popular} />
          <Route path="/popular-battle" component={PopularBattle} />
          <Route path="/favorites" component={Favorites} />
          <Route path="*" component={Error404} />
        </Switch>
      </BrowserRouter>
    )
  }
}

import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';

// components
import Header from "./components/Header/Header"

// pages aka "views"
import Home from "./views/Home/Home"
import NotFound from "./views/NotFound"


const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;

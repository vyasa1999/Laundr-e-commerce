import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

// components
import Header from "./components/Header/Header"

// pages aka "views"
import Home from "./views/Home/Home"
import NotFound from "./views/NotFound"
import ProductOnScroll from "./views/ProductOnScroll/ProductOnScroll"
import HomeFooter from "./views/HomeFooter/HomeFooter";



const App = () => {
    return (
        <div>
            <Header/>
            <Home/>
            <ProductOnScroll/>
            <HomeFooter/>
            {/* {      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/" component={ProductOnScroll}>
          <Redirect to="/Home" />
        </Route>
        <Route component={NotFound}/>
        </Switch>} */}

        {/* <ProductOnScroll/> */}






        </div>
    );
}

export default App;

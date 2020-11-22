import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';


// components
import Header from "./components/Header/Header"
import Products from "./components/Product/Product"

// pages aka "views"
import About from "./views/About/About"
import Cart from "./components/Cart/Cart"
import NotFound from "./views/NotFound"
import ProductOnScroll from "./views/ProductOnScroll/ProductOnScroll"
import ProductOnClick from "./views/ProductOnClick/ProductOnClick"

const App = () => {
    
    return (
        <div className="App">
            <Header/>
            {<Switch>
                <Route exact path="/Home" component={ProductOnScroll} />
                <Route exact path="/product" component={ProductOnClick} />
                <Route exact path="/About" component={About} />
                <Route exact path="/Cart" component={Cart} />
                <Route exact path="/">
                    <Redirect to="/Home" />
                </Route>
                <Route component={NotFound}/>
            </Switch>}
        </div>
    );
}

export default App;
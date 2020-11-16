import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';


// components
import Header from "./components/Header/Header"
import Products from "./components/Product/Product"

// pages aka "views"
import Home from "./views/Home/Home"
import About from "./views/About/About"
import NotFound from "./views/NotFound"
import ProductOnScroll from "./views/ProductOnScroll/ProductOnScroll"

const App = () => {
    
    return (
        <div className="App">
            <Header/>
            {/* <Home/> */}
            <ProductOnScroll/>
            {<Switch>
                <Route exact path="/Home" component={Home} />
                <Route exact path="/About" component={About}/>
                {/* <Redirect to="/Home" /> */}
                <Route exact path="/" component={Products}/>
            </Switch>}
        </div>
    );
}

export default App;
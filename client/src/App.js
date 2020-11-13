import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';


// components
import Header from "./components/Header/Header"

// pages aka "views"
import Home from "./views/Home/Home"
import About from "./views/About/About"
import NotFound from "./views/NotFound"
import ProductOnScroll from "./views/ProductOnScroll/ProductOnScroll"
import HomeFooter from "./views/HomeFooter/HomeFooter";
import ReactPageScroller from "react-page-scroller";

const App = () => {
    
    return (
        <div>
            <Header/>
            {/* <Home/> */}
            <ProductOnScroll/>
            {<Switch>
                <Route exact path="/Home" component={Home} />
                <Route exact path="/About" component={About}/>
                {/* <Redirect to="/Home" /> */}
                <Route component={NotFound}/>
            </Switch>}
        </div>
    );
}

export default App;
import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';


// components
import Header from "./components/Header/Header"
import Products from "./components/Product/Product"

// pages aka "views"
import Home from "./views/Home/Home"
import About from "./views/About/About"
import Cart from "./components/Cart/Cart"
import NotFound from "./views/NotFound"
import ProductOnScroll from "./views/ProductOnScroll/ProductOnScroll"
import ProductOnClick from "./views/ProductOnClick/ProductOnClick"
import FreshAir from "./views/ProductOnClick/FreshAir/FreshAir"
import EucalyptusTeaTree from "./views/ProductOnClick/EucalyptusTeaTree/EucalyptusTeaTree"
import WatermelonCucumber from "./views/ProductOnClick/WatermelonCucumber/WatermelonCucumber"
import MahoganyTeakwood from "./views/ProductOnClick/MahoganyTeakwood/MahoganyTeakwood"
import WhiteGardenia from "./views/ProductOnClick/WhiteGardenia/WhiteGardenia"
import CoffeeVanilla from "./views/ProductOnClick/CoffeeVanilla/CoffeeVanilla"

const App = () => {
    
    return (
        <div className="App">
            <Header/>
            {<Switch>
                <Route exact path="/home" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/products" component={ProductOnScroll} />
                <Route exact path="/login" component={Home}/>
                <Route exact path="/signup" component={Home}/>

                {/* 
                
                giving each product its own *clicked* page
                setting up individual Routes like FreshAir example below
                
                */}
                <Route exact path="/product/lpfa" component={FreshAir} />
                <Route exact path="/product/lpett" component={EucalyptusTeaTree} />
                <Route exact path="/product/lpwc" component={WatermelonCucumber} />
                <Route exact path="/product/lpmt" component={MahoganyTeakwood} />
                <Route exact path="/product/lpwg" component={WhiteGardenia} />
                <Route exact path="/product/lpcv" component={CoffeeVanilla} />
                <Route exact path="/cart" component={Cart} />
                <Route exact path="/">
                    <Redirect to="/home" />
                </Route>
                <Route component={NotFound}/>
            </Switch>}
        </div>
    );
}

export default App;
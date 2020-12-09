import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';


// components
import Header from "./components/Header/Header"

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
import Checkout from "./views/Checkout/Checkout"
import Login from "./views/Login/Login"
import Register from "./views/Register/Register"


const App = () => {
    
    return (
        <div className="App">
            <Header/>
            {<Switch>
                <Route exact path="/home" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/products" component={ProductOnScroll} />
                <Route exact path="/login" component={Login}/>
                <Route exact path="/register" component={Register}/>
                <Route exact path="/checkout" component={Checkout}/>

                {/* 
                
                giving each product its own *clicked* page
                setting up individual Routes like FreshAir example below
                
                */}
                <Route exact path="/product/5fd002b3160ed44708479032" component={FreshAir} />
                <Route exact path="/product/5fd002cb160ed44708479034" component={EucalyptusTeaTree} />
                <Route exact path="/product/5fd0028d160ed4470847902f" component={WatermelonCucumber} />
                <Route exact path="/product/5fd002a8160ed44708479031" component={MahoganyTeakwood} />
                <Route exact path="/product/5fd0029d160ed44708479030" component={WhiteGardenia} />
                <Route exact path="/product/5fd002c2160ed44708479033" component={CoffeeVanilla} />
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
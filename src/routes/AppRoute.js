import React from 'react';
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect 
} from 'react-router-dom';

import MenuScreen from '../components/catalogo/MenuScreen';
import NavBar from '../components/navbar/NavBar';
import SearchScreen from '../components/search/SearchScreen';
import CartScreen from '../components/cart/CartScreen';





const AppRoute = () => {
    return (
        <>
        <Router>
            <NavBar />
            <div>
                <Switch>
                    <Route exact path="/menu" component={ MenuScreen }/>
                    <Route exact path="/search" component={ SearchScreen }/>
                    <Route exact path="/cart" component={ CartScreen }/>
                    <Redirect to="/menu"/>
                </Switch>
            </div>
        </Router>
        </>
    )
}

export default AppRoute;

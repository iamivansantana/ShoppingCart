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
import ArticlesScreen from '../components/articles/ArticlesScreen';
import ScrollToTop from './ScrollToTop';
import ArticlesState from '../context/articlesContext/articlesState';





const AppRoute = () => {
    return (
        <>
        <ArticlesState>
            <Router>
                <NavBar />
                <div>
                    <ScrollToTop />
                    <Switch>
                        <Route exact path="/menu" component={ MenuScreen }/>
                        <Route exact path="/search" component={ SearchScreen }/>
                        <Route exact path="/cart" component={ CartScreen }/>
                        <Route exact path="/sneaker/:sneakerId" component={ ArticlesScreen } />
                        <Redirect to="/menu"/>
                    </Switch>
                </div>
            </Router>
        </ArticlesState>
        </>
    )
}

export default AppRoute;

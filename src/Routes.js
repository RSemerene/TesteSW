import React from 'react'
import {Switch, Route} from 'react-router-dom';

import Home from './pages/Home';
import Add from './pages/Add';
import Dados from './pages/Data';


export default () => {
    return(
    <Switch>
        <Route exact path='/'>
            <Home/>
        </Route>
        <Route exact path='/dados'>
            <Dados/>
        </Route>
        <Route exact path='/add'>
            <Add/>
        </Route>
    </Switch>
    );
}
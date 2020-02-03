import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/index';
import ProjectPage from './pages/Project/index';

export default class App extends React.Component<{},{}>{
    render(){
        return (
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/project/:id' component={ProjectPage} />
            </Switch>
        );
    }
}
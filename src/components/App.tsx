import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';

export default class App extends React.Component<{},{}>{
    render(){
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact={true} component={Home} />
                </Switch>
            </BrowserRouter>
        );
    }
}
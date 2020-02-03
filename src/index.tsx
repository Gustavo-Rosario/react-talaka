import * as React from 'react';
import * as ReactDOM from 'react-dom';
import '../src/styles/style.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("root")
);
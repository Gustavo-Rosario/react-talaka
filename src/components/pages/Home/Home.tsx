import * as React from 'react';
import HeaderPage from '../../Header/Header';
import Menu from '../../Menu/Menu';

export default class Home extends React.Component<{},{}>{
    render(){
        return (
            <div>
                <HeaderPage title="TALAKA - Welcome" />
                <Menu/>
                
            </div>
        );
    }
}
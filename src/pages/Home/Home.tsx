import * as React from 'react';
import HeaderPage from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import Carousel from './Carousel';
import MainProjects from './MainProjects';

export default class Home extends React.Component<{},{}>{
    render(){
        return (
            <div>
                <HeaderPage title="TALAKA - Welcome" />
                <Menu/>
                <Carousel/>
                <MainProjects />
            </div>
        );
    }
}
import * as React from 'react';
import HeaderPage from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import Carousel from './Carousel';
import MainProjects from './MainProjects';
import HowItWorks from './HowItWorks';
import Categories from './Categories';
import Page from '../../components/utils/Page';

export default class Home extends React.Component<{},{}>{
    render(){
        return (
            <Page title="TALAKA - Welcome">
                <Carousel />
                <MainProjects />
                <HowItWorks />
                <Categories />
            </Page>
        );
    }
}
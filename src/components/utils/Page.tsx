import * as React from 'react';
import Footer from '../Footer/Footer';
import HeaderPage from '../Header/Header';
import Menu from '../Menu/Menu';
import { IPropPage } from '../../interface';

export default class Page extends React.Component<IPropPage,{}>{

    constructor(props){
        super(props);
    }

    render(){
        const {title} = this.props;
        return (
            <>
                <HeaderPage title={title} />
                <Menu />

                {/* CONTENT */}
                { this.props.children }
                {/* \CONTENT */}
                
                <Footer />
            </>
        )
    }

}
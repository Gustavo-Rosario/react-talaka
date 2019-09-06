import * as React from 'react';
import { IPropHeader } from 'src/interface';
import { Helmet } from 'react-helmet';


export default class HeaderPage extends React.Component<IPropHeader,{}>{

    render(){
        const { title } = this.props;
        return (
            <div>
                <Helmet>
                    <title>{ title }</title>
                </Helmet>
            </div>
        );
    }


}
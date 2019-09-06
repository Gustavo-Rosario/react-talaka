import * as React from 'react';
import { Link } from 'react-router-dom';
import { IPropItemList } from 'src/interface';

export default class ItemList extends React.Component<IPropItemList,{}>{
    
    render(){
        const { label, link, external } = this.props;
        return link ?
                    external ?
                        (<li>
                            <a href={link}>{label}</a>
                        </li>)
                    : 
                        (<li>
                            <Link to={link}>{label}</Link>
                        </li>)
                :
                    (<li>
                        {label}
                    </li>);
    }

}
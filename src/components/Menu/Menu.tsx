import * as React from 'react'
import { IPropItemList } from '../../interface';
import ItemList from '../utils/ItemList';
import * as ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';


export default class Menu extends React.Component<{},{}> {
  
    
    MENU_ITEMS = [
        { label: 'Explorar', link: '/explore'},
        { label: 'Começar uma campanha', link: '/criar-campanha'}
    ];

    buildMenu(){
        return this.MENU_ITEMS.map( (itemProp: IPropItemList, i:number)=>{
            return <ItemList key={i} label={itemProp.label} link={itemProp.link} external={itemProp.external} ></ItemList>
        });
    }
  
    render() {
        return (
            <div>
                <nav>
                    <div className="wrapper">
                        <div className="siteNav-left">
                            <ul>
                                { this.buildMenu() }
                            </ul>
                        </div>

                        <Link to="/" className="siteNav-middle">
                            <h1>Talaka</h1>
                        </Link>

                        <div className="siteNav-right">
                            
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

import * as React from 'react'
import { IPropItemList } from '../../interface';
import ItemList from '../utils/ItemList';
import * as ReactDOM from 'react-dom';


export default class Menu extends React.Component<{},{}> {
  
    
    MENU_ITEMS = [
        { label: 'Explorar', link: '/explore'},
        { label: 'Começar uma campanha', link: '/criar-campanha'}
    ];

    buildMenu(){
        return this.MENU_ITEMS.map( (itemProp: IPropItemList)=>{
            return <ItemList label={itemProp.label} link={itemProp.link} external={itemProp.external} ></ItemList>
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

                        <div className="siteNav-middle">
                            <h1 >talaka</h1>
                        </div>

                        <div className="siteNav-right">
                            
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

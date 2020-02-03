import * as React from 'react';
import { IPropImage } from '../../interface';

export default class Image extends React.Component<IPropImage,{}>{
    
    render(){
        const { path, alt, description, className, imgClass, id } = this.props;
        return (<figure className={className} id={id}>
                    <img src={path} alt={alt || ''} className={imgClass}></img>
                    <figcaption>{description || ''}</figcaption>
                </figure>
        );
    }

}
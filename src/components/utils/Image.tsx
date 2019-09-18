import * as React from 'react';
import { IPropImage } from '../../interface';

export default class Image extends React.Component<IPropImage,{}>{
    
    render(){
        const { path, alt, description, className, imgClass } = this.props;
        return (<figure className={className}>
                    <img src={path} alt={alt || ''} className={imgClass}></img>
                    <figcaption>{description || ''}</figcaption>
                </figure>
        );
    }

}
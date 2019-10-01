import * as React from 'react';
import { IPropProgressRing } from '../../interface';

export default class ProgressRing extends React.Component<IPropProgressRing, any> {

    styleText = {
        fontFamily : "Verdana, sans-serif",
        fontSize  : 20,
        fill     : "white",
        fontWeight : 600
    }

    constructor(props) {
        super(props);

        const { radius, stroke } = this.props;

        const normalizedRadius = radius - stroke * 2,
              circumference = normalizedRadius * 2 * Math.PI;
        this.state = {
            normalizedRadius: normalizedRadius,
            circumference: circumference,
        }
    }

    render() {
        const { radius, stroke, progress, color="white", inline=false } = this.props;
        const { circumference, normalizedRadius } = this.state;
        const strokeDashoffset = circumference - progress / 100 * circumference;
      
        return (
            <div className={`ring ${inline ? 'inline' : 'block'}`}>

                <svg
                    height={radius * 2}
                    width={radius * 2}
                    >
                    <circle
                        stroke={"#9E9E9E"}
                        fill="transparent"
                        strokeWidth={ stroke }
                        strokeDasharray={ circumference + ' ' + circumference }
                        style={ { strokeDashoffset:  1} }
                        r={ normalizedRadius }
                        cx={ radius }
                        cy={ radius }
                    />
                    <circle
                        stroke={color}
                        fill="transparent"
                        strokeWidth={ stroke }
                        strokeDasharray={ circumference + ' ' + circumference }
                        style={ { strokeDashoffset, filter: "url(#dropshadow)" } }
                        r={ normalizedRadius }
                        cx={ radius }
                        cy={ radius }
                    />
                    <text x="35%" y="55%" style={this.styleText}> { (Math.floor(progress)).toString().padStart(2,"0") } %</text>
                </svg>
            </div>
        );
      }
}
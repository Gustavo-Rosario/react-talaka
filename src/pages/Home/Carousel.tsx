import * as React from 'react';
import ItemList from '../../components/utils/ItemList';
import { Project } from '../../../models/Project';
import Image from '../../components/utils/Image';
import { IStateCarousel } from '../../interface';
import ProgressCircle from '../../components/utils/ProgressRing';
import ProgressRing from '../../components/utils/ProgressRing';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { relative } from 'path';
import ProjectFactory from '../../services/ProjectFactory';
import { Link } from 'react-router-dom';

export default class Carousel extends React.Component<{},IStateCarousel>{

    MILISECONDS_TIMER = 5000;

    constructor(props){
        super(props);
        this.state = {projects: [],actualCarousel :0};
    }


    async componentDidMount(){
        let intervalId = global.setInterval(this.spinCarousel, this.MILISECONDS_TIMER);
        const projects: Array<Project> = await ProjectFactory.getProjectsCarousel();
        // store intervalId in the state so it can be accessed later:
        this.setState({spinCarouselInterval: intervalId, projects});
    }
     
    componentWillUnmount(){
        // use intervalId from the state to clear the interval
        clearInterval(this.state.spinCarouselInterval);
    }


    spinCarousel = ()=>{
        //V1
        const { actualCarousel, projects } = this.state;
        const newCarousel : number = actualCarousel >= (projects.length -1)
            ? 0
            : actualCarousel + 1;

        this.setState({actualCarousel: newCarousel});
    }

    buildProjectCarousel(){
        const { actualCarousel, projects } = this.state;

        return projects.map((crsl:Project, i:number)=>{

            const aux = ((crsl.bag.collected) * 100) / crsl.bag.meta;
            const percent = ( aux > 100 )? 100 : aux ;

            return (
                <div key={i} className={ `eachCarousel carOff ${i == actualCarousel ? 'actual' :  ''}` }>
                    {/* BACKGROUND */}
                    <Image className="eachCarouselCover" path={crsl.image.background}/>
                    <div className="wrapper">
                        <div className="carouselLeft">
                            <Image className="headerProjectCover" path={crsl.image.main}/>
                            {/*<Link to={`/project/${crsl.id}`}> <i className="fa fa-heart-o" aria-hidden="true"></i> Conheça o projeto </Link> */}
                        </div>
                        <div className="carouselRight">
                            <h1>{crsl.title}</h1>

                            <div className="projectInfos">
                                <ProgressRing
                                    radius={ 55 }
                                    stroke={ 5 }
                                    progress={ percent }
                                    color="#2FD0A8"
                                    inline={true}
                                />
                                <div className="projectDescription">
                                    <p>
                                        {crsl.description}
                                    </p>
                                </div>
                            </div>

                            <div className="authors">
                                <h2>Autores</h2>
                                <ul>
                                    <a href="/perfil">
                                        <li data-title={crsl.creator.name} >
                                            <Image className="autorImg" path={crsl.creator.image.profile} />
                                            <FontAwesomeIcon icon={faStar} style={{ color: "yellow", fontSize: 20, position: "absolute", right: 0 }} />
                                        </li>
                                    </a>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            );
        })
    } 

    buildControls = ()=>{
        const { actualCarousel, projects } = this.state; 
        return projects.map((crsl:Project, i:number)=>{
            return <li 
                        key={i}
                        className={`positionControl ${ actualCarousel == i ? 'selected' : ''}` }
                        onClick={()=>this.selectItem(i)}
                    />
        })
    }

    selectItem: any = (index:number) => {
        clearInterval(this.state.spinCarouselInterval);
        this.setState({actualCarousel: index});
        let intervalId = global.setInterval(this.spinCarousel, this.MILISECONDS_TIMER);
        // store intervalId in the state so it can be accessed later:
        this.setState({spinCarouselInterval: intervalId});
        // not gonna work
        document.querySelector("#carouselTimer #progressControl").classList.remove("animationProgress");
        global.setTimeout(()=>{
            document.querySelector("#carouselTimer #progressControl").classList.add("animationProgress");
        },1);
    }

    render(){
        return(
            <>
                <div id="carousel">
                    <div id="carouselWrapper">
                        
                        { this.buildProjectCarousel() }

                    </div>
                    {/* CONTROLS */}
                    <div id="carouselPosition">
                        <ul>
                            { this.buildControls() }
                        </ul>
                    </div>
                    {/* TIMER */}

                    <div id="carouselTimer">
                        <div id="progressControl" className="progress animationProgress"></div>
                    </div>
                </div>
            </>
        );
    }

}

{/* <div className="eachCarousel carOff" id="helloWrapper"> 
                            <div className="wrapper">
                                <div id="logo"></div>
                                <p>Conheça a plataforma de financiamento coletivo de quadrinhos nacionais</p>
                                <ul>
                                    <ItemList key={1} label="Criar campanha" link="/criar-campanha" />
                                    <ItemList key={2} label="O que é financiamento coletivo?" link="#howItWorks" external={true} />
                                </ul>
                            </div>
                        </div>*/}
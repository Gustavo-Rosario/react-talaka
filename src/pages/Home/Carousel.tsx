import * as React from 'react';
import ItemList from '../../components/utils/ItemList';
import { Project } from '../../../models/Project';
import Image from '../../components/utils/Image';
import { IStateCarousel } from '../../interface';
import ProgressCircle from '../../components/utils/ProgressRing';
import ProgressRing from '../../components/utils/ProgressRing';

export default class Carousel extends React.Component<{},IStateCarousel>{
  
    
    PROJECT_CAROUSEL: Array<Project> = [
        {
            title: 'Saintia Shô',
            description: `Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Fusce non nunc nunc. Cras fringilla
                rhoncus ultrices. Proin convallis arcu sollicitudin,
                pretium arcu eget, venenatis diam. Mauris molestie vel
                elit ac lobortis. Donec ullamcorper velit a sapien 
                accumsan, at condimentum tortor cursus.`,
            image: {
                background: 'http://localhost:8080/public/projects/saintiaSho/bg.jpg',
                main: 'http://localhost:8080/public/projects/saintiaSho/main.jpg'
            },
            creator: {
                name: 'Stephany Tenório',
                username: 'terezasublime',
                image: {
                    profile: 'http://localhost:8080/public/users/gus.jpeg'
                }
            },
            bag: {
                meta: 3000.00,
                collected: 730.00
            }
        },
        {
            title: 'Dragon Ball Super',
            description: `Nam ultrices pretium purus, quis convallis 
                ligula suscipit ac. Pellentesque vehicula nulla sit 
                amet tincidunt blandit. Integer scelerisque eros a 
                quam convallis faucibus. Integer rutrum nunc est. 
                Praesent sed sapien sed dui ultrices tempor. Aliquam 
                malesuada ultrices elit non dapibus. Praesent lacus 
                elit, congue sit amet sodales vel, viverra vel lectus.`,
            image: {
                background: 'http://localhost:8080/public/projects/dragonBall/bg.jpg',
                main: 'http://localhost:8080/public/projects/dragonBall/main.jpg'
            },
            creator: {
                name: 'Gustavo Rosário',
                username: 'gmastersupreme',
                image: {
                    profile: 'http://localhost:8080/public/users/gus.jpeg'
                }
            },
            bag: {
                meta: 2000.00,
                collected: 1500.00
            }
        },
        {
            title: 'Boku no Hero',
            description: `Nam ultrices pretium purus, quis convallis 
                ligula suscipit ac. Pellentesque vehicula nulla sit 
                amet tincidunt blandit. Integer scelerisque eros a 
                quam convallis faucibus. Integer rutrum nunc est. 
                Praesent sed sapien sed dui ultrices tempor. Aliquam 
                malesuada ultrices elit non dapibus. Praesent lacus 
                elit, congue sit amet sodales vel, viverra vel lectus.`,
            image: {
                background: 'http://localhost:8080/public/projects/bokuNoHero/bg.jpg',
                main: 'http://localhost:8080/public/projects/bokuNoHero/main.jpg'
            },
            creator: {
                name: 'Gustavo Rosário',
                username: 'gmastersupreme',
                image: {
                    profile: 'http://localhost:8080/public/users/gus.jpeg'
                }
            },
            bag: {
                meta: 2000.00,
                collected: 500.00
            }
        }
    ];

    MILISECONDS_TIMER = 5000;

    constructor(props){
        super(props);
        this.state = {actualCarousel :0};
    }


    componentDidMount(){
        let intervalId = global.setInterval(this.spinCarousel, this.MILISECONDS_TIMER);
        // store intervalId in the state so it can be accessed later:
        this.setState({spinCarouselInterval: intervalId});
    }
     
    componentWillUnmount(){
        // use intervalId from the state to clear the interval
        clearInterval(this.state.spinCarouselInterval);
    }


    spinCarousel = ()=>{
        //V1
        const { actualCarousel } = this.state;
        const newCarousel : number = actualCarousel >= (this.PROJECT_CAROUSEL.length -1)
            ? 0
            : actualCarousel + 1;

        this.setState({actualCarousel: newCarousel});
    }

    buildProjectCarousel(){
        const { actualCarousel } = this.state;

        return this.PROJECT_CAROUSEL.map((crsl:Project, i:number)=>{

            const aux = ((crsl.bag.collected) * 100) / crsl.bag.meta;
            const percent = ( aux > 100 )? 100 : aux ;

            return (
                <div key={i} className={ `eachCarousel carOff ${i == actualCarousel ? 'actual' :  ''}` }>
                    {/* BACKGROUND */}
                    <Image className="eachCarouselCover" path={crsl.image.background}/>
                    <div className="wrapper">
                        <div className="carouselLeft">
                            <Image className="headerProjectCover" path={crsl.image.main}/>
                            {/* <a href=""> <i className="fa fa-heart-o" aria-hidden="true"></i> Conheça o projeto </a> */}
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
                                <h2> Autores</h2>
                                <ul>
                                    <a href="/perfil/<?= $crsl->creator->username;?>">
                                        <li data-title={crsl.creator.name} >
                                            <Image path={crsl.creator.image.profile} />
                                            <i className="fa fa-star" aria-hidden="true"></i>
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
        const { actualCarousel } = this.state; 
        return this.PROJECT_CAROUSEL.map((crsl:Project, i:number)=>{
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
                        <div id="progress"></div>
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
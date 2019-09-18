import * as React from 'react';
import ItemList from '../../components/utils/ItemList';
import { Project } from '../../../models/Project';
import Image from '../../components/utils/Image';

export default class Carousel extends React.Component<{},{}>{
  
    
    PROJECT_CAROUSEL: [Project] = [
        {
            title: 'Dragon Ball Super',
            description: `Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Fusce non nunc nunc. Cras fringilla
                rhoncus ultrices. Proin convallis arcu sollicitudin,
                pretium arcu eget, venenatis diam. Mauris molestie vel
                elit ac lobortis. Donec ullamcorper velit a sapien 
                accumsan, at condimentum tortor cursus. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit.`,
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
                collected: 500.00
            }
        }
    ];


    buildProjectCarousel(){
        
        return this.PROJECT_CAROUSEL.map((crsl:Project, i:number)=>{
            return (
                <div key={i} className="eachCarousel carOff atual">
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
                                <div className="projectGoal">                              
                                </div>
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

    render(){
        return(
            <>
                <div id="carousel">
                    <div id="carouselWrapper">

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
                        
                        { this.buildProjectCarousel() }

                        
                    </div>
                <div id="carouselPosition">
                    <ul>
                        <li key={1} className="selected"></li>
                        <li key={2}></li>
                    </ul>
                </div>
                <div id="carouselTimer">
                    <div id="progress"></div>
                </div>
            </div>
        </>
        );
    }

}
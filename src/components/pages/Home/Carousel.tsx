import * as React from 'react';
import ItemList from '../../utils/ItemList';

export default class Carousel extends React.Component<{},{}>{
  
    buildProjectCarousel(){
        
        this.PROJECT_CAROUSEL.map((crsl)=>{
            return (
            <div className="eachCarousel carOff">
                {/* BACKGROUND */}
                <div className="eachCarouselCover"></div>
                <div className="wrapper">
                    <div className="carouselLeft">
                        <div className="headerProjectCover"></div>
                        {/* <a href=""> <i className="fa fa-heart-o" aria-hidden="true"></i> Conheça o projeto </a> */}
                    </div>
                    <div className="carouselRight">
                        <h1>{crsl.title}</h1>

                        <div className="projectInfos">
                            <div className="projectGoal">                              
                            </div>
                            <div className="projectDescription">
                                <p>
                                    {crsl.ds}
                                </p>
                            </div>
                        </div>

                        <div className="authors">
                            <h2> Autores</h2>
                            <ul>
                                <a href="/perfil/<?= $crsl->creator->username;?>">
                                    <li data-title="<?= $crsl->creator->name; ?>" >
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
                        <div className="eachCarousel carOff atual" id="helloWrapper">
                            <div className="wrapper">
                                <div id="logo"></div>
                                <p>Conheça a plataforma de financiamento coletivo de quadrinhos nacionais</p>
                                <ul>
                                    <ItemList label="Criar campanha" link="/criar-campanha" />
                                    <ItemList label="O que é financiamento coletivo?" link="#howItWorks" external={true} />
                                </ul>
                            </div>
                        </div>
                        

                        
                    </div>
                <div id="carouselPosition">
                    <ul>
                        <li className="selected"></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
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
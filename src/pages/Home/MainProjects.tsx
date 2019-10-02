import * as React from 'react';
import ItemList from '../../components/utils/ItemList';
import { Project } from '../../../models/Project';
import Image from '../../components/utils/Image';
import { IStateCarousel } from '../../interface';
import ProgressCircle from '../../components/utils/ProgressRing';
import ProgressRing from '../../components/utils/ProgressRing';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCommentDots, faPlusSquare, faUser } from '@fortawesome/free-solid-svg-icons';
import { relative } from 'path';

export default class MainProjects extends React.Component<{},{}>{
  
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
                name: 'Mikasa',
                username: 'mikasa',
                image: {
                    profile: 'http://localhost:8080/public/users/mikasa.jpg'
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
                name: 'Nadine Wegas',
                username: 'nadinewegas',
                image: {
                    profile: 'http://localhost:8080/public/users/nadine.jpg'
                }
            },
            bag: {
                meta: 2000.00,
                collected: 500.00
            }
        },
        {
            title: 'Ashe: Mãe Guerreira edição especial #01',
            description: `Criada nas florestas selvagens do norte, 
                Ashe é uma glacinata, uma guerreira dotada de uma 
                conexão mágica com sua terra congelada – e sobrecarregada 
                pelas expectativas fanáticas de sua mãe. Quando 
                eles partem em uma perigosa busca pela verdade por 
                trás de um mito antigo, os laços são quebrados, 
                os segredos vêm à luz e Runeterra é mudada para 
                sempre.`,
            image: {
                background: 'http://localhost:8080/public/projects/lol/bg.jpg',
                main: 'http://localhost:8080/public/projects/lol/main.jpeg'
            },
            creator: {
                name: 'Stephany Tenório',
                username: 'stebani',
                image: {
                    profile: 'http://localhost:8080/public/users/ste.jpg'
                }
            },
            bag: {
                meta: 12000.00,
                collected: 9345.00
            }
        }
    ];

    listProjects(){
        return this.PROJECT_CAROUSEL.map( (proj:Project, i: number) => {
            const aux = ((proj.bag.collected) * 100) / proj.bag.meta;
            const percent = ( aux > 100 )? 100 : aux;
            return (
                <div className="eachProject" onClick={()=>{}}>
                    <div className="eachProjectCover">
                        {/* BACKGROUND */}
                        <Image className="cover" path={proj.image.main}/>
                        <Image className="eachProjectOwner" path={proj.creator.image.profile}/>
                    </div>
                    <div className="eachProjectInfo">
                        <div className="eachProjectTag">
                            <a href="/explore/<?= urlencode($proj->category);?>/1">
                                <i className="fa fa-tag" aria-hidden="true"></i><span> { /*proj.category */} </span>
                            </a>
                            <h2>{ proj.title }</h2>
                            <p>
                                { proj.description }
                            </p>

                            <div className="goal">
                                <p><span>R$ { proj.bag.collected },00</span> acumulados</p>
                                <div className="progressbar">
                                    <div className="value" style={{ width: `${percent}%`}} ></div>
                                </div>
                                <ul>
                                    <li>{ Math.ceil(aux)}%</li>
                                    <li>Aberto até <span></span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>);
        });
    }

    render(){
        return(
            <section id="indexProjects">
                <div className="wrapper">
                    <ul id="pTypes">
                        <li data-type="pop">
                            <FontAwesomeIcon icon={faStar} /> Projetos populares
                        </li>
                        <li data-type="cmt">
                            <FontAwesomeIcon icon={faCommentDots} /> Projetos mais comentados
                        </li>
                        <li data-type="new">
                            <FontAwesomeIcon icon={faPlusSquare} /> Novos projetos
                        </li>
                        <li data-type="aut">
                            <FontAwesomeIcon icon={faUser} /> Novos autores
                        </li>
                        {/* <?php if(PageController::is_logged()){ ?>
                            <li>
                                <i class="fa fa-map-o" aria-hidden="true"></i> Populares Perto de você
                            </li>
                        <?php } ?>     */}
                        <li id="seeAll"><a href="/explore">Ver todos</a></li>
                    </ul>

                    <div id="listProjects">

                        { this.listProjects() }
                        
                    </div>
                </div>
            </section>
        );
    }
}
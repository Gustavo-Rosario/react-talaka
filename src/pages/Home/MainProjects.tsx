import * as React from 'react';
import ItemList from '../../components/utils/ItemList';
import { Project } from '../../../models/Project';
import Image from '../../components/utils/Image';
import { IStateCarousel, IStateMainProjetcs } from '../../interface';
import ProgressCircle from '../../components/utils/ProgressRing';
import ProgressRing from '../../components/utils/ProgressRing';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCommentDots, faPlusSquare, faUser, faTag } from '@fortawesome/free-solid-svg-icons';
import { relative } from 'path';
import ProjectFactory from '../../services/ProjectFactory';
import BookLoader from '../../components/utils/BookLoader';

export default class MainProjects extends React.Component<{}, IStateMainProjetcs>{
  
    state = {
        projects: [],
        loading: false
    }

    async componentDidMount(){
        const projects = await ProjectFactory.getProjects();
        this.setState({ projects })
    }

    // Area de Exploracao
    async changeProject(method){ 

        this.setState({ loading: true });
        
        const a = await (async ()=>{
            return global.setTimeout( ()=>Promise.resolve(2),5000) 
        })();

        this.setState({ loading: false });
        // let projectsArea = [].slice.call(document.querySelectorAll("#listProjects .eachProject"));
        // $("#listProjects").html('<section class="loader"><div class="book"><figure class="page"></figure><figure class="page"></figure><figure class="page"></figure></div></section>');
        // let server = document.URL;
    }
    

    listProjects(){
        const { projects } = this.state;
        return projects.map( (proj:Project, i: number) => {
            const aux = ((proj.bag.collected) * 100) / proj.bag.meta;
            const percent = ( aux > 100 )? 100 : aux;
            return (
                <div key={i} className="eachProject" onClick={()=>{}}>
                    <div className="eachProjectCover">
                        {/* BACKGROUND */}
                        <Image className="cover" path={proj.image.main}/>
                        <Image className="eachProjectOwner" path={proj.creator.image.profile}/>
                    </div>
                    <div className="eachProjectInfo">
                        <div className="eachProjectTag">
                            <a href="/explore/<?= urlencode($proj->category);?>/1">
                                <FontAwesomeIcon icon={faTag}/><span> { proj.category } </span>
                            </a>
                            <h2>{ proj.title }</h2>
                            <p className="description">
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
        const { loading } = this.state;
        return(
            <section id="indexProjects">
                <div className="wrapper">
                    <ul id="pTypes">
                        <li data-type="pop" onClick={()=> this.changeProject(1)}>
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

                        { loading ? <BookLoader/> : this.listProjects() }
                        
                    </div>
                </div>
            </section>
        );
    }
}
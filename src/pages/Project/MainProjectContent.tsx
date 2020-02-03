import * as React from 'react';
import Image from '../../components/utils/Image';
import { Project } from '../../../models/Project';
import { Link } from 'react-router-dom';
import { daysLeft } from '../../utils/index';

export default class MainProjectContent extends React.Component<{project: Project},any>{

    constructor(props){
        super(props);
    }

    render(){
        const { project } = this.props;
        const aux = ((project.bag.collected) * 100) / project.bag.meta;
        const percent = ( aux > 100 )? 100 : aux;
        return (
            <> 
                <Image className="headerProject cover" path={project.image.background}/>
                {/*Página de Projeto*/}
                <section id="infosProject">
                    <div className="wrapper">
                        <div id="projetoDestaque">
                            <div id="projetoCapa">
                                <Link to={`/perfil/${project.creator.username}`}>
                                    <Image alt={project.creator.name} id="projetoDono" path={project.creator.image.profile}/>
                                </Link>
                                <Image alt="Capa do projeto" path={project.image.main} />
                            </div>

                            <div id="projetoMeta" style={{ marginTop: "115px"}}>
                                <div id="projetoAcumulado">
                                    <p id="projAcumulado">
                                        <i>R$</i><span>{ project.bag.collected },00 arrecadado</span>
                                    </p>
                                    <p id="projMeta">
                                        meta <b>R${ project.bag.meta },00</b>
                                    </p>
                                </div>
                                <div id="projetoProgresso">
                                    <div id="projetoBar" style={{width: `${percent}%`}}></div>
                                </div>
                                <div id="projetoStatus">
                                    <ul>
                                        <li>
                                            <b>{ /*project.visit*/ } 29</b> investidores
                                        </li>

                                        <li>
                                            <b> {Math.round(percent)}%</b> arrecadado
                                        </li>

                                        <li>
                                            {/* = round( ( strtotime($proj->dtF) - strtotime(date("Y-m-d")) ) / (60 * 60 * 24) ); ?> */}
                                            <b>{ daysLeft(project.end) }</b> dias restando
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id="projetoInformacoes">
                            <h1>
                                {project.title}
                            </h1>

                            <h2>
                                <i className="fa fa-user" aria-hidden="true"></i> Projeto criado por:
                                <Link to={`/perfil/${project.creator.username}`}> {project.creator.name}</Link>
                            </h2>

                            {/* {proj->coauthor !== "no")
                            <div className="coauthor">
                                <h2>
                                    <i className="fa fa-users" aria-hidden="true"></i> Co-Autores:
                                </h2>
                                <ul id="coauthor">
                                    php array_map(function($coauthor)
                                    $co = explode(":",$coauthor);
                                ?>
                                    <a href="/perfil/<?= $co[2]; ?>">
                                    "background-image:url(= base_url; ?>user-img/= $co[1] ; ?>)"
                                        <li data-title="<?= $co[0]; ?>" ></li>
                                    </a>
                                    php },explode(",",$proj->coauthor)); ?>
                                </ul>

                            </div>
                            php }?> */}
                            <p>
                                <span id="descricao">Descrição</span>
                                { project.description }
                            </p>
                            <ul id="categorias">
                                <a href="/explore/<?= urlencode($proj->category->name);?>/1">
                                    <li id="categoriaPrincipal">
                                        <i className="fa fa-bookmark" aria-hidden="true"></i>
                                        { project.category }
                                    </li>
                                </a>
                                {/* php if($proj->tags !== "no") 
                                        array_map(function($tag)
                                            $t = explode(":",$tag);
                                        ?>
                                <a href="/explore/<?=$t[1];?>/1">
                                    <li>
                                        <i className="fa fa-tag" aria-hidden="true"></i>
                                        = $t[1];//Name?>
                                    </li>
                                </a>
                                php
                                        },explode(",",$proj->tags)) ;
                                        }?> */}
                            </ul>
                            <div id="botoes">
                                <div className="buttons financiarProjeto" id="<?= PageController::is_logged() ? 'financiarProjeto' : 'loginNecessario' ;?>">
                                    Financiar projeto
                                </div>
                                <a href='/Talaka/resources/scott.pdf' target='_blank'>
                                    <div className="buttons" id="visualizarDemonstracao">
                                        Visualizar demonstração
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}
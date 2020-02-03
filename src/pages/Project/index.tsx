import * as React from 'react';
import Page from '../../components/utils/Page';
import ProjectFactory from '../../services/ProjectFactory';
import { Project } from 'models/Project';
import MainProjectContent from './MainProjectContent';
export default class ProjectPage extends React.Component<any,{title:string, project?: Project}>{

    constructor(props){
        super(props);
        const { title } = this.props.match.params;
        this.state = {
            title,
            project: null
        }
    }

    async componentDidMount(){
        const { id } = this.props.match.params;
        const project = ProjectFactory.getProject(id);
        if(!project){
            try{
                this.props.history.push('/');
            }catch(e){
                console.log(e);
            }
        }
        this.setState({ project })
    }

    render(){
        const { project } = this.state;  
        return project ? (
            <Page title={ `TALAKA - ${project.title}` }>
                <MainProjectContent project={project} ></MainProjectContent>
            </Page>
        ) : <></>
    }

}
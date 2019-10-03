import axios from 'axios';

export default class BaseFactory{
    //PROPERTIES
    private baseRoute:string;
    protected axios:any;

    constructor({baseRoute}: {baseRoute:string}){
        this.baseRoute = baseRoute;
        this.axios = axios;
    }

}
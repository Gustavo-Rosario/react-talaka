import { Project } from "models/Project";

export interface IPropHeader{
    title: string
}

export interface IPropItemList{
    label: string
    link?: string
    external?: Boolean
}

export interface IPropImage{
    path: string,
    alt?: string,
    description?: string,
    className?: string,
    imgClass?: string,
    id?: string
}

export interface IPropProgressRing{
    radius: number,
    stroke: number,
    progress: number,
    color?: string,
    inline?: boolean
}

export interface IPropPage{
    title?: string
}

export interface IStateCarousel{
    projects: Array<Project>
    actualCarousel: number, 
    spinCarouselInterval?: NodeJS.Timeout
}


export interface IStateMainProjetcs{
    projects: Array<Project>
    loading?: boolean
}
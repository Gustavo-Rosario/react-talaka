import User from "./User";

export class Project{
    id: string;
    title: string;
    description: string;
    creator: User;
    category?: string;
    coauthor?: [User]
    bag: {
        meta: number;
        collected: number;
    };
    image?: {
        main: string,
        background: string
    };
    end: string | Date
}
import User from "./User";

export class Project{
    title: String;
    description: String;
    creator: User;
    category?: string;
    coauthor?: [User]
    bag: {
        meta: number;
        collected: number;
    }
    image?: {
        main: string,
        background: string
    }
}
import User from "./User";

export class Project{
    title: String;
    description: String;
    creator: User;
    coauthor?: [User]
    bag: {
        meta: Number;
        collected: Number;
    }
    image?: {
        main: String,
        background: String
    }
}
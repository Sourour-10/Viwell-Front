import { User } from "./User";
import { Subject } from "./subject";


export class Article {


    articleId: number;
    text:string;
    subject: Subject;
    user: User;
    responses: Set<Response>;

}

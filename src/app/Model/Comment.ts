import { Post } from "./Post";
import { User } from "./User";


export class Comment{

    commentId: number;
    text : string;
    date : Date;
    PostCommented : Post;
    Nlikes : number;
    user : User;
    parent: Comment;
}


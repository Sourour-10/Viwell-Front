import { Post } from "./Post";
import { User } from "./User";
import { Comment } from "./Comment";

export enum Reaction {
    LIKE,
    ADORE,
    HAHA,
    WOW,
    CRY,
    ANGRY
}
export class React{

    reactId: number;
    reaction : Reaction;
    PostLike : Post;
    commentLike : Comment;

}

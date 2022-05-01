import { Post } from "./Post";
import { User } from "./User";

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

}

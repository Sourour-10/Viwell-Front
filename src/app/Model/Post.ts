import { User } from "./User";

export class Post{
     postId!: number;
     text!: string;
     date!: Date;
     nlikes!: number;
     idPhoto:any;
     parent:Post;

}
import { Category } from "./category";

export class Activity {
    activityId: number;
    description: string;
    image: string;
    place: string;
    date: Date;
    rating: number;
    nbrLikes: number;
    category: Category;
}

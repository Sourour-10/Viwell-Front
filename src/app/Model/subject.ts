
import { Article } from "./article";

export class Subject {

    subjectId: number;
    name: string;
    approved: boolean;
    articles:Set<Article>;
}

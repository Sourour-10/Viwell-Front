export class Event {

    eventId: number;
    title:string;
    description:string;
    place:string;
    publishDate:Date ;
    startDate:Date;
    endDate:Date ;
    isApprooved: Boolean = true;
    privateEvent: Boolean;
    rating: number;
    ratingNumber: number;
    tarif: number;
    points: number;
}
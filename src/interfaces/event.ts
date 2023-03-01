export interface EventProp {
    id: number;
    name: string;
    description: string;
    venue: string;
    datetime: Date;
    timezone: string;
    imgUrl: string;
    areSeatsAvailable: boolean;
    isRegistered: boolean;
    isBookmarked: boolean;
    isRegisterable?: boolean;
}

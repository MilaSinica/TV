export enum ProgramType {
    Series = "series",
    Movie = 'movie'
}

export enum Rating {
    Mature15 = "MA 15+",
    Mature = 'M',
    ParentalGuidance = 'PG',
    Restricted = 'R 18+',
}

export enum Genre {
    Drama = 'Drama',
    Comedy = 'Comedy',
    Crime = 'Crime',
    Fantasy = 'Fantasy',
    Reality = 'Reality',
    Thriller = 'Thriller',
    Action = 'Action',
    SciFi = 'Sci-Fi',
    Horror = 'Horror',
    Western = 'Western',
    Documentary = 'Documentary',
    Romance = 'Romance',
    Animation = 'Animation'

}

export enum Language {
    English = 'English',
    Spanish = 'Spanish',
    French = 'French',
    Iranian = 'Iranian'
}

export interface Program {
    id: number;
    title: string;
    description: string;
    type: ProgramType;
    image: string;
    rating: Rating;
    genre: Genre;
    year: number;
    language: Language;
}

export type Route = {
    title: string;
    path: string;
    hasNavItem: boolean;
    match?: RegExp;
}

export type CarouselItem = {
    imageUrl: string;
    title: string;
    link: string;
    id: number;
}
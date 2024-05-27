import { News } from "src/news/entities/news.entity";

export enum Topics {
    ECONOMY = 'economy',
    EDUCATION = 'education',
    DIVERSITY = 'diversity'
}

export interface NewsDTO {
    headline: News;
    illustrated_news: News[];
}
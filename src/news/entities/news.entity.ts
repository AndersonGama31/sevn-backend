import { Topics } from "src/types";

export class News {
    id: string;
    title: string;
    subtitle: string;
    date: string;
    image: string | null;
    content: string;
    topic: Topics;
}

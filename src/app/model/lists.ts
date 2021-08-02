import { ICard } from "./cards";

export interface IList {
    id: string;
    name: string;
    cards: ICard[];
}
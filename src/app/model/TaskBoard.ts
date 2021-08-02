import { ICard } from "./cards";
import { IList } from "./lists";
export class TaskBoard {
    lists: Array<IList> = [];
    lastListId = -1;
    lastCardId = 1;

    constructor() {
        let taskBoardData = localStorage.getItem('boardData')
        if (taskBoardData) {
            let parsed: TaskBoard = JSON.parse(taskBoardData);
            this.lists = parsed.lists;
            this.lastListId = parsed.lastListId;
            this.lastCardId = parsed.lastCardId;
        }
    }

    createList(title) {
        let list: IList = {
            id: String(++this.lastListId),
            name: title,
            cards: []
        }
        this.lists.push(list);
        return list;
    }

    createCard(title: string, desc: string): ICard {
        let card: ICard = {
            id: String(++this.lastCardId),
            title: title,
            description: desc,
            creationTime: new Date().getTime(),
        }
        return card;
    }

    deleteList(listId) {
        this.lists = this.lists.filter(l => l.id !== listId);
    }

    deleteCard(cardId, listId) {
        let listIndex = this.lists.findIndex(l => l.id === listId);
        this.lists[listIndex].cards = this.lists[listIndex].cards.filter(c => c.id !== cardId)
    }

    addCard(cardId, fromListId, toListId) {
        let listIndex = this.lists.findIndex(l => l.id === fromListId);
        let card = this.lists[listIndex].cards.find(c => c.id === cardId);
        let toListIndex = this.lists.findIndex(l => l.id === toListId);
        this.lists[toListIndex].cards.push(card)
    }

    sort(listId) {
        let listIndex = this.lists.findIndex(l => l.id === listId);
        this.lists[listIndex].cards.sort((a, b) => { return a.creationTime - b.creationTime });
    }

}

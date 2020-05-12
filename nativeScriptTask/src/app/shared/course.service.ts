import { Injectable } from "@angular/core";

export interface DataItem {
    id: number;
    name: string;
    description: string;
    picture: string;
    duration: string;
    date: string;
}

@Injectable({
    providedIn: "root"
})
export class CourseService {

    private items = new Array<DataItem>(
        {
            id: 1,
            name: "Learning Angular",
            description: "Learn how to use Angular Core",
            picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png',
            duration: '1hr 30min',
            date: '2018-11-5'
        },
        {
            id: 2,
            name: "Learning React",
            description: "Learn React/Redux + React Hooks",
            picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
            duration: '40 min',
            date: '2018-11-5'
        },
        {
            id: 3,
            name: "Learning Vue",
            description: "Go from Zero to Hero in no time",
            picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png',
            duration: '55 min',
            date: '2018-11-5'
        },
        {
            id: 4,
            name: "Ember Essentials",
            description: "Effective Ember Tutorial",
            picture: 'https://upload.wikimedia.org/wikipedia/en/6/69/Ember.js_Logo_and_Mascot.png',
            duration: '2hr 45min',
            date: '2018-11-5'
        }
    );

    getItems(): Array<DataItem> {
        return this.items;
    }
    removeItem(id) {
        let idx = this.items.findIndex(item => item.id === id);
        if (idx > -1) {
            this.items.splice(idx, 1);
        }
    }
    getItem(id: number): DataItem {
        return this.items.filter((item) => item.id === id)[0];
    }
    updateItem(item: DataItem) {
        const idx = this.items.findIndex(_item => _item.id === item.id)
        this.items.splice(idx, 1, item)
        console.log(this.items);
    }
    addItem(item: DataItem) {
        const lastIndex = this.items[this.items.length - 1].id;
        const newLastIndex = lastIndex + 1;
        item.id = newLastIndex;
        this.items.push(item);
    }
}

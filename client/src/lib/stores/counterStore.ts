
import { makeAutoObservable, } from 'mobx'


export default class CounterStore {
    title = 'Counter store';
    count = 7;
    events: string[] = [
        `Initial count is ${this.count}`
    ]

    constructor() {
        // makeObservable(this, {
        //     title: observable,
        //     count: observable,
        //     increment: action,
        //     decrement: action
        // })

        makeAutoObservable(this)

    }

    // Have to use arrow functions and not regular functions inside of classes
    increment = (amount = 1) => {
        this.count += amount;
        this.events.push(`Increment by ${amount} - count is now ${this.count}`)
    }

    decrement = (amount = 1) => {
        this.count -= amount;
        this.events.push(`Decremented by ${amount} - count is now ${this.count}`)
    }

    // this is called a computed property I think???
    get eventCount() {
        return this.events.length
    }

}
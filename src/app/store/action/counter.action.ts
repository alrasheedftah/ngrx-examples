

export const INCREMENT = "increment"
export const DECREMENT = "decrement"



// ACtion With Payload
export class IncrementAction {
    type  = INCREMENT
    payload : number 
    constructor (payload : number){
        this.payload = payload;
    }

}


export class DecrementAction{
    type  = DECREMENT
    payload : number;
    constructor (payload : number){
        this.payload = payload;
    }

}
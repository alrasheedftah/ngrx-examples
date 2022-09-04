

export const INCREMENT = "increment"
export const DECREMENT = "decrement"

export interface StoreInterface{
    counter : Counter
}

interface Counter  {
    n : 0
}

let inialState = {
    n : 0
}

export function reducerFunction(state = inialState ,action : any ){
    switch(action.type){
        case INCREMENT : 
        return {
            // Without Payload
            // n : state.n + 1

            // With Payload Params
            n : state.n + action.payload
        }

        case  DECREMENT :
            return {
                n : state.n - 1
            }

        default :
            return state;    
    }
}




interface CustomAction{
    payload : any ;
    type : string ;
}


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


import { Action } from "@ngrx/store";


export interface StoreInterface{
    counter : Counter
}

interface Counter  {
    n : 0
}

let inialState = {
    n : 0
}

export function reducerFunction(state = inialState ,action : Action ){
    switch(action.type){
        case 'incr' : 
        return {
            n : state.n + 1
        }

        case  'decr' :
            return {
                n : state.n - 1
            }

        default :
            return state;    
    }
}


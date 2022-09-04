import { DECREMENT, INCREMENT } from "../action/counter.action";
import { CustomAction } from "../store";


export  interface Counter  {
    n : 0
}

let inialState = {
    n : 0
}




export function reducerFunction(state = inialState ,action : CustomAction ){
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







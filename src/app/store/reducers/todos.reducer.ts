import { DECREMENT, INCREMENT } from "../action/counter.action";
import { ERROR, SUCCESS } from "../action/todo.action";
import { CustomAction } from "../store";


export  interface Todo  {
    userId : number;
    id : number;
    title : string;
    completed :boolean
}


export function todosListReduser(state : Todo[] = [] ,action : CustomAction ) : Todo[]{
    switch(action.type){
        case SUCCESS: 
        return action.payload ;
        case  ERROR :
            console.warn("Error is     ",action.payload)
            return state
        default :
        return state

    }
}







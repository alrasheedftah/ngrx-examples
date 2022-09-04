import { ActionReducerMap } from "@ngrx/store";
import { Counter, reducerFunction } from "./reducers/counter.reducer"
import { Todo, todosListReduser } from "./reducers/todos.reducer";


export interface StoreInterface{
    counter : Counter
    todos : Todo[]
}


export interface CustomAction{
    payload? : any ; // must be allow null Or disable ts-compiler 
    type : string ;
}



export const reducer : ActionReducerMap<StoreInterface> = { counter : reducerFunction , todos : todosListReduser }
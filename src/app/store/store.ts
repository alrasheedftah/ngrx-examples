import { ActionReducerMap } from "@ngrx/store";
import { Counter, reducerFunction } from "./reducers/counter.reducer"


export interface StoreInterface{
    counter : Counter
}


export interface CustomAction{
    payload? : any ; // must be allow null Or disable ts-compiler 
    type : string ;
}



export const reducer : ActionReducerMap<StoreInterface> = { counter : reducerFunction }
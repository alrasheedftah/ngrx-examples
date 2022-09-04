import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Counter } from "../reducers/counter.reducer";
import { Todo } from "../reducers/todos.reducer";

// this createFeutureSelector take The Nmae Of Reducer is counter in definition
let counterFetureSelector = createFeatureSelector<Todo>("todos");

// here create Selector nameSelector That Return Part Of My State Also I Can Typed Any Condition Or Operator Logical 
export let TodoSelector = createSelector(counterFetureSelector,state => state);

// After That I Can Use it In Component 
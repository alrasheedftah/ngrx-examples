import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Counter } from "../reducers/counter.reducer";

// this createFeutureSelector take The Nmae Of Reducer is counter in definition
let counterFetureSelector = createFeatureSelector<Counter>("counter");

// here create Selector nameSelector That Return Part Of My State Also I Can Typed Any Condition Or Operator Logical 
export let nameSelector = createSelector(counterFetureSelector,state => state.n);

// After That I Can Use it In Component 
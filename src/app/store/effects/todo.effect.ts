import { HttpClient } from "@angular/common/http";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ErrorAction, LOAD, SuccessAction } from "../action/todo.action";


import { catchError, map, mergeMap } from 'rxjs/operators'
import { Injectable } from "@angular/core";
import { of } from "rxjs";

@Injectable()
export class TodosEffects {

    todosEffect = createEffect(() => this.actions.pipe(
        ofType(LOAD),
        mergeMap(()=>this.http.get("https://jsonplaceholder.typicode.com/todos/")
        .pipe(
            map((data) => new SuccessAction(data)),
            catchError((error) => of(new ErrorAction(error)))
        ))
    ) )
    constructor(private http : HttpClient,private actions :Actions){

    }
}
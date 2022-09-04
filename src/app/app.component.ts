import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { DecrementAction, IncrementAction } from './store/action/counter.action';
import { nameSelector } from './store/selectors/counter.selector';
import {  StoreInterface } from './store/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'full-ngrx-concept';

  count : number  = 0
  constructor(private store : Store<StoreInterface>){
    // Without Selector 
    // this.store.subscribe(data => {
    // console.log(data)
      
    //   this.count = data.counter.n})

    // By Selector 
    this.store.select(nameSelector).subscribe(data => this.count = data)
  }


  decrement(){
    this.store.dispatch(new DecrementAction(2))
  }

  increment(){
    this.store.dispatch(new IncrementAction(3))
  }  

}

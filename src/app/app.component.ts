import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { DecrementAction, IncrementAction, StoreInterface } from './store/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'full-ngrx-concept';

  count : number  = 0
  constructor(private store : Store<StoreInterface>){
    this.store.subscribe(data => {
    console.log(data)
      
      this.count = data.counter.n})
  }


  decrement(){
    this.store.dispatch(new DecrementAction(2))
  }

  increment(){
    this.store.dispatch(new IncrementAction(3))
  }  

}

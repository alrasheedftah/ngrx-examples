import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { reducer } from './store/store';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { TodosEffects } from './store/effects/todo.effect';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducer),
    EffectsModule.forRoot([TodosEffects])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

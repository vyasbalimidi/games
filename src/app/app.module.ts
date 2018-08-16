import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BullsAndCowsComponent } from './bulls-and-cows/bulls-and-cows.component';

@NgModule({
  declarations: [
    AppComponent,
    BullsAndCowsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

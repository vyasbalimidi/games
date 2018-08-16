import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  gameTitle = 'Bulls & Cows';
  gameDescription = 'Guess the 4 digit number with the hints given as number of Bulls & Cows';
}

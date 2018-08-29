import { Component, OnInit } from "@angular/core";
import { Trail } from "../model/trail";

@Component({
  selector: "app-bulls-and-cows",
  templateUrl: "./bulls-and-cows.component.html",
  styleUrls: ["./bulls-and-cows.component.css"]
})
export class BullsAndCowsComponent implements OnInit {
  secretNumber: number[];
  guess: number[];

  validNumbers: boolean;
  hasDuplicates: boolean;
  gameover: boolean;

  trails: Trail[];

  constructor() { }

  ngOnInit() {
    this.startNewGame();
  }

  startNewGame() {
    this.secretNumber = this.generateSecretNumber();
    this.guess = [0, 1, 2, 3];

    this.validNumbers = true;
    this.hasDuplicates = false;
    this.gameover = false;

    this.trails = [];

    console.log("Secret number: " + this.secretNumber);
  }

  private generateSecretNumber() {
    var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    nums.sort(() => Math.random() - 0.5);
    return nums.slice(0, 4);
  }

  check() {
    let set = new Set(this.guess);
    this.hasDuplicates = set.size != 4;

    if (!this.hasDuplicates) {
      this.calculateBullsAndCows();
    }
  }

  private calculateBullsAndCows() {
    var bulls = 0;
    var cows = 0;

    for (var i = 0; i < this.secretNumber.length; i++) {
      let num = this.secretNumber[i];

      if (num == this.guess[i]) {
        bulls = bulls + 1;
      } else if (this.guess.find(k => k == num) == num) {
        cows = cows + 1;
      }
    }

    let guessCopy = this.guess.slice(0, this.guess.length);
    let trail = new Trail(guessCopy, bulls, cows);

    this.trails.unshift(trail);
    this.gameover = bulls == 4;
  }
    
  validate() {
    this.validNumbers =
      this.guess[0] != null && this.guess[0] >= 0 && this.guess[0] <= 9 &&
      this.guess[1] != null && this.guess[1] >= 0 && this.guess[1] <= 9 &&
      this.guess[2] != null && this.guess[2] >= 0 && this.guess[2] <= 9 &&
      this.guess[3] != null && this.guess[3] >= 0 && this.guess[3] <= 9;
  }
}

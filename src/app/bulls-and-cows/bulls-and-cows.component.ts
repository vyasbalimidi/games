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

  showDuplicates: boolean;
  trails: Trail[];

  constructor() {}

  ngOnInit() {
    this.startNewGame();
  }

  startNewGame() {
    this.secretNumber = this.generateSecretNumber();
    this.guess = [0, 1, 2, 3];

    this.showDuplicates = false;
    this.trails = [];

    console.log("Secret number: " + this.secretNumber);
  }

  private generateSecretNumber() {
    var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    nums.sort(() => Math.random() - 0.5);
    return nums.slice(0, 4);
  }

  increment(index: number) {
    this.guess[index] = this.guess[index] == 9 ? 0 : this.guess[index] + 1;
  }

  check() {
    let set = new Set(this.guess);
    this.showDuplicates = set.size != 4;

    if (!this.showDuplicates) {
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

    this.trails.push(trail);
  }
}

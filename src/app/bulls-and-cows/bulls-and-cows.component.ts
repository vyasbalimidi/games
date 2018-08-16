import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-bulls-and-cows",
  templateUrl: "./bulls-and-cows.component.html",
  styleUrls: ["./bulls-and-cows.component.css"]
})
export class BullsAndCowsComponent implements OnInit {
  message: string

  constructor() {}

  ngOnInit() {}

  increment(event: MouseEvent) {
    let element = event.srcElement;
    let num = element.innerHTML;
    let nextNum = num == "9" ? 0 : Number.parseInt(num) + 1;

    element.innerHTML = nextNum.toString();
  }

  guess() {
    this.message = "Under construction";
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  nextNum = 0;
  numbers: Number[] = [];

  constructor() {}

  ngOnInit(): void {
    this.addNumbers();
  }

  addNumbers() {
    for(let i = 0; i < 10; i++) {
      this.numbers.push(this.nextNum);
      this.nextNum++;
    }
  }

  onInfiniteScroll(e: any) {
    console.log("Infinite scroll fired");
    this.addNumbers();
    e.target.complete();
  }
}

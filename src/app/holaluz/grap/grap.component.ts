import { PriceService } from './../shared/price.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grap',
  templateUrl: './grap.component.html',
  styleUrls: ['./grap.component.less']
})
export class GrapComponent implements OnInit {

  data = [];
  view = [1200, 400];
  arr = [
    "Hello world", // -> "world Hello"
    "I hate doing technical tests", // -> "tests technical doing hate I"
    "Holaluz is a great place to work", // -> "work to place great a is Holaluz"
  ]
  constructor(private service: PriceService) { }

  ngOnInit() {
    this.service.getPrices().subscribe(result => {
      this.data = result;
    })

    for (var i in this.arr) {
      this.reverseWordsInSentence(this.arr[i]);
    }
  }

  private reverseWordsInSentence(str) {
    console.log(str.split(" ").reverse().join(' '));
  }
  
 
}

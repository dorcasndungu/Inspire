import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-view',
  templateUrl: './quote-view.component.html',
  styleUrls: ['./quote-view.component.css']
})
export class QuoteViewComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(1, 'I dont count my sit-ups; I only start counting when it starts hurting because theyre the only ones that count.', 'Muhammad Ali', 'Dorcas M.', new Date(2020, 3, 14), 60, 50),
    new Quote(2, 'I hated every minute of training, but I said,Dont quit. Suffer now and live the rest of your life as a champion.', 'Muhammad Ali', 'Rukia H.', new Date(2022, 1, 12), 50, 40),
    new Quote(3, 'We are only as blind as we want to be.', 'Maya Angelou', 'Tracy A.', new Date(2019, 0, 18), 40, 30)
   
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

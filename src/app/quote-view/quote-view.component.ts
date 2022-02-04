import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-view',
  templateUrl: './quote-view.component.html',
  styleUrls: ['./quote-view.component.css']
})
export class QuoteViewComponent implements OnInit {

  quotes:Quote[]=[
    new Quote(1, 'I dont count my sit-ups; I only start counting when it starts hurting because theyre the only ones that count.', 'Muhammad Ali','Dorcas M.',new Date(2020,3,14)),
    new Quote(2,'Even at your best someone will see a goat so be the baddest goat','Wapili Wapili','Mwihaki N.',new Date(2019,6,9)),
    new Quote(3,'I hated every minute of training, but I said,Dont quit. Suffer now and live the rest of your life as a champion.','Muhammad Ali','Rukia H.',new Date(2022,1,12)),
    new Quote(4,'We are only as blind as we want to be.','Maya Angelou','Tracy A.',new Date(2019,0,18)),
    new Quote(5,'I am the greatest. I said that even before I knew I was. I figured that if I said it enough, I would convince the world that I really was the greatest.','Muhammad Ali','Frank W.',new Date(2019,2,14)),
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

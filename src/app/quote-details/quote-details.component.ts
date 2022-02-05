import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  @Input()
  quote?:Quote
  @Input()quotes?:Quote
  @Output()deleteEmit=new EventEmitter<boolean>();

  toDelete(){
    this.deleteEmit.emit(true);
  }


  constructor() { }

  ngOnInit(): void {
  }

}

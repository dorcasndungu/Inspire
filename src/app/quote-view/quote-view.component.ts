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
    new Quote(2, 'I hated every minute of training, but I said,Dont quit. Suffer now and live the rest of your life as a champion.', 'Muhammad Ali', 'Rukia H.', new Date(2014, 1, 12), 50, 40),
    new Quote(3, 'We are only as blind as we want to be.', 'Maya Angelou', 'Tracy A.', new Date(2019, 0, 18), 40, 30)
   
  ]
  toggleDetails(i:number) {
    this.quotes[i].showDetails=!this.quotes[i].showDetails;
    
  }

  deletingAsap(deleteEmit:boolean,i:number){
    if(deleteEmit){
      let letDelete=confirm("Do you want to delete the quote?")
      if(letDelete){
        this.quotes.splice(i,1);
      }
    }
  }
  addQuote(quote:Quote){
    let quotesLength=this.quotes.length;
    quote.id=quotesLength+1;
    quote.completeDate=new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  mostUps(){
    for(let i=0;i<this.quotes.length;i++){
      let upArr:any=[]
    upArr.push(this.quotes[i].upVotes);
    let max = Math.max(upArr);
    let indexUpvotes = upArr.indexOf(max);
    
      if(indexUpvotes==i){
        this.quotes[i].highlight==true;
      }
    }
    

  }
  
  upVoting(i:number){
    this.quotes[i].upVotes +=1;
  }
  downVoting(i:number){
    this.quotes[i].downVotes +=1;
  }
  constructor() { }

  ngOnInit(): void {
  }

  /*totalVotes(i:number){
    let allVotes=this.quotes[i].upVotes+this.quotes[i].downVotes;
    return allVotes;
  }*/
}

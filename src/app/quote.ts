export class Quote {
  showDetails:boolean;
  constructor(public id:number,public quotation: string,public author: string,public submitter: string, public completeDate: Date,public upVotes:Number,public downVotes:Number){
    this.showDetails=false;

}
}
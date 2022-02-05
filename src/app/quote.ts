export class Quote {
  showDetails:boolean;
  highlight:boolean;
  constructor(public id:number,public quotation: string,public author: string,public submitter: string, public completeDate: Date,public upVotes:number,public downVotes:number){
    this.showDetails=false;
    this.highlight=false;

}
}
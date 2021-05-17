import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  @Input() quote;
  @Output() thisEvent = new EventEmitter<string>();

  upvote(){
    this.quote.upvote += 1;
    this.thisEvent.emit("upvote");
  }
  downvote(){
    this.quote.downvote += 1;
    this.thisEvent.emit("downvote");
  }

  constructor() { }

  ngOnInit(): void {
  }

}
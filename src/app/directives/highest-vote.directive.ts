import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighestVote]'
})
export class HighestVoteDirective implements OnInit{

  @Input("upvote") upvote: boolean;
  @Input("quote") quote; 

  @HostListener("window:click") mouse(){
    if (this.quote.maxUpvote === true){
      this.element.nativeElement.style.backgroundColor = "#FFE600aa";
      console.log("yes")
    } else {
      this.quote.maxUpvote = false;
      this.element.nativeElement.style.backgroundColor = "#00000000";
    }
  }
  
  constructor(private element: ElementRef) {}

  ngOnInit(){}
}

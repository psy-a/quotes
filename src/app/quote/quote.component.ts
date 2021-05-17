import { Component, OnInit } from '@angular/core';
import { Quote } from "../../quote"

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1, "You miss 100% of the shots you don't take.he greatest glory in living lies not in never falling, but in rising every time we fall.", 0, 0, "Wayne Gretzky", "Psy Aspin"),
    new Quote(2, "Whether you think you can or you think you can't, you're right.", 0, 0, "Henry Ford", "Psy Aspin"),
    new Quote(3, "The question isn't who is going to let me; it's who is going to stop me.", 0, 0, "Ayn Rand", "Psy Aspin"),
    new Quote(4, "I have a dream", 0, 0, "Martin Luther King Jr", "Psy Aspin"),
  ];

  findHighestUpvote(arr) {
    arr.forEach((item)=>{
      item.maxUpvote = false;
    })
    let newArr = arr.map((item) => {
      return item.upvote;
    });
    let highestVoteIndex = newArr.indexOf(Math.max(...newArr));
    return arr.forEach((item, index) => {
      if (index === highestVoteIndex) {
        item.maxUpvote = true;
      }
    })
  }
  newQuote(quote){
    this.quotes.push(quote);
    setTimeout(()=>{
      window.scrollTo(0,document.body.scrollHeight);
    }, 250)
  }


  constructor() { }

  ngOnInit(): void {
  }

}
import { Component, OnInit } from '@angular/core';
import { Quote } from "../../quote"

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1, "The greatest glory in living lies not in never falling, but in rising every time we fall.", 0, 0, "Nelson Mandela", "Victor Maina"),
    new Quote(2, "The way to get started is to quit talking and begin doing.", 0, 0, "Walt Disney", "Victor Maina"),
    new Quote(3, "If life were predictable it would cease to be life, and be without flavor.", 0, 0, "Eleanor Roosevelt", "Victor Maina"),
    new Quote(4, "Spread love everywhere you go. Let no one ever come to you without leaving happier.", 0, 0, "Mother Teresa", "Victor Maina"),
    new Quote(5, "When you reach the end of your rope, tie a knot in it and hang on.", 0, 0, "Franklin D. Roosevelt", "Victor Maina"),
    new Quote(6, "It is during our darkest moments that we must focus to see the light.", 0, 0, "Aristotle", "Victor Maina"),
    new Quote(7, "You will face many defeats in life, but never let yourself be defeated.", 0, 0, "Maya Angelou", "Victor Maina"),
    new Quote(8, "Many of life's failures are people who did not realize how close they were to success when they gave up.", 0, 0, "Thomas A. Edison", "Victor Maina")
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

import { Component, OnInit } from '@angular/core';
import { Quote } from "../../quote"

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1, "I spent a lot of money on booze, birds and fast cars. The rest I just squandered.", 0, 0, "George Best", "Psy Aspin"),
    new Quote(2, "The cars we drive say a lot about us.", 0, 0, "Alexandria Paul", "Psy Aspin"),
    new Quote(3, "There's three things men always talk about - women, sports, and cars.", 0, 0, "Mario Lopez", "Psy Aspin"),
    new Quote(4, "Self-driving cars are the natural extension of active safety and obviously something we should do.", 0, 0, "Elon Musk", "Aspin Isoe"),
    new Quote(5, "But my passion is racing cars. It's what I like to do in my off time.", 0, 0, "Mark-Paul Gosselaar", "Isoe A."),
    new Quote(6, "If GM had kept up with technology like the computer industry has, we would all be driving $25 cars that got 1,000 MPG.", 0, 0, "Bill Gates", "Psy A."),
    new Quote(7, "It's like driving a car at night. You never see further than your headlights, but you can make the whole trip that way.", 0, 0, "E.L. Doctorow", "Psy Isoe"),
    new Quote(8, "It's a never ending battle of making your cars better and also trying to be better yourself.", 0, 0, "Dale Earnhardt", "Psy Aspin"),
    new Quote(8, "Everything in life is somewhere else, and you get there in a car.", 0, 0, "E.B. White", "Psy Aspin"),
    new Quote(8, "I love fast cars... and to go too fast in them.", 0, 0, "Lara Flynn Boyle", "Psy Aspin"),
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

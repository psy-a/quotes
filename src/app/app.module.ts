import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighestVoteDirective } from './directives/highest-vote.directive';
import { QuoteFormComponent } from './components/quote-form/quote-form.component';
import { QuoteComponent } from './components/quote/quote.component';
import { QuoteDetailsComponent } from './components/quote-details/quote-details.component';
import { TimePassedPipe } from './pipes/time-passed.pipe';
import { VoteComponent } from './components/vote/vote.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HighestVoteDirective,
    QuoteFormComponent,
    QuoteComponent,
    QuoteDetailsComponent,
    TimePassedPipe,
    VoteComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

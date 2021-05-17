import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { QuoteComponent } from './quote/quote.component';
import { VoteComponent } from './vote/vote.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { NewQuoteFormComponent } from './new-quote-form/new-quote-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QuoteComponent,
    VoteComponent,
    QuoteDetailsComponent,
    NewQuoteFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

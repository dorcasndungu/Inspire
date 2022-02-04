import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { QuoteViewComponent } from './quote-view/quote-view.component';
import { HighlightDirective } from './highlight.directive';
import { QuoteVotesComponent } from './quote-votes/quote-votes.component';
import { DatePassPipe } from './date-pass.pipe';

@NgModule({
  declarations: [
    AppComponent,
    QuoteFormComponent,
    QuoteDetailsComponent,
    QuoteViewComponent,
    HighlightDirective,
    QuoteVotesComponent,
    DatePassPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

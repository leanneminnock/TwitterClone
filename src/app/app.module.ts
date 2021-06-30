import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TweetStreamComponent } from './tweet-stream/tweet-stream.component';
import { FullTweetComponent } from './full-tweet/full-tweet.component';

@NgModule({
  declarations: [
    AppComponent,
    TweetStreamComponent,
    FullTweetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

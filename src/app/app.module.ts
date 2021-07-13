import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

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
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

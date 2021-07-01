import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullTweetComponent } from './full-tweet/full-tweet.component';
import { TweetStreamComponent } from './tweet-stream/tweet-stream.component';

const routes: Routes = [
  {
    path: "",
    component: TweetStreamComponent
  },
  {
    path: "tweet/:tweetId",
    component: FullTweetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

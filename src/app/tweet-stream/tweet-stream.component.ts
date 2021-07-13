import { Component, OnInit } from '@angular/core';
import { DataStoreService } from '../data-store.service';
import { Tweet } from '../modals/tweet';

@Component({
  selector: 'app-tweet-stream',
  templateUrl: './tweet-stream.component.html',
  styleUrls: ['./tweet-stream.component.css']
})
export class TweetStreamComponent implements OnInit {

  constructor(public data: DataStoreService) { }
  

  ngOnInit(): void {
    this.data.getTweets();
  }

  public onLiked(tweet: Tweet){
     tweet.like = !tweet.like;
  
    }
  public onRetweeted(tweet: Tweet){
     tweet.retweet = !tweet.retweet;
  }

}

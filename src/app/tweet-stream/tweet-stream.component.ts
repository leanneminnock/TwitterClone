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
  public selectedTweet: Tweet | undefined;

  public OnTweetSelected(tweet: Tweet){
    console.log(`Got list: ${tweet.id}!`);
    this.selectedTweet = tweet;
  }

  ngOnInit(): void {
    
  }

}

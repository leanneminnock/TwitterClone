import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataStoreService } from '../data-store.service';
import { Tweet } from '../modals/tweet';

@Component({
  selector: 'app-full-tweet',
  templateUrl: './full-tweet.component.html',
  styleUrls: ['./full-tweet.component.css']
})
export class FullTweetComponent implements OnInit {
  public tweet: Tweet | undefined;

  constructor(public data: DataStoreService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const tweetId = Number(params.get('tweetId'));
      this.tweet = this.data.tweets.find(t => t.id === tweetId);
    });
  }

}

import { Injectable } from '@angular/core';
import { Tweet } from './modals/tweet';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {
public tweets: Tweet[] = 
[
  {
    id: 1,
    author: "Jane Doe",
    publishDate: new Date("2001/2/12"),
    content: "This is a tweet",
    like: false,
    retweet: false
  },
  {
    id: 2,
    author: "Jane Doe",
    publishDate: new Date("2001/2/15"),
    content: "This is my second tweet",
    like: false,
    retweet: false
  },
  {
    id: 3,
    author: "Jane Doe",
    publishDate: new Date("2001/2/18"),
    content: "This tweet can be liked",
    like: false,
    retweet: false
  },
  {
    id: 4,
    author: "Jane Doe",
    publishDate: new Date("2001/2/20"),
    content: "This is a fourth tweet",
    like: false,
    retweet: false
  }
]

  constructor() { }
}

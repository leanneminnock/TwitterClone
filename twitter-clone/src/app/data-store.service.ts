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
    publishDate: 12/2/2001,
    content: "This is a tweet",
    like: false,
    retweet: false
  },
  {
    id: 2,
    author: "Jane Doe",
    publishDate: 15/2/2001,
    content: "This is my second tweet",
    like: false,
    retweet: false
  },
  {
    id: 3,
    author: "Jane Doe",
    publishDate: 18/2/2001,
    content: "This tweet can be liked",
    like: false,
    retweet: false
  },
  {
    id: 4,
    author: "Jane Doe",
    publishDate: 20/2/2001,
    content: "This is a fourth tweet",
    like: false,
    retweet: false
  }
]

  constructor() { }
}

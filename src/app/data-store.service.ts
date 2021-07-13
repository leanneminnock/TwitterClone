import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tweet } from './modals/tweet';


@Injectable({
  providedIn: 'root'
})
export class DataStoreService {
  private _tweetsUrl = "../assets/data.json";
  public tweets: Tweet[] = [];

  constructor(private http: HttpClient) { }

  public getTweets(){
    this.http.get<Tweet[]>(this._tweetsUrl).subscribe(data => this.tweets = data);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { News } from './news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  newsUrl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=d60181dd15a641d19c83dc61cad2271d';

  constructor(private http: HttpClient) { }

  getNews(): Observable<News> {
    return this.http.get<News>(this.newsUrl);
  }
}

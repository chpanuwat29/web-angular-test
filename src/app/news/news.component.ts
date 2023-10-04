import { Component, OnInit, OnDestroy } from '@angular/core';
import { NewsService } from './shared/news.service';
import { News, Article } from './shared/news.model';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit, OnDestroy {
  news: News;
  articles: Article[];
  totalResults: number;
  sub: Subscription;
  isLoading: boolean;

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.getNews();
  }

  getNews() {

    this.isLoading= true;

    this.sub = this.newsService.getNews().subscribe(
        (news) => {
          console.log(news);
          // this.news = news;
          this.articles = news.articles;
          this.totalResults = news.totalResults;
        },
        (error) => {
          console.log(error);
          this.isLoading = false;
        },
        () => {
          this.isLoading = false;
        }
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}

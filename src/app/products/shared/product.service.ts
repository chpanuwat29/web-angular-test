import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productUrl = 'https://codingthailand.com/api/get_courses.php';
  getProductDetailUrl = 'https://codingthailand.com/api/get_course_detail.php?course_id=9';

  constructor(private http: HttpClient) { }

  getProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productUrl);
  }

  getProductDetail(id: number): Observable<any[]> {

    //aaa.php?course_id=9
    const myparams = {
      'course_id': id.toString()
    };

    return this.http.get<any[]>(this.getProductDetailUrl, {params: myparams});
    // return this.http.get<any[]>(this.getProductDetailUrl, { params: myparams });
  }

}

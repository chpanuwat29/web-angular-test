import { ProductService } from './../shared/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  id: number;
  title: string;
  productDetail: any[];

  constructor(private route: ActivatedRoute, private ProductService: ProductService) { } //ดึงActivatedRoute

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id'); //+ แปลงจากstring to number
    this.title = this.route.snapshot.paramMap.get('title');
    this.getDetail();
  }

  getDetail() {
    this.ProductService.getProductDetail(this.id).subscribe(
      (productDetail) => {
        console.log(productDetail);
        this.productDetail = productDetail;
      }
    );
  }

}
